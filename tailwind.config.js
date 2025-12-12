/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Source Serif Pro', 'serif'],
      },
      fontSize: {
        'large-header': ['48px', { lineHeight: '1.2', fontWeight: '600' }],
        'subhead': ['32px', { lineHeight: '1.2', fontWeight: '600' }],
        'body': ['18px', { lineHeight: '1.2' }],
        'small-ui': ['14px', { lineHeight: '1.4' }],
      },
      colors: {
        'primary-text': '#111827',
        'secondary-text': '#374151',
        'ui-accent': '#f43f5e',
      },
    },
  },
  plugins: [],
}