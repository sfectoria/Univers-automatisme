/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
      colors: {
        primary: "#B8D941",
        secondary:"#393D40",
        gray1:"#f2f2f2"
       
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
