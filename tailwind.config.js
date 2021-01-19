module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#62CCFF',
        secondary: '#193441',
        extraLight: '#b1f0fc',
        semiDark: '#57727F',
        semiLight: '#fcfcfc'
      },
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
        serif: ['Source Code Pro', 'serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
