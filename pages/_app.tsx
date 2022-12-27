import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../styles/globalstyles'
import standardTheme from '../styles/theme'
import { inter, lexendDeca } from '../styles/fonts'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} ${lexendDeca.className}`}>
      <ThemeProvider theme={standardTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  )
}