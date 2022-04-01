import styled, { createGlobalStyle } from 'styled-components'

type GlobalProps = {
   keyboardHeight: number
}

export const GlobalStyle = createGlobalStyle<GlobalProps>`
  .sheet [data-rsbs-overlay] {
    margin-bottom: ${({ keyboardHeight }) => keyboardHeight}px;
    transition: margin-bottom 0.25s;
  }
`

const StyledBottomSheet = styled.div`
   height: 50vh;
   body {
      display: none;
   }
`

export default StyledBottomSheet
