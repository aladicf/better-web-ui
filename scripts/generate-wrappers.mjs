import { promises as fs } from 'node:fs';
import path from 'node:path';
import {
  buildWrapperContent,
  getCanonicalSkills,
  projectRoot,
  wrapperRoots,
} from './skill-library-utils.mjs';

const skills = await getCanonicalSkills();
let writtenCount = 0;
let removedCount = 0;

for (const wrapperRoot of wrapperRoots) {
  const wrapperRootPath = path.join(projectRoot, wrapperRoot);
  await fs.mkdir(wrapperRootPath, { recursive: true });

  const existingEntries = await fs.readdir(wrapperRootPath, { withFileTypes: true });
  const existingDirectories = new Set(
    existingEntries.filter((entry) => entry.isDirectory()).map((entry) => entry.name),
  );
  const canonicalDirectoryNames = new Set(skills.map((skill) => skill.directoryName));

  for (const staleDirectory of existingDirectories) {
    if (!canonicalDirectoryNames.has(staleDirectory)) {
      await fs.rm(path.join(wrapperRootPath, staleDirectory), { recursive: true, force: true });
      removedCount += 1;
    }
  }

  for (const skill of skills) {
    const targetDirectory = path.join(wrapperRootPath, skill.directoryName);
    const targetFile = path.join(targetDirectory, 'SKILL.md');
    const expectedContent = buildWrapperContent({
      frontmatterBlock: skill.frontmatterBlock,
      skillName: skill.skillName,
      wrapperRoot,
    });

    await fs.mkdir(targetDirectory, { recursive: true });
    await fs.writeFile(targetFile, expectedContent, 'utf8');
    writtenCount += 1;
  }
}

console.log(`Generated ${writtenCount} wrapper files across ${wrapperRoots.length} wrapper roots.`);

if (removedCount > 0) {
  console.log(`Removed ${removedCount} stale wrapper directories.`);
}