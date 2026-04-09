import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseDocument } from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const projectRoot = path.resolve(__dirname, '..');
export const skillsDir = path.join(projectRoot, 'skills');
export const wrapperRoots = [
  '.agents/skills',
  '.github/skills',
  '.claude/skills',
  '.codex/skills',
  '.cursor/skills',
  '.opencode/skills',
  '.pi/skills',
];

export function normalizeNewlines(text) {
  return text.replace(/\r\n/g, '\n');
}

export function normalizeForComparison(text) {
  return normalizeNewlines(text).trimEnd();
}

export function resolveWrapperRootPath(wrapperRoot) {
  const wrapperRootPath = path.resolve(projectRoot, wrapperRoot);
  const relativeFromProjectRoot = path.relative(projectRoot, wrapperRootPath);
  const pathSegments = relativeFromProjectRoot.split(path.sep).filter(Boolean);

  if (
    !relativeFromProjectRoot ||
    relativeFromProjectRoot.startsWith('..') ||
    path.isAbsolute(relativeFromProjectRoot)
  ) {
    throw new Error(`Wrapper root resolves outside the repository: ${wrapperRoot}`);
  }

  if (pathSegments.includes('node_modules')) {
    throw new Error(`Wrapper root must not point into node_modules: ${wrapperRoot}`);
  }

  return wrapperRootPath;
}

export function extractFrontmatterBlock(contents) {
  const normalized = normalizeNewlines(contents);
  const match = normalized.match(/^---\n[\s\S]*?\n---(?:\n|$)/);

  if (!match) {
    throw new Error('Missing or invalid YAML frontmatter block.');
  }

  return match[0];
}

export function parseFrontmatter(frontmatterBlock, { filePath = 'frontmatter' } = {}) {
  const body = normalizeNewlines(frontmatterBlock)
    .replace(/^---\n/, '')
    .replace(/\n---(?:\n|$)$/, '');

  const document = parseDocument(body, {
    merge: false,
    prettyErrors: true,
    uniqueKeys: true,
  });

  if (document.errors.length > 0) {
    const message = document.errors.map((error) => error.message).join(' ');
    throw new Error(`Invalid YAML frontmatter in ${filePath}: ${message}`);
  }

  const data = document.toJSON();

  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    throw new Error(`Frontmatter in ${filePath} must be a YAML mapping.`);
  }

  return data;
}

export function buildWrapperContent({ frontmatterBlock, skillName, wrapperRoot }) {
  const normalizedRoot = wrapperRoot.replace(/\\/g, '/');
  const normalizedFrontmatter = frontmatterBlock.trimEnd();

  return [
    normalizedFrontmatter,
    '',
    `This compatibility wrapper exposes the \`${skillName}\` skill for the \`${normalizedRoot}\` layout while keeping \`skills/${skillName}/SKILL.md\` as the canonical source of truth.`,
    '',
    `Follow the canonical instructions in [../../../skills/${skillName}/SKILL.md](../../../skills/${skillName}/SKILL.md).`,
    '',
  ].join('\n');
}

export function buildWrapperRootReadmeContent({ wrapperRoot }) {
  const normalizedRoot = wrapperRoot.replace(/\\/g, '/');

  return [
    '# Compatibility wrappers',
    '',
    `This directory contains generated compatibility wrappers for the \`${normalizedRoot}\` layout.`,
    '',
    'Do not edit files here directly. Edit the canonical skills in [`../../skills/`](../../skills/) and regenerate wrappers with `npm run generate:wrappers`.',
    '',
    'For maintainer workflow details, see [`../../AGENTS.md`](../../AGENTS.md), [`../../CONTRIBUTING.md`](../../CONTRIBUTING.md), and [`../../DEVELOPMENT.md`](../../DEVELOPMENT.md).',
    '',
  ].join('\n');
}

export async function getCanonicalSkills() {
  const entries = await fs.readdir(skillsDir, { withFileTypes: true });
  const directories = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  const skills = [];

  for (const directoryName of directories) {
    const skillFilePath = path.join(skillsDir, directoryName, 'SKILL.md');
    let contents;

    try {
      contents = await fs.readFile(skillFilePath, 'utf8');
    } catch (error) {
      if (error?.code === 'ENOENT') {
        throw new Error(`Missing SKILL.md in skills/${directoryName}.`);
      }

      throw error;
    }

    const frontmatterBlock = extractFrontmatterBlock(contents);
    const frontmatter = parseFrontmatter(frontmatterBlock, {
      filePath: path.relative(projectRoot, skillFilePath),
    });

    skills.push({
      contents,
      directoryName,
      skillName: frontmatter.name,
      skillFilePath,
      frontmatterBlock,
      frontmatter,
    });
  }

  return skills;
}