import React from 'react'
import styled from 'styled-components'
import { Button, Drawer, ProfileIcon, Username } from '../../shared'

const Container = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   flex-direction: column;
   gap: 10px;
   width: 100%;
   height: 100%;
   padding: env(safe-area-inset-right) env(safe-area-inset-left);
`

const Home: React.FC = () => (
   <Container>
      <Drawer id="asd" />
   </Container>
)

export default Home
