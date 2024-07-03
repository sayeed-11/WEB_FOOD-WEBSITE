/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'newmorph' : '2px 2px 1px rgba(0,0,0,1)',
        'newmorphLow' : '-1px -1px 2px rgba(255,255,255,1)',
      }
    },
    fontFamily : {
      header : ["Righteous","sans-serif" ],
      text : ["Nunito", "sans-serif" ],
    }
  },
  plugins: [],
}