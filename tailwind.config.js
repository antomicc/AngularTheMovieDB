/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'white': '#F7F5FB',
      'blue-poly':'#03172b',
      'tangerine':'#F28500',
      'sandy':'#F9AB55',
      'cool-gray': '#909CC2',
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Marryweather', 'serif']
    },
    extend: {},
  },
  plugins: [],
}

