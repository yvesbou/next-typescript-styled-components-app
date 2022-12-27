import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 6rem;
    min-height: 100vh;
    background:  ${(props) => props.theme.colors.secondary};
    @media (max-width: ${(props) => props.theme.screenWidth.tablet}) {
      padding: 1rem;
    }
  }
  
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    fontStyle: ${(props) => props.theme.font.main.name};
  }
  
  
  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
  
`

export default GlobalStyle