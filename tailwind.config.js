/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-color': 'rgb(249, 249, 249)', 
      },
    },
  },
  plugins: [],
};
