import React, { FC } from 'react'
import { SignInWithApple, SignInWithAppleOptions } from '@capacitor-community/apple-sign-in'
import sha256 from 'crypto-js/sha256'
import { getAuth, signInWithCredential, OAuthProvider } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { StyledAuth } from '.'
import { auth } from '../../routes'
import { LogoIcon } from '../../shared'

const Auth: FC = () => {
  const navigate = useNavigate()

  const nonce = uuidv4()
  const encryptedNonce = sha256(nonce).toString()
  const options: SignInWithAppleOptions = {
    clientId: 'com.crosswalk.app',
    redirectURI: 'https://crosswalk-345817.firebaseapp.com/__/auth/handler',
    scopes: 'email name',
    state: '12345',
    nonce: encryptedNonce,
  }

  const authenticate = async () => {
    try {
      const firebaseAuth = getAuth()
      const { response } = await SignInWithApple.authorize(options)
  
      const appleCredential = new OAuthProvider('apple.com').credential({
        idToken: response.identityToken,
        rawNonce: nonce,
      })
  
      const { user } = await signInWithCredential(firebaseAuth, appleCredential)
      navigate(auth.profileCreator, { state: { uid: user.uid } })
    } catch (err: any) {
      alert(err.message)
    }
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
