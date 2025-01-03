/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {    
      'tablet': '768px',     
      'laptop': '1024px',    
      'desktop': '1280px',
      'wide': '1600px',      
    },
    colors: {
      'primary': '#00454A',
      'secondary': '#E6F4F1',
      'accent': '#A93800',
      'neutral': '#FFFFFF',
      'black': '#000000',
      'transparent': 'transparent',
    },
    backgroundImage: {
      'laptop-screen': "url('laptop-screen-size.png')",
      'mobile-screen': "url('mobile-phone-screen.png')",
    },
    extend: {},
  },
  plugins: [],
}