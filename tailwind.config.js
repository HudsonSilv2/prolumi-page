/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#06b6d4',
          dark: '#0b3d91',
          accent: '#ffb703',
          muted: '#94a3b8'
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', ' -apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial'],
      }
    },
  },
  plugins: [],
}