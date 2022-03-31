import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { auth, home } from '../routes'
import { Home, Auth } from '../views'
import { ProfileCreator } from '../views/ProfileCreator'

const AppRoutes: FC = () => (
  <Routes>
    <Route path="/" element={<Auth />} />
    <Route path={auth.profileCreator} element={<ProfileCreator />} />
    <Route path={home.home} element={<Home />} />
  </Routes>
)

export default AppRoutes
