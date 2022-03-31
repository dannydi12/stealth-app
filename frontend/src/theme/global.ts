import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

html,
body {
  font-size: 16px;
  line-height: 24px;
  -webkit-font-smoothing: antialiased; 
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro';
  font-weight: 500;
  color: #292E35;
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
h1,
h2,
h3,
h4,
h5,
a,
p {
  margin: 0;
  padding: 0;
}
h1 {
  color: #E9E9E9;
  font-weight: 400;
  font-size: 40px;
  line-height: 24px;
}
p {
  font-weight: 400;
  line-height: 20px;
}

a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
button,
a {
  cursor: pointer;
}

 `

export default GlobalStyle
