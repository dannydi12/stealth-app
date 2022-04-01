// @ts-nocheck
import React from 'react'
import { Keyboard } from '@capacitor/keyboard'
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

const App: React.FC = () => {
   Keyboard.addListener('keyboardWillShow', ({ keyboardHeight }) => {
      requestAnimationFrame(() => {
         document.body.style.transform = `translateY(-${keyboardHeight}px)`
         document.activeElement.scrollIntoViewIfNeeded(true)
      })
   })

   Keyboard.addListener('keyboardWillHide', () => {
      requestAnimationFrame(() => {
         document.body.style.transform = 'translateY(0px)'
      })
   })

   Keyboard.setAccessoryBarVisible({ isVisible: false })
   return (
      <Container>
         <BrowserRouter>
            <GlobalStyle />
            <AppRoutes />
         </BrowserRouter>
      </Container>
   )
}

export default App
