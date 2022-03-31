import styled from 'styled-components'

type StyledProps = {
  hasHandle: boolean;
}

const StyledProfileCreator = styled.div<StyledProps>`
  min-height: 100vh;
  background-color: #27272A;
  text-align: center;
  color: white;
  position: relative;

  .confetti {
    z-index: 999 !important;
  }

  .top {
    text-align: center;
    padding: calc(20px + env(safe-area-inset-top)) 0 30px 0;
    background-color: #27272A;
    z-index: 100;
    position: sticky;
    top: 0;

    .avatar {
      margin: 0 auto 20px auto;
    }

    .handle-input-container {
      font-size: 40px;
      display: flex;
      margin: 0 auto;
      align-items: center;
      white-space: nowrap;
      text-align: center;
      text-decoration: underline;
      text-decoration-color: #a1a1aa;
      width: fit-content;
      text-transform: lowercase;
      max-width: calc(100% - 40px);
      overflow-x: auto;
      height: 50px;

      .handle-input {
        outline: none;
        min-width: 20px;

        ${({ hasHandle }) => !hasHandle && `
          &:before {
            content: attr(placeholder);
            color: #52525b; 
          }
        `}
      }
    }
  }

  .avatar-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    padding: 10px 20px 20vh 20px;

    .avatar-select-container {
      position: relative; 
      
      .avatar-select {
        position: relative; 
        width: fit-content;
        pointer-events: none;
        border-radius: 50%;
        transition: ease-in-out 0.15s;
      }
  
      input {
        margin: 0;
        padding: 0;
        -webkit-appearance: none;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;

        &:checked ~ .avatar-select {
          transform: scale(1.15);
          box-shadow: 0 0 0 3px #007AFF60;
        }
      }
    }
  }

  .finish-btn {
    position: fixed;
    bottom: calc(env(safe-area-inset-bottom) + 20px);
    left: 20px;
    right: 20px;
    height: 56px;
    font-size: 1rem;
    font-weight: 600;
    color: #27272a;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border: 0;
    transition: 0.2s;

    &:active {
      transform: scale(0.96);
    }

    &:disabled {
      background-color: #71717a;
    }
  }
`

export default StyledProfileCreator
