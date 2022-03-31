import { FC } from 'react'
import {
  SignInWithApple,
  SignInWithAppleResponse,
  SignInWithAppleOptions,
} from '@capacitor-community/apple-sign-in'
import { StyledAuthView } from '.'

const AuthView: FC = () => {
  const options: SignInWithAppleOptions = {
    clientId: 'com.crosswalkapp.app',
    redirectURI: 'https://www.crosswalkapp.com/login',
    scopes: 'email name',
    state: '12345',
    nonce: 'nonce'
  }

  const authenticate = async () => {
    const response = await SignInWithApple.authorize(options)
  }

  return (
    <StyledAuthView>
      <div className=""></div>
      <button className="continue-with-apple-btn">Sign in With Apple</button>
    </StyledAuthView>
  )
}

export default AuthView
