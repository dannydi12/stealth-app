import styled from 'styled-components'

type StyledProps = {
   keyboardHeight: number
}

const StyledCreateDrop = styled.div<StyledProps>`
   .button-container {
      padding: 0 20px calc(env(safe-area-inset-bottom) + 20px) 20px;
      position: fixed;
      transition: ease-in-out 0.35s;
      bottom: ${({ keyboardHeight }) => keyboardHeight}px;
      left: 0;
      right: 0;
      z-index: 20;
      .new-drop-button {
         height: 56px;
         width: 100%;
         font-size: 1rem;
         font-weight: 600;
         border-radius: 6px;
         border: none;
         color: black;
      }
   }
`

export default StyledCreateDrop
