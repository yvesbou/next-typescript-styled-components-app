import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import standardTheme from '../styles/theme'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={standardTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}