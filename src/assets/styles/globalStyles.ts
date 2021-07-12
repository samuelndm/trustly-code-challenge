import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    outline: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    -ms-overflow-style: scrollbar;
  }
  body {
    ${({ theme }) => css`
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    `}
  }
  html, body, #root {
    height: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${({ theme }) => css`
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weight.bold};
      line-height: ${theme.font.height.heading};
    `}
  }
  b,
  strong {
    ${({ theme }) => css`
      font-weight: ${theme.font.weight.bold};
    `}
  },
  p {
    ${({ theme }) => css`
      line-height: ${theme.font.height.medium};
    `}
  }
  input ,
  textarea,
  select {
    appearance: none;
    border: 0;
    outline: 0;
  }
  ul {
    list-style: none;
  }
`
