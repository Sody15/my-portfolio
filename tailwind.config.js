/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/hero-min.jpg')",
      },
      colors: {
        primary: '#10b981',
      },
    },
  },
  plugins: [],
};
