import { defineConfig } from "eslint/config";
import { fixupConfigRules } from "@eslint/compat";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  // Bridge legacy React rule APIs while using ESLint 10.
  ...fixupConfigRules([...nextVitals, ...nextTs]),
]);

export default eslintConfig;
