/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [ 
    require("flowbite/plugin")
  ],
}
