import { nextJsConfig } from '@repo/eslint-config/next-js';

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...nextJsConfig,
  {
    // react/no-unknown-property only knows DOM props — react-three-fiber's
    // JSX intrinsics (mesh, boxGeometry, meshStandardMaterial, ...) aren't
    // DOM elements, so their props (position, args, castShadow, ...) read
    // as "unknown" to a rule that has no idea R3F exists.
    files: ['components/scene/**/*.tsx'],
    rules: {
      'react/no-unknown-property': 'off',
    },
  },
];
