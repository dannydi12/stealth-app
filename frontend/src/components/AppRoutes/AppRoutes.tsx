import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { auth, home } from '../routes'
import { Auth, Map, ProfileCreator } from '../views'

const AppRoutes: FC = () => (
   <Routes>
      <Route path={home.home} element={<Auth />} />
      <Route path={auth.profileCreator} element={<ProfileCreator />} />
      <Route path="/" element={<Map />} />
   </Routes>
)

export default AppRoutes
