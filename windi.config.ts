import { defineConfig } from 'windicss/helpers'

import typography from 'windicss/plugin/typography'

import { colors } from './themes/ricky-morty/colors'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: false,

  plugins: [
    typography(),
  ],
  theme: {
    extend: {
      colors,
    },
  },
})
