/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      // xxs: { min: '250px', max: '320px' },
      xs: { min: '250px', max: '374px' },
      // xs: { min: '374px', max: '427px' },
      sm: { min: '375px', max: '640px' },
      // => @media (min-width: 640px) { ... }

      md: { min: '768px', max: '820px' },
      // => @media (min-width: 768px) { ... }

      lg: { min: '992px', max: '1200px' },
      // => @media (min-width: 1024px) { ... }

      xl: { min: '1280px', max: '2560px' }
      // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // '2xl': { min: '1399px' }
    },
    fontFamily: {
      dmSans: ['DM Sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      dosis: ['Dosis', 'sans-serif'],
      graphik: ['Graphik', 'sans-serif']
    },
    extend: {
      borderWidth: {
        1: '0.5px'
      },
      margin: {
        '87px': '87px'
      },
      height: {},
      maxWidth: {},
      maxHeight: {
        '193px': '193px'
      },
      padding: {
        108: '108px'
      },
      width: {},
      // backgroundImage: {
      //   "banner": "url('')",
      // },
      fontSize: {
        16: '64px',
        21: '21px',
        40: '40px',
        head: {
          backgroundColor: 'green'
        },
        header: 'clamp(2rem, 1.0101rem + 4.6176vw, 4rem)',
        details: 'clamp(1rem, 0.8388rem + 0.7519vw, 1.125rem)'
      },
      colors: {
        almostBlack: '#101010',
        333333: '#333333',
        borderAsh: '#014342',
        lemongreen: '#80B539',
        shadeBlack: '#18181B',
        shadegray: '#667085',
        shinyBlack: '#161616',
        whiteIsh: '#E4E4E4',
        blueLight: '#E0ECF7',
        blackIsh: '#101828',
        grayIsh: '#18181bbf',
        shadeOrange: '#FEE5B2',
        shadeGreen: '#C6EFBA',
        shadeWhite: '#F8F8F8',
        darkGreen: '#014342',
        mustard: '#FEAA00',
        almostWhite: '#ffffffbf',
        FAFAFA: '#FAFAFA',
        gray: '#9FA0A7',
        darkgreen: '#014342',
        lightgreen: 'rgba(24, 24, 27, 0.75)',
        lightAsh: 'rgba(24, 24, 27, 0.75)',
        darkgrey: 'rgba(255, 255, 255, 0.08)',
        bgAsh: 'rgba(0, 0, 0, 0.3)',
        colorGrey: 'rgba(255, 255, 255, 0.5)',
        greenOp: 'rgba(128, 181, 57, 0.18)'
      },
      boxShadow: {
        xmd: '0px 4px 40px 0px rgba(0, 0, 0, 0.15)',
        'xl': 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      },
      dropShadow: {
        '3xl': '0px 4px 16px rgba(0, 0, 0, 0.15)',
      },
      lineHeight: {
        62: '62px',
        72: '72px',
        74: '74px',
        48: '48px'
      },
      borderRadius: {
        100: '100px',
        20: '20px',
        48: '48px'
      },
      inset: {
        '135px': '-135px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
