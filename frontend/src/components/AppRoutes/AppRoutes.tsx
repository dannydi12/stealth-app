import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { home, auth } from '../routes'
import { Home, Auth } from '../views'

const AppRoutes: FC = () => (
  <Routes>
    <Route path={auth.auth} element={<Auth />} />
    <Route path="/" element={<Home />} />
  </Routes>
)

export default AppRoutes
