import { promises as fs } from 'node:fs';
import path from 'node:path';
import {
  buildWrapperContent,
  getCanonicalSkills,
  normalizeForComparison,
  projectRoot,
  wrapperRoots,
} from './skill-library-utils.mjs';

const wrappersOnly = process.argv.includes('--wrappers-only');
const errors = [];
const warnings = [];

function addError(message) {
  errors.push(message);
}

function addWarning(message) {
  warnings.push(message);
}

const skills = await getCanonicalSkills();

if (skills.length === 0) {
  addError('No canonical skills found under skills/.');
}

if (!wrappersOnly) {
  for (const skill of skills) {
    if (skill.skillName !== skill.directoryName) {
      addError(
        `Skill name mismatch in ${path.relative(projectRoot, skill.skillFilePath)}: expected name '${skill.directoryName}', found '${skill.skillName}'.`,
      );
    }

    if (!skill.frontmatter.description?.trim()) {
      addError(`Missing description in ${path.relative(projectRoot, skill.skillFilePath)}.`);
    }

    if ('argument-hint' in skill.frontmatter) {
      addWarning(
        `Non-portable top-level argument-hint found in ${path.relative(projectRoot, skill.skillFilePath)}. Prefer metadata.argument-hint for future edits.`,
      );
    }
  }
}

for (const wrapperRoot of wrapperRoots) {
  const wrapperRootPath = path.join(projectRoot, wrapperRoot);

  try {
    await fs.access(wrapperRootPath);
  } catch {
    addError(`Missing wrapper root: ${wrapperRoot}.`);
    continue;
  }

  const wrapperEntries = await fs.readdir(wrapperRootPath, { withFileTypes: true });
  const wrapperDirectories = new Set(
    wrapperEntries.filter((entry) => entry.isDirectory()).map((entry) => entry.name),
  );
  const canonicalDirectories = new Set(skills.map((skill) => skill.directoryName));

  for (const wrapperDirectory of wrapperDirectories) {
    if (!canonicalDirectories.has(wrapperDirectory)) {
      addError(`Stale wrapper directory found: ${wrapperRoot}/${wrapperDirectory}.`);
    }
  }

  for (const skill of skills) {
    const wrapperFilePath = path.join(wrapperRootPath, skill.directoryName, 'SKILL.md');
    const expectedContent = buildWrapperContent({
      frontmatterBlock: skill.frontmatterBlock,
      skillName: skill.skillName,
      wrapperRoot,
    });

    try {
      const actualContent = await fs.readFile(wrapperFilePath, 'utf8');
      if (normalizeForComparison(actualContent) !== normalizeForComparison(expectedContent)) {
        addError(`Wrapper drift detected in ${path.relative(projectRoot, wrapperFilePath)}.`);
      }
    } catch {
      addError(`Missing wrapper file: ${path.relative(projectRoot, wrapperFilePath)}.`);
    }
  }
}

if (errors.length > 0) {
  console.error('Skill library validation failed:\n');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

if (warnings.length > 0) {
  console.log('Skill library validation warnings:\n');
  for (const warning of warnings) {
    console.log(`- ${warning}`);
  }
  console.log('');
}

console.log(
  `Validated ${skills.length} canonical skills and ${skills.length * wrapperRoots.length} generated wrappers successfully.`,
);