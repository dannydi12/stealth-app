import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledSplash } from '.'
import { userStore } from '../../../utils/userContext'
import { auth, home } from '../../routes'
import splash from './splash-1.gif'
import { SplashLogo } from './SplashLogo'

const Splash: FC = () => {
  const { user, loaded } = useContext(userStore)
  const [allowedToRedirect, setAllowedToRedirect] = useState(false)
  const timeout = useRef<any>()
  const navigator = useNavigate()

  useEffect(() => {
    if (!allowedToRedirect) {
      return
    }

    if (!user && loaded) {
      navigator(auth.auth)
      return
    }
    
    navigator(home.map)
  }, [user, loaded, allowedToRedirect])

  useEffect(() => {
    timeout.current = setTimeout(() => {
      setAllowedToRedirect(true)
    }, 1000)

    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  return (
    <StyledSplash>
      <SplashLogo />
      <img src={splash} alt="" className="splash" />
    </StyledSplash>
  )
}

export default Splash
