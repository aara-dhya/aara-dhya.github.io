/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'vt323': ['"VT323"', 'monospace'],
      }
    },
  },
  plugins: [],
}
