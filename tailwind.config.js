module.exports = {
  mode: 'jit',
  purge: ['./.vitepress/theme/**/*.vue'],
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
}
