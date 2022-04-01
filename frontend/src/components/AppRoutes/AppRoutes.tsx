import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { auth, home } from '../routes'
import { Map, Auth } from '../views'
import { ProfileCreator } from '../views/ProfileCreator'

const AppRoutes: FC = () => (
  <Routes>
    <Route path={home.home} element={<Auth />} />
    <Route path={auth.profileCreator} element={<ProfileCreator />} />
    <Route path="/" element={<Map />} />
  </Routes>
)

export default AppRoutes
