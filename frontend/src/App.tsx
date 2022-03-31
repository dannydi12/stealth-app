import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import { AppRoutes } from './components/AppRoutes'
import { GlobalStyle } from './theme'

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 100vw;
   height: 100vh;
`

const App: React.FC = () => (
   <Container>
      <BrowserRouter>
         <GlobalStyle />
         <AppRoutes />
      </BrowserRouter>
   </Container>
)

export default App
