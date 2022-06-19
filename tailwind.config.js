const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black--sidebar': '#0B0F13',
      },
      backgroundImage: {
        'logo-img': "url('/assets/images/sidebar/logo.svg')",
      },
      gridTemplateColumns: {
        layout: '300px auto',
      },
    },
  },
}
