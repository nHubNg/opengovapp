module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
   theme: {
    extend: {
      colors: {
        'primary': '#034B5A',
        'secondary2': '#F5F5F5',
        'secondprimary': '#004252',
        'secondary': '#FF7D45',
        'inputcolor': '#C4C4C4'

      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}
