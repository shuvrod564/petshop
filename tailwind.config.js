/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)"],
      mont: ["var(--font-montserrat)"],
    },
    colors: {
      primary: "#f8863f",  
      "primary-light": "#fc9b54",
      "primary-extra-light": "#fbb16c",
      secondary: "#ffefaa",
      'secondary-light': "#ffdb97",
      'secondary-extra-light': "#fec57e",
      yellow: "#ffd517",
      pink: "#fe1e4c",
      green: '#6BC063',
      dark: "#203842",
      bg: "#203842",
      bg_top: "b9ded7",
      black: "#212129",
      gray: "#747474", 
      "bg-gray": "#f5f5f5",
      "border-color": "#C4C4C4",
      white: "#ffffff",
      green: "#6bc063",
      red: "#f75769",
      orange: "#dd5200e0",
      "orange-light":"#ff6e42",
      transparent: "transparent",
    },
    // fontFamily: {
    //   sans: ['var(--font-inter)'],
    // },
    extend: {
      fontSize: {
        'xs': '12px',  
      },
      screens: {
        '3xl': '1600px'
      }
    },
  },
  plugins: [],
};
