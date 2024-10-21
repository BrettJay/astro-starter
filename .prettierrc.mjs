/** @type {import('prettier').Config} */
export default {
  endOfLine: 'lf',
  trailingComma: 'es5',
  semi: false,
  jsxSingleQuote: true,
  singleQuote: true,
  tabWidth: 2,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  tailwindFunctions: ['cn'],
}
