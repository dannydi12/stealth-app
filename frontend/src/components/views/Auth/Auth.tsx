import React, { FC } from 'react'
// import { SignInWithApple, SignInWithAppleOptions } from '@capacitor-community/apple-sign-in'
import { cfaSignInApple } from 'capacitor-firebase-auth'
import sha256 from 'crypto-js/sha256'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { StyledAuth } from '.'
import { auth } from '../../routes'
import { LogoIcon } from '../../shared'

const Auth: FC = () => {
   const navigate = useNavigate()

   const authenticate = async () => {
      try {
        await cfaSignInApple().toPromise()
        navigate(auth.profileCreator)

        /*

         const firebaseAuth = getAuth()
         const { response } = await SignInWithApple.authorize(options)

         const appleCredential = new OAuthProvider('apple.com').credential({
            idToken: response.identityToken,
            rawNonce: nonce,
         })

         await signInWithCredential(firebaseAuth, appleCredential)

         // await setPersistence(firebaseAuth, { type: 'LOCAL' })
         navigate(auth.profileCreator)
         */
      } catch (err: any) {
         // eslint-disable-next-line no-alert
         alert(JSON.stringify(err))
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
