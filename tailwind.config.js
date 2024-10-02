/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maskImage: {
        'custom-shape': 'url("/src/assets/random-bubble.svg")',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
};
