/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme^="dark-"]'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    fontSize:{
      "sm" : "16px",
      "nm" :"20px",
      "vl" : "70px",
      "lg"  : "60px",
      "md":"42px"
    
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    
    },
    extend: {
      colors:{
        blue:'#6A35FF',
        lightBlue:'#EBE6FC',
        orange: '#FFA500',
        blue: '#0000FF',
        green: '#008000',
        primary: 'var(--primary)',
        background: 'var(--background)',
        light:'var(--light)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: 'class'

}