// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  singleQuote: false,
  semi: true,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
      onSave: [],
    },
  ],
};
