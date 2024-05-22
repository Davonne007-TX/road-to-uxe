/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        linkedIn: "#1D2326",
        sky: "#6DB4F2",
        peach: "#FFA1B0",
        neon: "#0FFF50",
        teal: "#003B4A",
        myBlue: "#3A61DE",
        git: "#000000",
      },
      fontFamily: {
        rak: "'Rakkas', sans-serif",
        orbitron: "'Orbitron', sans-serif",
        ram: "'Rampart One', sans-serif",
        ber: "'Berkshire Swash', serif",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
