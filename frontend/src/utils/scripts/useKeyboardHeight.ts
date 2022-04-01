import { useEffect, useState } from 'react'
import { Capacitor } from '@capacitor/core';
import { Keyboard, KeyboardInfo } from '@capacitor/keyboard'

export const useKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0)

  const handleShowKeyboard = (info: KeyboardInfo) => {
    const height = info.keyboardHeight
    setKeyboardHeight(height)
  }

  const handleHideKeyboard = () => {
    setKeyboardHeight(0)
  }

  useEffect(() => {
    const canKeyboard = Capacitor.isPluginAvailable('Keyboard')

    if (canKeyboard) {
      Keyboard.setAccessoryBarVisible({ isVisible: false })
      Keyboard.addListener('keyboardWillShow', handleShowKeyboard)
      Keyboard.addListener('keyboardWillHide', handleHideKeyboard)
    }
  }, [])

  return {
    keyboardHeight,
  }
}
