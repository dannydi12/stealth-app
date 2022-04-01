// @ts-nocheck
import React from 'react'
import './utils/firebase'
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
         document.getElementsByClassName('drawer').style.bottom = '0'
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
      <BrowserRouter>
         <GlobalStyle />
         <AppRoutes />
      </BrowserRouter>
   )
}

export default App
