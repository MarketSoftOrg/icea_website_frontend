import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import sonarjs from 'eslint-plugin-sonarjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: { sonarjs },
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      ...sonarjs.configs.recommended.rules,
    },
  },
  {
    ignores: ['.next/', 'node_modules/', 'build/', 'out/', 'dist/', '.git/', '*.env', '*.env.*'],
  },
];

export default eslintConfig;
