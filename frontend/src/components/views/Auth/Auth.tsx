import React, { FC } from 'react'
import { SignInWithApple, SignInWithAppleOptions } from '@capacitor-community/apple-sign-in'
import { useNavigate } from 'react-router-dom'
import { StyledAuth } from '.'
import { auth } from '../../routes'
import { LogoIcon } from '../../shared'

const Auth: FC = () => {
  const navigate = useNavigate()
  const options: SignInWithAppleOptions = {
    clientId: 'com.crosswalk.app',
    redirectURI: 'https://www.crosswalkapp.com/login',
    scopes: 'email name',
    state: '12345',
    nonce: 'nonce',
  }

  const authenticate = async () => {
    const { response } = await SignInWithApple.authorize(options)
    navigate(auth.profileCreator)
  }

  return (
    <StyledAuth>
      <div className="app-branding">
        <LogoIcon />
        <h1>Crosswalk</h1>
      </div>
      <div className="button-container">
        <button 
          type="button" 
          className="continue-with-apple-btn"
          onClick={() => authenticate()}
        >
          Sign in With Apple
        </button>
      </div>
    </StyledAuth>
  )
}

export default Auth
