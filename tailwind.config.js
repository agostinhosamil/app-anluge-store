/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  corePlugins: {
    preflight: false
  },
  content: ['./src/**/*.{jsx,tsx,mdx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
