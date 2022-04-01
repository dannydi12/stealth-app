import styled from 'styled-components'

const StyledCreateDrop = styled.div`
  .button-container {
    padding: 0 20px calc(env(safe-area-inset-bottom) + 20px) 20px;
    position: fixed;
    bottom: 0;
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
