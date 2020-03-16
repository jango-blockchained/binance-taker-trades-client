/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        darkprimary: "#222C3C",
        darksecondary: "#273142",
        darktertiary: "#1B2431",
        tvtealprimary: "#26A69A",
        tvredprimary: "#EF5350"
      },
      screens: {
        "dark-mode": { raw: "(prefers-color-scheme: dark)" },
        "light-mode": { raw: "(prefers-color-scheme: light)" }
      }
    }
  },
  variants: {},
  plugins: []
};
 