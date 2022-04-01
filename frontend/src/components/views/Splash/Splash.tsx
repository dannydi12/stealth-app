import React, { FC } from 'react'
import { StyledSplash } from '.'
import splash from './splash-1.gif'
import { SplashLogo } from './SplashLogo'

const Splash: FC = () => {
  const hi = 'dedw'

  return (
    <StyledSplash>
      <SplashLogo />
      <img src={splash} alt="" className="splash" />
    </StyledSplash>
  )
}

export default Splash
