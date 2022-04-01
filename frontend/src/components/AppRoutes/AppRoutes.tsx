import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { auth, home } from '../routes'
import { Map, Auth, Splash } from '../views'
import { ProfileCreator } from '../views/ProfileCreator'

const AppRoutes: FC = () => (
  <Routes>
    <Route path={home.splash} element={<Splash />} />
    <Route path={auth.auth} element={<Auth />} />
    <Route path={auth.profileCreator} element={<ProfileCreator />} />
    <Route path={home.map} element={<Map />} />
  </Routes>
)

export default AppRoutes
