import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  // Ignore build/output directories
  globalIgnores(['dist']),

  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      // reactPlugin.configs.recommended,
    ],
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      'prettier/prettier': 'error',
      // Ignore unused variables that start with uppercase letter or underscore
      semi: ['error', 'always'], // enforce semicolons
      'space-infix-ops': 'error', // fix spacing around operators like `x+y`
      'comma-spacing': ['error', { before: false, after: true }],

      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Za-z_]' }],
      'react/react-in-jsx-scope': 'off',
    },
  },
]);
