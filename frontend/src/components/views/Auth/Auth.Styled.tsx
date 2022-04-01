import styled from 'styled-components'

const StyledAuth = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  padding-top: env(safe-area-inset-top);
  background-color: #27272A;
  text-align: center;

  .app-branding {
    height: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-gap: 1rem;
    align-items: center;

    h1 {
      font-weight: 600;
    }

    .logo-icon {
      width: 95px;
      margin: 0 auto;
    }
  }

  .button-container {
    padding: 0 20px calc(env(safe-area-inset-bottom) + 20px) 20px;

    .continue-with-apple-btn {
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

export default StyledAuth
