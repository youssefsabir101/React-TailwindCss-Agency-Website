/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        'neutralSilver':'#F5F7FA',
        'neutralDGrey':'#4D4D4D',
        'brandPrimary':'#1E88E5',
        'brandSecondary':'#0D47A1',
        'neutralGrey':'#717171',
        'gray900' : '#18191F'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

