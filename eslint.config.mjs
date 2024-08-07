/* eslint-disable import/no-anonymous-default-export */
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    files: ["**/*.{js,ts,tsx}"],
    languageOptions: { sourceType: "script" },
  },
  {
    ignores: [
      "commitlint.config.js",
      "eslint.config.mjs",
      "jest.config.js",
      "babel.config.js",
      "**/build/static/js",
    ],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];
