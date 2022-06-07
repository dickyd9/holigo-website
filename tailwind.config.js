module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif'],
    },
    fontSize: {
      h1 : ['3.5rem', '72px'],
      h2 : ['3rem', 'auto'],
      h3 : ['2.25rem', 'auto'],
      h4 : ['1.625rem', '40px'],
      h5 : ['1.5rem', 'auto'],
      h6 : ['1.25rem', '32px'],
      h7 : ['1.25rem', '32px'],
    },
     
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      'primary': {
        brand: '#00BD17',
        "green-l-20": '#00570B',
        "green-l-10": '#008A11 ',
        "green-l-5": '#00A314',
        "green-l10": '#00F01D',
        "green-l20": '#24FF3E',
        "green-l40": '#BDFFC5',
        "green-l50": '#E6F6E8',
      },

      'secondary': {
        "orange-pastel": '#FFD36E',
        "banana-yellow": '#FFE162',
        "watermelon": '#FD5D5D',
        "purple-pastel": '#C799F3',
        "blue": '#70D3FF',
      },

      'basic': {
        "white": '#FFFFFF',
        "black": '#0F120F',
        "footer": '#25344E',
        "background": '#EFF0F5',
      },

      'text': {
        "grey1": '#474747',
        "grey2": '#616161',
        "grey3": '#949494',
        "grey4": '#C7C7C7',
        "grey5": '#E0E0E0',
        "grey6": '#FAFAFA',
      },
    },
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}