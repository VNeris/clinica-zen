/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'brilho': '0 0 10px #cef9f0',
        'brilho-escuro': '0 0 10px #b09183', 
        },
      colors: {
        'bizarre': {
        '50': '#faf7f6',
        '100': '#f4efec',
        '200': '#ebe1dd',
        '300': '#e2d5cf',
        '400': '#c6aea3',
        '500': '#b09183',
        '600': '#997869',
        '700': '#7f6356',
        '800': '#6b5449',
        '900': '#5b4941',
        '950': '#2f2520',
    },
      },
    },
  },
  plugins: [],
}