import React from 'react'
import './utils/firebase'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './components/AppRoutes'
import { GlobalStyle } from './theme'

const App: React.FC = () => (
   <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
   </BrowserRouter>
)

export default App
