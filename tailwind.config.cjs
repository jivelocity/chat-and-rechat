/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {

    extend: {
      colors: {
        dark: '#0C1B4D',
        darkLight:'#0C1B4D99',
        primaryLight: '#4A72FF0D'

      },
      backgroundImage: {
        'gradient-radial-custom': 'radial-gradient(50% 50% at 50% 50%, #E2EAFF 0%, #F4F7FF 100%)',
      }
    },
  },
  plugins: [],
}
