/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        'theme-blue':'#0A65CC',
        'theme-light-blue':'#E7F0FA',
        'theme-green':'',
        'theme-light-green':''
      }
    }
  },
  plugins: [],
}