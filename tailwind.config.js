module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      backgroundImage: {
        repeated: 'url("../public/images/repeated-bg.jfif")',
      },
      colors: {
        red: {
          100: '#fcebea',
          200: '#f8d1d0',
          300: '#f2b8b6',
          400: '#ee9f9d',
          500: '#ec8b8a',
          600: '#e77d7c',
          700: '#e26a68',
          800: '#de5b57',
          900: '#d84746',
        },
        primary: {
          100: '#4A4A4A',
          200: '#3F3F3F',
          300: '#393939',
        },
      },
      fontFamily: {
        primary: ['Quicksand'],
        handwrite: ['Carter One'],
      },
    },
  },
  plugins: [],
};
