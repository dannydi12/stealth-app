/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from 'react'
import { User } from '../types/User'
import useUser from './useUser'

type InitialState = {
  user: User | null;
  loaded: boolean;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

const initialState: InitialState = {
  user: null,
  loaded: false,
  logout: () => Promise.resolve(),
  refresh: () => Promise.resolve(),
}

const userStore = createContext(initialState)
const { Provider } = userStore

const UserPovider = ({ children }) => {
  const { user, loaded, logout, refresh } = useUser()

  return (
    <Provider
      value={{
        user,
        loaded,
        logout,
        refresh,
      }}
    >
      {children}
    </Provider>
  )
}

export { userStore, UserPovider, Provider }
