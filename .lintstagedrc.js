module.exports = {
  '*.{js,jsx,ts,tsx}': [
    () => 'pnpm check-types',
    'eslint --fix',
    'prettier --write',
  ],
  '*.{json,md,mdx,css,html}': ['prettier --write'],
};
