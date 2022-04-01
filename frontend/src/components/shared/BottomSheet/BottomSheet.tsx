import React, { createRef, FC, ReactNode, useEffect, useState } from 'react'
import { Capacitor } from '@capacitor/core'
import { Keyboard } from '@capacitor/keyboard'
import { useSpring } from 'react-spring'
import { BottomSheet as SpringSheet, BottomSheetRef } from 'react-spring-bottom-sheet'
import { StyledBottomSheet } from '.'

type Props = {
   isOpen?: boolean
}

const BottomSheet: FC<Props> = ({ isOpen, children }) => {
   const sheetRef = createRef<BottomSheetRef>()

   //  useEffect(() => {
   //     const canKeyboard = Capacitor.isPluginAvailable('Keyboard')

   //     if (!canKeyboard) {
   //        return
   //     }

   //     Keyboard.addListener('keyboardWillShow', ({ keyboardHeight }) => {
   //        setKeyboardH(keyboardHeight)
   //     })
   //     Keyboard.addListener('keyboardWillHide', () => {
   //        setKeyboardH(0)
   //     })
   //  }, [])

   const style = useSpring({
      display: isOpen ? 'flex' : 'none',
      opacity: isOpen ? 1 : 0,
      marginBottom: isOpen ? 0 : -50,
   })

   return (
      <StyledBottomSheet style={style}>
         {/* <SpringSheet
            open={!!isOpen}
            snapPoints={({ minHeight }) => minHeight}
            ref={sheetRef}
            className="sheet"
            onDismiss={() => {
               close()
            }}
            onSpringStart={handleDisable}
            onSpringEnd={handleEnable}
            style={{ bottom: keyboardH, backgroundColor: 'red' }}
         > */}
         {children}
         {/* </SpringSheet> */}
      </StyledBottomSheet>
   )
}
export default BottomSheet
