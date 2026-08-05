// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [...nextVitals, ...nextTs, {
  ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
}, ...storybook.configs["flat/recommended"]];

export default eslintConfig;
