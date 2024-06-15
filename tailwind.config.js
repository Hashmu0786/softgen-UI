/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'softgen': 'linear-gradient(45deg, rgba(101, 182, 255, 1) 0%, rgba(75, 131, 255, 1) 100%)',
      },
    },
  },
  plugins: [],
}