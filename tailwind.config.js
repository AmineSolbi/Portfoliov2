/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Inter:['Inter']
      },
      dropShadow:{
        'figmashadow':'0px 4px 5px #D9D9D9'
      }
    },
  },
  plugins: [],
}