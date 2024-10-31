/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#20293A",
        "medium-grey": "#364153",
        "light-grey": "#CDD5E0",
        "custom-blue": "#3662E3",
        "dark-gray": "#20293A"
      },
      backgroundImage: {
        searchBarBackground: "url('./assets/images/searchBarBackground.png')"
      }
    },
  },
  plugins: [],
}

