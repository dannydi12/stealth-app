import React, { FC, useEffect, useState } from 'react'
import { Capacitor } from '@capacitor/core'
import { Keyboard } from '@capacitor/keyboard'
import { StyledDropInput } from '.'
import { Avatar } from '../Avatar'

const DropInput: FC = () => {
  const [windowHeight, setWindowHeight] = useState(window.visualViewport.height)

  const handleInput = () => {

  }

  const handleKeyboard = () => {
    setWindowHeight(window.visualViewport.height)
  }

  useEffect(() => {
    const canKeyboard = Capacitor.isPluginAvailable('Keyboard')

    if (!canKeyboard) {
      return
    }

    Keyboard.addListener('keyboardDidShow', handleKeyboard)
    Keyboard.addListener('keyboardDidHide', handleKeyboard)
  }, [])

  return (
    <StyledDropInput>
      <div className="user-container">
        <Avatar avatar={{ emoji: '🍌', color: '#fef3c7' }} size={75} />
        <span className="user-handle">@jamelhammoud</span>
      </div>
      <textarea className="drop-text-area" placeholder="Drop something interesting" />
    </StyledDropInput>
  )
}

export default DropInput
