/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0e98d6',
        'custom-cyan': '#0cd3db',
        'custom-gray': '#94a9c9',
      },
    },
  },
  plugins: [],
}

