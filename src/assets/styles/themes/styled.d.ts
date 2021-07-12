import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        light: string
        base: string
        dark: string
      }
      yellow: string
      red: string
      green: string
      blue: string
      light: string
      gray: string
      white: string
      black: string
      neutral_100: string
      neutral_200: string
      neutral_300: string
      neutral_400: string
      neutral_500: string
      neutral_600: string
      neutral_700: string
      neutral_800: string
      neutral_900: string
    }
    font: {
      family: string
      sizes: {
        xsmall: string
        small: string
        medium: string
        large: string
        xlarge: string
        xxlarge: string
      }
      weight: {
        light: number
        normal: number
        bold: number
      }
      height: {
        medium: number
        heading: number
      }
    }
    spacings: {
      xxsmall: string
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
    }
    page: {
      backgroundColor: string
    }
  }
}
