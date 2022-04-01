// @ts-nocheck
import React, { useEffect } from 'react'
import './utils/firebase'
import { Capacitor } from '@capacitor/core'
import { Keyboard } from '@capacitor/keyboard'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './components/AppRoutes'
import { GlobalStyle } from './theme'

const App: React.FC = () => {
   useEffect(() => {
      const canKeyboard = Capacitor.isPluginAvailable('Keyboard')

      if (canKeyboard) {
         Keyboard.setAccessoryBarVisible({ isVisible: false })
         Keyboard.setResizeMode({ mode: 'native' })
      }
   }, [])

   return (
      <BrowserRouter>
         <GlobalStyle />
         <AppRoutes />
      </BrowserRouter>
   )
}

export default App
