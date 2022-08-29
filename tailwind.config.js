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
        'secondary': '#02A75A',
        'inputcolor': '#C4C4C4',
        'brand1': '#023642FA',
        'brand2': '#01212AFA'

      },
      backgroundImage: {
        'img': "url('/src/assets/background-img.png')",
        'img2': "url('/src/assets/body-bg.png')",
      },
      fontFamily :{
        'sans': ['Helvetica', 'Arial', 'sans-serif']
      },

    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}
