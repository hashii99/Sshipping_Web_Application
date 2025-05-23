/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        robotocon: ['"Roboto Condensed"', 'sans-serif'], // ✅ Fixed
      },
    },
  },
  plugins: [],
};
