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
      colors : {
        black : '#000000',
        white : '#FFFFFF',
        darkBlue : '#102C57',
        lightBlue : '#1679AB',
        darkPink : '#e44650',
        lightPink : '#FFB1B1',
        cream : '#FDFFE2',
        textGray : '#4A5568',
        lightGray : '#e5e7eb',
        neonPink : '#EA047E',
        neonBlue : '#2FA4FF'
      }
    },
  },
  plugins: [],
}