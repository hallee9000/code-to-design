import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.text};
    padding: 0;
    margin: 0;
    font-family: "PingFang SC", "PingFang", "Lantinghei SC", "HiraginoSansGB-W3", "Microsoft Yahei", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
  }
  html {
    background-color: ${({ theme }) => theme.colors.bg};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  body.dark-mode {
    img {
      filter: brightness(.8) contrast(1.2);
    }
  }
`

export default GlobalStyle
