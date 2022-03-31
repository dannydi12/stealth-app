import styled from 'styled-components'

const StyledProfileCreator = styled.div`
  min-height: 100vh;
  padding-top: env(safe-area-inset-top);
  background-color: #27272A;
  text-align: center;
  color: white;

  .top {
    text-align: center;
    padding: 20px 0;

    .avatar {
      margin: 0 auto 20px auto;
    }

    .handle-input-container {
      font-size: 40px;
      display: flex;
      margin: 0 auto;
      align-items: center;
      text-align: center;
      text-decoration: underline;
      width: fit-content;

      .handle-input {
      }
    }
  }

  .avatar-list {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    padding: 0 20px 40vh 20px;
  }
`

export default StyledProfileCreator
