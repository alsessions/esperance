module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Merriweather', 'serif'],
        'sans': ['"Open Sans"', 'sans-serif']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h1: {
              color: theme('colors.yellow.800'),
              fontWeight: '400',
            },
            h2: {
              color: theme('colors.yellow.800'),
              fontWeight: '400',
            },
            h3: {
              color: theme('colors.yellow.800'),
            },
            strong: {
              color: theme('colors.gray.800'),
            },
            a: {
              color: theme('colors.yellow.800'),
              '&:hover': {
                color: theme('colors.yellow.900'),
                hover: 'underline',
              },
            },
          },
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
      
      require('@tailwindcss/forms'),
  ],
}