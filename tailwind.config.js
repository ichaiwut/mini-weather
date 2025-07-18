/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '768px',     
      'lg': '1024px',    
      'xl': '1366px',          
    },
    extend: {
      colors: {
        'weather-blue': '#3490dc',
        'weather-light': '#f8fafc',
        'weather-dark': '#1e293b',
        'sunny': '#f59e0b',
        'cloudy': '#94a3b8',
        'rainy': '#3b82f6',
        'stormy': '#4338ca',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}