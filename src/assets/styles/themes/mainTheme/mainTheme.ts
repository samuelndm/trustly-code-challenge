import { darken, lighten } from 'polished'
import { DefaultTheme } from 'styled-components'

const primaryColor = '#6B8067'

// ----------------------------------------------------------------------------------
// If you add/change any attribute, update the styled.d.ts file
// ----------------------------------------------------------------------------------

export const mainTheme: DefaultTheme = {
  colors: {
    primary: {
      light: lighten(0.1, primaryColor),
      base: primaryColor,
      dark: darken(0.1, primaryColor),
    },
    yellow: '#FFE58F',
    red: '#FFA39E',
    green: '#B7EB8F',
    blue: '#91D5FF',
    light: '#FAFAFA',
    gray: '#8E8E8E',
    white: '#FFFFFF',
    black: '#222222',
    neutral_100: '#FFFFFF',
    neutral_200: '#F4F4F4',
    neutral_300: '#C6C6CA',
    neutral_400: '#696B7C',
    neutral_500: '#34353E',
    neutral_600: '#1B1D26',
    neutral_700: '#0A0A0D',
    neutral_800: '#000000',
    neutral_900: '#222222',
  },
  font: {
    family:
      "Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.6rem',
      xxxlarge: '2.8rem',
    },
    weight: {
      light: 300,
      normal: 400,
      bold: 700,
    },
    height: {
      medium: 1.4,
      heading: 1.2,
    },
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  navbar: {
    height: '8.7rem',
    backgroudColor: '#F1F1F1',
  },
  page: {
    backgroundColor: '#FFFFFF',
  },
}
