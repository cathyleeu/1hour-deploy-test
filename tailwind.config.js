const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
        },
        delete: 'var(--color-red)',
        error: 'var(--color-red)',
        blue : {
          dark: 'var(--color-blue-dark)',
          DEFAULT: 'var(--color-blue)',
          light: 'var(--color-blue-light)'
        },
        grey: {
          dark: 'var(--color-grey-dark)',
          DEFAULT: 'var(--color-grey)',
          light: 'var(--color-grey-light)'
        },
        orange: 'var(--color-orange)'
      }
    } 
  }
};
