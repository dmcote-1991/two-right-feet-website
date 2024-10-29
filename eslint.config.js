// eslint.config.js
const { defineConfig } = require('eslint');

module.exports = defineConfig([
  {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'], // Specify the file types to lint
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      env: {
        browser: true,
        es6: true,
      },
    },
    plugins: ['react', 'react-hooks', 'jsx-a11y'],
    rules: {
      semi: ['error', 'always'],
      // Add any additional rules here
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the react version
      },
    },
  },
]);
