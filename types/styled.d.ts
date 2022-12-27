import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      text: string
      accent: string
    }
    screenWidth: {
        mobile: string
        tablet: string
        desktop: string
    }
    typography: {
        smallHeader: string
        biggerText: string
        body: string
    }
    font: {
        main: {
            name: string
        }
        other: {
            name: string
        }
        weight: {
            normal: number
            bold: number
        }
    }
  }
}
