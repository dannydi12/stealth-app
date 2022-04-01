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
  color: #000;
  margin: 0;
  background-color: #27272a;
}

*,
*:before,
*:after {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro';
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


button,
a {
  cursor: pointer;
}

  .sheet  {
    & > div > div, & > div > div > div {
      overflow: visible !important;
    } 
  }
  
  [data-rsbs-header]:before {
    top: 8px;
  }

  [data-rsbs-has-header='false'] [data-rsbs-header] {
    padding-top: calc(0px);
  }

  .backdrop {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #00000080;
    opacity: 1;
    transition: 0.2s;

    &.no-show {
      opacity: 0;
    }
}

  

  :root {
    --rsbs-backdrop-bg: rgba(0, 0, 0, 0.6);
    --rsbs-bg: #27272A;
    --rsbs-handle-bg: hsla(100, 100%, 100%, 0.34);
    --rsbs-max-w: auto;
    --rsbs-ml: env(safe-area-inset-left);
    --rsbs-mr: env(safe-area-inset-right);
    --rsbs-overlay-rounded: 16px;
  }

 `

export default GlobalStyle
