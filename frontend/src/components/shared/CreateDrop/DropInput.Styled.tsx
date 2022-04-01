import styled from 'styled-components'

const StyledDropInput = styled.form`
   padding: 0px 20px 90px 20px;

   .user-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-bottom: 30px;
      padding-top: 40px;
      text-align: center;

      .user-handle {
         font-size: 1rem;
         color: white;
      }

      .avatar {
         pointer-events: none;
         position: absolute;
         top: -38px;
         left: 50%;
         transform: translate(-50%);
         z-index: 1;
      }
   }

   .drop-text-area {
      height: 200px;
      width: 100%;
      border-radius: 6px;
      background-color: #18181b;
      border: 1px solid rgba(0, 0, 0, 0.2);
      color: white;
      padding: 20px;
      font-size: 24px;

      &::placeholder {
         color: #52525b;
      }
   }
`

export default StyledDropInput
