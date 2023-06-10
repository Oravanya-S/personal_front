/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'pop': ['Poppins', 'serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

