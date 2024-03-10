/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Graphik', 'sans-serif'],
        sans: ["Linden Hill", 'serif'],
        serif: ["Linden Hill", 'serif'],
      },
    },
  },
  plugins: [],
}

