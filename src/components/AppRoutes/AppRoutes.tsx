import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { user } from '../../routing'
import { AuthRouterLayout } from '../AppLayouts'
import { home } from '../routes'
import { Home, Login } from '../views'

const AppRoutes: React.FC = () => (
   <Routes>
      <Route element={<Home />}>
         <Route path={home.home} element={<Home />} />
         <Route path="*" element={<Home />} />
      </Route>
   </Routes>
)

export default AppRoutes
