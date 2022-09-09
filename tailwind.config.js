module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#034B5A",
        secondary2: "#F5F5F5",
        secondprimary: "#004252",
        secondary: "#02A75A",
        inputcolor: "#C4C4C4",
        brand1: "#023642FA",
        brand2: "#01212AFA",
      },
      backgroundImage: {
        img: "url('/src/assets/background-img.png')",
        img2: "url('/src/assets/body-bg.png')",
        img3: "url('/src/assets/Group 2064 (1).png')",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        ts: " -1px 0px 6px 2px rgba(0,0,0,.1)",
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
};
