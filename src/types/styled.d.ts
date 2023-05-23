import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      PrimaryColor: string
      PrimaryColorUnder: string
      PrimaryColorOver: string
      PrimaryColorTwo: string
      SecundaryColor: string
      SecundaryColorUnder: string
      SecundaryColorOver: string
      TextWhite: string
      TextUnder: string
      TextWhiteOver: string
      TextDark: string
      TextDarkUnder: string
      TextError: string
      textSuccess: string
      Linear: string
      LinearTwo: string
    }
    font: {
      poppins: string
      montserrat: string
    }
  }
}
