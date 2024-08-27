import { Theme } from '.'

export const dark: Theme = {
  colors: {
    background: {
      v50: '#000000',
      v100: '#171717',
      v200: '#404040',
      v300: '#595959',
      v400: '#737373',
      v500: '#8c8c8c',
      v600: '#a6a6a6',
      v700: '#bfbfbf',
      v800: '#d9d9d9',
      v900: '#f2f2f2',

      /**
       * custom colors by component name
       */
      header: '#070d13',
      footer: '#0f0f0f',
      button: {
        default: {
          normal: '#1f1d1d',
          hover: '#2c2828',
          active: '#353131'
        }
      },
      placeholder: {
        main: '#1e1e1e',
        color1: '#11100f',
        color2: '#161515',
        color3: '#11100f'
      },
      loadingScreen: 'rgb(0 0 0 / 87%)',

      /**
       * custom colors by key
       */
      invert: '#ffffff'
    },
    foreground: {
      v50: '#909090',
      v100: '#a6a6a6',
      v200: '#b3b3b3',
      v300: '#bfbfbf',
      v400: '#cccccc',
      v500: '#dddddd',
      v600: '#e5e5e5',
      v700: '#eeeeee',
      v800: '#f7f7f7',
      v900: '#ffffff',

      /**
       * custom colors by component name
       */
      button: {
        default: {
          normal: '#f9f9f9'
        }
      },

      /**
       * custom colors by key
       */
      invert: '#ffffff',
      link: '#086fff'
    }
  }
}
