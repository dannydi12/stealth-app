import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { home } from '../routes'
import { Home } from '../views'

const AppRoutes: React.FC = () => (
   <Routes>
      <Route element={<Home />}>
         <Route path={home.home} element={<Home />} />
         <Route path="*" element={<Home />} />
      </Route>
   </Routes>
)

export default AppRoutes
