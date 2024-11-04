const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        play: ['"Play"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}