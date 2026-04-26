import { spawnSync } from 'node:child_process';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { wrapperRoots } from './skill-library-utils.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const expectedInstallRoot = process.env.SKILLS_EXPECTED_INSTALL_ROOT?.trim() || null;
const supportedInstallAgents = ['codex', 'cursor', 'github-copilot', 'opencode'];

const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'better-web-ui-smoke-'));

if (expectedInstallRoot && !wrapperRoots.includes(expectedInstallRoot)) {
  throw new Error(
    `SKILLS_EXPECTED_INSTALL_ROOT must be one of: ${wrapperRoots.join(', ')}. Received: ${expectedInstallRoot}`,
  );
}

function run(command, options = {}) {
  const result = spawnSync(command, {
    cwd: options.cwd,
    stdio: options.capture ? 'pipe' : 'inherit',
    encoding: 'utf8',
    shell: true,
  });

  if (result.status !== 0) {
    throw new Error(
      options.capture
        ? (result.stderr || result.stdout || `${command} failed.`)
        : `${command} failed.`,
    );
  }

  return result;
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

try {
  console.log(`Running smoke install in temporary directory: ${tempDir}`);

  const agentFlags = supportedInstallAgents.map((agent) => `--agent ${agent}`).join(' ');
  run(`npx skills add "${projectRoot}" --skill add-ui ${agentFlags} -y`, {
    cwd: tempDir,
  });

  const detectedWrapperRoots = [];

  for (const wrapperRoot of wrapperRoots) {
    const installedSkillPath = path.join(tempDir, wrapperRoot, 'add-ui', 'SKILL.md');
    if (await pathExists(installedSkillPath)) {
      detectedWrapperRoots.push(wrapperRoot);
    }
  }

  if (detectedWrapperRoots.length === 0) {
    throw new Error(
      `Smoke install completed, but no installed skill was found under the known wrapper roots: ${wrapperRoots.join(', ')}.`,
    );
  }

  console.log(`Detected installed wrapper root(s): ${detectedWrapperRoots.join(', ')}`);

  if (expectedInstallRoot && !detectedWrapperRoots.includes(expectedInstallRoot)) {
    throw new Error(
      `Smoke install wrote to ${detectedWrapperRoots.join(', ')}, but SKILLS_EXPECTED_INSTALL_ROOT expected ${expectedInstallRoot} to be present.`,
    );
  }

  const listResult = run('npx skills list --json', {
    cwd: tempDir,
    capture: true,
  });

  const normalizedOutput = `${listResult.stdout || ''}\n${listResult.stderr || ''}`;
  if (!normalizedOutput.toLowerCase().includes('add-ui')) {
    throw new Error('Smoke install completed, but `skills list --json` did not report the add-ui skill.');
  }

  console.log('Smoke install succeeded and add-ui was listed from the temporary project scope.');
  await fs.rm(tempDir, { recursive: true, force: true });
} catch (error) {
  console.error(`Smoke install failed. Temporary directory preserved at: ${tempDir}`);
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
