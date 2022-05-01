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
