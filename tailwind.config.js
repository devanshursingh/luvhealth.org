/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        primary: '#111827',
        secondary: '#374151',
        'ui-accent': '#f43f5e',
        'primary-text': '#111827',
        'secondary-text': '#374151',
      },
    },
  },
  plugins: [],
}