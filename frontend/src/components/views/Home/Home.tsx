import React from 'react'
import styled from 'styled-components'
import { Button, ProfileIcon, Username } from '../../shared'

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 10px;
   width: 100%;
   height: 100%;
   padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom)
      env(safe-area-inset-left);
`

const Home: React.FC = () => (
   <Container>
      <Button>Sign In with Apple pen</Button>
      <ProfileIcon color="#DCFCE7" scale={1}>
         🍷
      </ProfileIcon>
      <Username>@tobiasaf</Username>
   </Container>
)

export default Home
