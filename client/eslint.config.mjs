import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importPlugin from "eslint-plugin-import";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
          ],
          pathGroups: [
            { pattern: "@/app/**", group: "internal", position: "before" },
            { pattern: "@/features/**", group: "internal" },
            { pattern: "@/shared/**", group: "internal", position: "after" },
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      // Block deep imports into features — force barrel exports.
      // Enable once features/*/index.ts files exist:
      // "no-restricted-imports": [
      //   "error",
      //   {
      //     patterns: [
      //       {
      //         group: ["@/features/*/*"],
      //         message: "Import from the feature's public API (index.ts), not its internals.",
      //       },
      //     ],
      //   },
      // ],
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
