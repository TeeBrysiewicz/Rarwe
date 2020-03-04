module.exports = {
  theme: {
    screens: {
      'sm': '640px',  // 40rem
      'md': '768px',  // 48rem
      'lg': '1024px', // 64rem
      'xl': '1440px', // 90rem
    },
    container: {
      center: true,
    },
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'yellow': '#FFC610',
      'red': '#F04025',
      'blue': {
        '100': '#8EA6B7',
        '200': '#64BAFA',
        '300': '#3E6886',
        '400': '#0A628E',
        '500': '#0f4f7d',
        '600': '#0F3C5D',
        '700': '#122740',
      },
      'grey': {
        '100': '#EDF0F2',
        '200': '#C5D1D6',
        '300': '#979797'
      },
      'orange': {
        '100': '#E57F5B',
        '200': '#F1774A',
        '300': '#F05B25',
      }
    },
    fontSize: {
      '5xs': '0.5625rem', // 9px
      '4xs': '0.625rem',  // 10px
      '3xs': '0.688rem',  // 11px
      '2xs': '0.75rem',   // 12px
      'xs': '0.875rem',   // 14px
      'sm': '0.9375rem',  // 15px
      'base': '1rem',     // 16px
      'lg': '1.125rem',   // 18px
      'xl': '1.25rem',    // 20px
      '2xl': '1.375rem',  // 22px
      '3xl': '1.5rem',    // 24px
      '4xl': '1.75rem',   // 28px
      '5xl': '2rem',      // 32px
      '6xl': '3rem',      // 48px
      '7xl': '3.5rem'     // 56px
    },
     fontFamily: {
      'exo-2': 'exo-2',
      'work-sans': 'work-sans'
    },
    minHeight: {
      'full': '100%',
      'screen': '100vh',
      '48': '12rem',
      '64': '16rem',
      '108': '27rem'
    },
    opacity: {
      '80': '.8',
    },
    fill: theme => ({
      'current': 'currentColor',
      'yellow': theme('colors.yellow'),
      'white': theme('colors.white')
    }),
    extend: {
      spacing: {
        "2px": '2px',
        '11': '2.75rem', // 44px
        '14': '3.5rem', // 56px
        '22': '5.5rem', // 88px
        '72': '18rem',  // 288px
        '78': '19.5rem', // 312px
        // '84': '21rem',  // 336px
        // '96': '24rem',  // 384px
        '108': '27rem', // 432px
        // '120': '30rem', // 480px
        // '132': '33rem', // 528px
        // '144': '36rem', // 576px
        // '180': '47rem', // 752px
      },
      zIndex: {
        '-10': -10,
      },
    },
  },
  variants: {
    borderWidth: [ 'responsive', 'active' ],
    fill: [ 'hover', 'group-hover' ],
    padding: [ 'responsive', 'odd', 'even' ],
    margin: [ 'responsive', 'last' ]
  },
}
