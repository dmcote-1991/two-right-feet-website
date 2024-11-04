import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin"; // Ensure this is correctly imported
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config} */
const config = {
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
      languageOptions: {
        globals: {
          ...globals.browser, // Spread browser globals here
        },
        parser: "@typescript-eslint/parser", // Add TypeScript parser
        parserOptions: {
          ecmaVersion: 2021,
          sourceType: "module",
          ecmaFeatures: {
            jsx: true, // Enable JSX if you're using React
          },
        },
      },
      rules: {
        // Add custom rules here if needed
      },
    },
  ],
  plugins: {
    "react": pluginReact, // Include React plugin
    "typescript-eslint": tseslint, // Include TypeScript ESLint plugin
  },
  extends: [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
  ],
};

export default config;
