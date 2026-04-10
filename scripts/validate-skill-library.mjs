import { promises as fs } from 'node:fs';
import path from 'node:path';
import {
  buildWrapperContent,
  buildWrapperRootReadmeContent,
  getCanonicalSkills,
  normalizeForComparison,
  projectRoot,
  resolveWrapperRootPath,
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

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function validateRequiredString(fieldName, value, relativeFilePath) {
  if (!isNonEmptyString(value)) {
    addError(`Missing or empty ${fieldName} in ${relativeFilePath}.`);
  }
}

function getSectionContents(contents, heading) {
  const normalized = contents.replace(/\r\n/g, '\n');
  const headingIndex = normalized.indexOf(`${heading}\n`);

  if (headingIndex === -1) {
    return null;
  }

  const sectionStart = headingIndex + heading.length + 1;
  const nextHeadingIndex = normalized.indexOf('\n## ', sectionStart);

  return (nextHeadingIndex === -1
    ? normalized.slice(sectionStart)
    : normalized.slice(sectionStart, nextHeadingIndex)
  ).trim();
}

function collectBacktickedListItems(sectionContents) {
  return [...sectionContents.matchAll(/^- `([^`]+)`/gm)].map((match) => match[1]);
}

function reportSetMismatch({ actual, expected, label }) {
  const missing = expected.filter((item) => !actual.includes(item));
  const unexpected = actual.filter((item) => !expected.includes(item));

  if (missing.length > 0) {
    addError(`${label} is missing: ${missing.join(', ')}.`);
  }

  if (unexpected.length > 0) {
    addError(`${label} contains unexpected entries: ${unexpected.join(', ')}.`);
  }
}

function isExternalLink(target) {
  return /^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith('//');
}

function collectLocalMarkdownTargets(contents) {
  const normalizedContents = contents.replace(/\r\n/g, '\n').replace(/```[\s\S]*?```/g, '');
  const targets = [];

  for (const match of normalizedContents.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    let target = match[1].trim();

    if (target.startsWith('<') && target.endsWith('>')) {
      target = target.slice(1, -1).trim();
    }

    const titleSeparatorIndex = target.search(/\s(?=(?:[^"]*"[^"]*")*[^"]*$)/);
    if (titleSeparatorIndex !== -1) {
      target = target.slice(0, titleSeparatorIndex);
    }

    const pathWithoutAnchor = target.split('#')[0];

    if (
      !pathWithoutAnchor ||
      pathWithoutAnchor.startsWith('#') ||
      isExternalLink(pathWithoutAnchor) ||
      path.isAbsolute(pathWithoutAnchor)
    ) {
      continue;
    }

    targets.push(pathWithoutAnchor);
  }

  return [...new Set(targets)];
}

async function validateLocalMarkdownLinks(filePath, contents) {
  const relativeFilePath = path.relative(projectRoot, filePath);

  for (const target of collectLocalMarkdownTargets(contents)) {
    const resolvedPath = path.resolve(path.dirname(filePath), target);

    try {
      await fs.access(resolvedPath);
    } catch {
      addError(`Broken local markdown link in ${relativeFilePath}: ${target}.`);
    }
  }
}

async function readWorkspaceFile(relativePath) {
  const filePath = path.join(projectRoot, relativePath);

  try {
    return await fs.readFile(filePath, 'utf8');
  } catch {
    addError(`Missing required file: ${relativePath}.`);
    return null;
  }
}

async function validateRepositoryDocs() {
  const requiredFiles = ['README.md', 'AGENTS.md', 'CONTRIBUTING.md', 'DEVELOPMENT.md', 'CHANGELOG.md'];
  const documents = new Map();

  for (const relativePath of requiredFiles) {
    const contents = await readWorkspaceFile(relativePath);

    if (!contents) {
      continue;
    }

    documents.set(relativePath, contents);
    await validateLocalMarkdownLinks(path.join(projectRoot, relativePath), contents);
  }

  return documents;
}

async function validateRuntimeVersionFiles() {
  const nvmrc = await readWorkspaceFile('.nvmrc');
  const nodeVersion = await readWorkspaceFile('.node-version');

  if (!nvmrc || !nodeVersion) {
    return;
  }

  if (nvmrc.trim() !== nodeVersion.trim()) {
    addError('.nvmrc and .node-version must stay in sync.');
  }
}

function validateReadmeSkillCatalog(readmeContents, skills) {
  const skillCatalogSection = getSectionContents(readmeContents, '## Skill catalog');
  const wrapperSection = getSectionContents(readmeContents, '## Compatibility wrapper trees');

  if (!skillCatalogSection) {
    addError('README.md is missing the ## Skill catalog section.');
  } else {
    const documentedSkills = collectBacktickedListItems(skillCatalogSection);
    const uniqueDocumentedSkills = [...new Set(documentedSkills)];

    if (documentedSkills.length !== uniqueDocumentedSkills.length) {
      addError('README.md skill catalog contains duplicate skill entries.');
    }

    reportSetMismatch({
      actual: uniqueDocumentedSkills,
      expected: skills.map((skill) => skill.skillName),
      label: 'README.md skill catalog',
    });
  }

  if (!wrapperSection) {
    addError('README.md is missing the ## Compatibility wrapper trees section.');
    return;
  }

  const documentedWrapperRoots = collectBacktickedListItems(wrapperSection);
  const uniqueWrapperRoots = [...new Set(documentedWrapperRoots)];

  if (documentedWrapperRoots.length !== uniqueWrapperRoots.length) {
    addError('README.md wrapper root list contains duplicate entries.');
  }

  reportSetMismatch({
    actual: uniqueWrapperRoots,
    expected: wrapperRoots,
    label: 'README.md compatibility wrapper tree list',
  });
}

const skills = await getCanonicalSkills();

if (skills.length === 0) {
  addError('No canonical skills found under skills/.');
}

if (!wrappersOnly) {
  const documents = await validateRepositoryDocs();
  await validateRuntimeVersionFiles();

  const readmeContents = documents.get('README.md');
  if (readmeContents) {
    validateReadmeSkillCatalog(readmeContents, skills);
  }

  for (const skill of skills) {
    const relativeSkillPath = path.relative(projectRoot, skill.skillFilePath);

    validateRequiredString('name', skill.skillName, relativeSkillPath);

    if (skill.skillName !== skill.directoryName) {
      addError(
        `Skill name mismatch in ${path.relative(projectRoot, skill.skillFilePath)}: expected name '${skill.directoryName}', found '${skill.skillName}'.`,
      );
    }

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(skill.skillName)) {
      addError(`Skill name in ${relativeSkillPath} must be lowercase and hyphenated.`);
    }

    validateRequiredString('description', skill.frontmatter.description, relativeSkillPath);

    if (
      skill.frontmatter.metadata !== undefined &&
      (typeof skill.frontmatter.metadata !== 'object' ||
        Array.isArray(skill.frontmatter.metadata) ||
        skill.frontmatter.metadata === null)
    ) {
      addError(`metadata must be a YAML mapping in ${relativeSkillPath}.`);
    }

    if (
      skill.frontmatter.metadata &&
      'argument-hint' in skill.frontmatter.metadata &&
      !isNonEmptyString(skill.frontmatter.metadata['argument-hint'])
    ) {
      addError(`metadata.argument-hint must be a non-empty string in ${relativeSkillPath}.`);
    }

    if ('argument-hint' in skill.frontmatter) {
      addWarning(
        `Non-portable top-level argument-hint found in ${path.relative(projectRoot, skill.skillFilePath)}. Prefer metadata.argument-hint for future edits.`,
      );
    }

    await validateLocalMarkdownLinks(skill.skillFilePath, skill.contents);
  }
}

for (const wrapperRoot of wrapperRoots) {
  const wrapperRootPath = resolveWrapperRootPath(wrapperRoot);

  try {
    await fs.access(wrapperRootPath);
  } catch {
    addError(`Missing wrapper root: ${wrapperRoot}.`);
    continue;
  }

  const wrapperRootReadmePath = path.join(wrapperRootPath, 'README.md');
  const expectedReadmeContent = buildWrapperRootReadmeContent({ wrapperRoot });

  try {
    const actualReadmeContent = await fs.readFile(wrapperRootReadmePath, 'utf8');
    if (normalizeForComparison(actualReadmeContent) !== normalizeForComparison(expectedReadmeContent)) {
      addError(`Wrapper root README drift detected in ${path.relative(projectRoot, wrapperRootReadmePath)}.`);
    }
  } catch {
    addError(`Missing wrapper root README: ${path.relative(projectRoot, wrapperRootReadmePath)}.`);
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