import { spawnSync } from 'node:child_process';
import { projectRoot, wrapperRoots } from './skill-library-utils.mjs';

const result = spawnSync('git', ['diff', '--exit-code', '--', ...wrapperRoots], {
  cwd: projectRoot,
  stdio: 'inherit',
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 0);