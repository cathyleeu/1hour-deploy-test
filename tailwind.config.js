const defaultTheme = require('tailwindcss/defaultTheme');

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
        blue: {
          dark: 'var(--color-blue-dark)',
          DEFAULT: 'var(--color-blue)',
          light: 'var(--color-blue-light)',
        },
        gray: {
          dark: 'var(--color-gray-dark)',
          DEFAULT: 'var(--color-gray)',
          light: 'var(--color-gray-light)',
        },
        orange: 'var(--color-orange)',
        background: 'var(--color-background)'
      },
      backgroundImage: {
        'logo-img': "url('/assets/images/sidebar/logo.svg')",
        'dropdown-arrow-img': "url('/assets/images/sidebar/arrow.svg')",
        'bulb': "url('/assets/images/quiz/bulb.png')",
        'question': "url('/assets/images/quiz/question.png')",
        'explanation': "url('/assets/images/quiz/explanation.png')",
        'file': "url('/assets/images/quiz/file.png)"
      },
      gridTemplateColumns: {
        layout: '300px auto',
      },
      borderRadius: {
        medium: '12px',
        large: '25px'
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
