/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useState } from 'react'
import firebase from 'firebase'
import { User } from '../types/User'
import { mailman } from './scripts/mailman'

const useUser = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loaded, setLoaded] = useState<boolean>(false)
  const auth = firebase.auth()

  const logout = async () => auth.signOut()

  const refresh = async () => {
    const userProfile = auth.currentUser

    if (!userProfile) {
      return
    }

    const userData = await getUser()
    setUser(userData)
    setLoaded(true)
  }

  const getUser = async (): Promise<User> => mailman('users', 'GET', undefined, '')

  // eslint-disable-next-line consistent-return
  useEffect(() => auth.onAuthStateChanged(async (newUser) => {
    if (!newUser) {
        setLoaded(true)
        return setUser(null)
      }

      const userData = await getUser()
      setUser(userData)
      
      setLoaded(true)
    }), [])

  return {
    user,
    loaded,
    logout,
    refresh,
  }
}

export default useUser
