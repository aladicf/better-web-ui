import { spawnSync } from 'node:child_process';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'better-web-ui-smoke-'));

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

try {
  console.log(`Running smoke install in temporary directory: ${tempDir}`);

  run(`npx skills add "${projectRoot}" --skill add-ui -y`, {
    cwd: tempDir,
  });

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