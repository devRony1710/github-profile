/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "medium-grey": "#364153"
      },
      backgroundImage: {
        searchBarBackground: "url('./assets/images/searchBarBackground.png')"
      }
    },
  },
  plugins: [],
}

