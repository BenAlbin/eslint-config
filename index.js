/* eslint-disable */
module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "no-unused-vars": "off",
        "no-undef": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "import/no-duplicates": "off",
      },
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["scripts/**/*.*", "cli.*"],
      rules: {
        "no-console": "off",
      },
    },
    {
      files: ["*.test.ts", "*.test.js", "*.spec.ts", "*.spec.js"],
      rules: {
        "no-unused-expressions": "off",
      },
    },
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:compat/recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: [
    "*.min.*",
    "*.d.ts",
    "CHANGELOG.md",
    "dist",
    "LICENSE*",
    "output",
    "coverage",
    "public",
    "temp",
    "packages-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "__snapshots__",
    "!.github",
    "!.vitepress",
    "!.vscode",
  ],
  plugins: ["unicorn", "promise"],

  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
    __API_ROOT__: "readonly",
  },
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    "vue/prop-name-casing": ["error", "camelCase"],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: false,
      },
    ],
    "vue/eqeqeq": "error",
    "vue/no-boolean-default": ["error", "default-false"],
    "vue/no-deprecated-scope-attribute": "error",
    "vue/no-empty-pattern": "error",
    "vue/require-explicit-emits": "error",
    "vue/v-on-function-call": "error",
    "vue/v-slot-style": "off",
    "vue/valid-v-slot": "error",
    camelcase: "off",

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
      },
    ],

    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",

    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",

    "vue/valid-v-on": [
      "error",
      {
        modifiers: ["comma"],
      },
    ],

    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],

    "dot-notation": "error",

    "no-var": "error",

    "no-shadow": "off",
    "@typescript-eslint/no-shadow": [
      "error",
      {
        builtinGlobals: false,
        hoist: "all",
      },
    ],

    "promise/prefer-await-to-then": "error",

    "unicorn/better-regex": "error",
    "unicorn/catch-error-name": [
      "error",
      {
        name: "error",
      },
    ],
    "unicorn/empty-brace-spaces": "error",
    "unicorn/escape-case": "error",
    "unicorn/explicit-length-check": "error",
    "unicorn/no-array-for-each": "error",
    "unicorn/new-for-builtins": "error",
    "unicorn/no-array-push-push": "error",
    "unicorn/no-array-callback-reference": "error",
    "unicorn/no-array-method-this-argument": "error",
    "unicorn/no-await-expression-member": "error",
    "unicorn/no-for-loop": "error",
    "unicorn/no-instanceof-array": "error",
    "unicorn/no-invalid-remove-event-listener": "error",
    "no-lonely-if": "error",
    "unicorn/no-lonely-if": "error",
    "unicorn/no-object-as-default-parameter": "error",
    "unicorn/no-process-exit": "error",
    "unicorn/no-static-only-class": "error",
    "unicorn/no-this-assignment": "error",
    "unicorn/no-unreadable-array-destructuring": "error",
    "unicorn/no-unused-properties": "error",
    "unicorn/no-useless-fallback-in-spread": "error",
    "unicorn/no-useless-length-check": "error",
    "unicorn/no-useless-spread": "error",
    "unicorn/no-useless-undefined": "error",
    "unicorn/no-zero-fractions": "error",
    "unicorn/number-literal-case": "error",
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-array-find": "error",
    "unicorn/prefer-array-flat": "error",
    "unicorn/prefer-array-flat-map": "error",
    "unicorn/prefer-array-index-of": "error",
    "unicorn/prefer-array-some": "error",
    "unicorn/prefer-at": "error",
    "unicorn/prefer-default-parameters": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-module": "error",
    "unicorn/prefer-negative-index": "error",
    "unicorn/prefer-object-from-entries": "error",
    "unicorn/prefer-optional-catch-binding": "error",
    "unicorn/prefer-prototype-methods": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-reflect-apply": "error",
    "unicorn/prefer-set-has": "error",
    "unicorn/prefer-spread": "error",
    "unicorn/prefer-string-replace-all": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-string-starts-ends-with": "error",
    "unicorn/prefer-string-trim-start-end": "error",
    "unicorn/prefer-switch": "error",
    "unicorn/prefer-ternary": "error",
    "unicorn/prefer-top-level-await": "error",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          props: false,
          param: false,
          prop: false,
          ref: false,
        },
      },
    ],
    "unicorn/require-array-join-separator": "error",
    "unicorn/require-number-to-fixed-digits-argument": "error",
    "unicorn/throw-new-error": "error",
  },
};
