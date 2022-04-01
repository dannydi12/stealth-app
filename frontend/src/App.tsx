// @ts-nocheck
import React, { useEffect, useState } from 'react'
import './utils/firebase'
import { Capacitor } from '@capacitor/core'
import { Keyboard } from '@capacitor/keyboard'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './components/AppRoutes'
import { GlobalStyle } from './theme'

const App: React.FC = () => {
   const [keyboardH, setKeyboardH] = useState(0)
   Keyboard.addListener('keyboardWillShow', ({ keyboardHeight }) => {
      setKeyboardH(keyboardH)
      requestAnimationFrame(() => {
         document.body.style.transform = `translateY(-${keyboardHeight}px)`
         document.activeElement.scrollIntoViewIfNeeded(true)
      })
   })
   Keyboard.addListener('keyboardWillHide', () => {
      requestAnimationFrame(() => {
         document.body.style.transform = `translateY(${keyboardH}px)`
         document.activeElement.scrollIntoViewIfNeeded(true)
      })
   })

   return (
      <BrowserRouter>
         <GlobalStyle />
         <AppRoutes />
      </BrowserRouter>
   )
}

export default App
