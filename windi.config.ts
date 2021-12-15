import { defineConfig } from 'windicss/helpers'
// import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,

  plugins: [
    typography(),
  ],
  theme: {
    colors: {
      'black': '#131313',
      'dark-gray': '#303030',
      'white': '#F1F1F1',
      'light-gray': '#D9D9D9',
      'green': '#28DA86',
      'blue': '#65DEF1',
      'light': '#D5F2E4',
      'crystal': '#FFFFFF',
      'blackhole': '#000000',
      'gray': '#A0A0A0'
    },
    /* extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    }, */
  },
})
