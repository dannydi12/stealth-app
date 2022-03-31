import React, { FC } from 'react'
import { SignInWithApple, SignInWithAppleOptions } from '@capacitor-community/apple-sign-in'
import { StyledAuth } from '.'
import { LogoIcon } from '../../shared'

const Auth: FC = () => {
  const options: SignInWithAppleOptions = {
    clientId: 'com.crosswalkapp.app',
    redirectURI: 'https://www.crosswalkapp.com/login',
    scopes: 'email name',
    state: '12345',
    nonce: 'nonce',
  }

  const authenticate = async () => {
    const response = await SignInWithApple.authorize(options)
  }

  return (
    <StyledAuth>
      <div className="app-branding">
        <LogoIcon />
        <h1>HELLO</h1>
      </div>
      <button type="button" className="continue-with-apple-btn">Sign in With Apple</button>
    </StyledAuth>
  )
}

export default Auth
