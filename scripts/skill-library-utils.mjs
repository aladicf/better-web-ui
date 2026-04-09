import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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

export function extractFrontmatterBlock(contents) {
  const normalized = normalizeNewlines(contents);
  const match = normalized.match(/^---\n[\s\S]*?\n---\n/);

  if (!match) {
    throw new Error('Missing or invalid YAML frontmatter block.');
  }

  return match[0];
}

function stripQuotes(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
}

export function parseFrontmatter(frontmatterBlock) {
  const body = normalizeNewlines(frontmatterBlock)
    .replace(/^---\n/, '')
    .replace(/\n---\n$/, '');

  const data = {};
  let currentSection = null;

  for (const rawLine of body.split('\n')) {
    if (!rawLine.trim()) {
      continue;
    }

    if (/^\s{2,}[^:\s][^:]*:/.test(rawLine)) {
      if (!currentSection) {
        continue;
      }

      const nestedMatch = rawLine.match(/^\s{2,}([^:]+):\s*(.*)$/);
      if (!nestedMatch) {
        continue;
      }

      data[currentSection] ??= {};
      data[currentSection][nestedMatch[1].trim()] = stripQuotes(nestedMatch[2].trim());
      continue;
    }

    const sectionMatch = rawLine.match(/^([^:]+):\s*$/);
    if (sectionMatch) {
      currentSection = sectionMatch[1].trim();
      data[currentSection] ??= {};
      continue;
    }

    const valueMatch = rawLine.match(/^([^:]+):\s*(.*)$/);
    if (valueMatch) {
      currentSection = null;
      data[valueMatch[1].trim()] = stripQuotes(valueMatch[2].trim());
    }
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

export async function getCanonicalSkills() {
  const entries = await fs.readdir(skillsDir, { withFileTypes: true });
  const directories = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  const skills = [];

  for (const directoryName of directories) {
    const skillFilePath = path.join(skillsDir, directoryName, 'SKILL.md');
    const contents = await fs.readFile(skillFilePath, 'utf8');
    const frontmatterBlock = extractFrontmatterBlock(contents);
    const frontmatter = parseFrontmatter(frontmatterBlock);

    skills.push({
      directoryName,
      skillName: frontmatter.name,
      skillFilePath,
      frontmatterBlock,
      frontmatter,
    });
  }

  return skills;
}