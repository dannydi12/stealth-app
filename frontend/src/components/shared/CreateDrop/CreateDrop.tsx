import React, { FC, useState } from 'react'
import { Haptics, NotificationType } from '@capacitor/haptics'
import fireworks from 'fireworks'
import { StyledCreateDrop, DropInput } from '.'
import { BottomSheet } from '..'
import { useKeyboardHeight } from '../../../utils/scripts'
import { Button } from '../Button'

const CreateDrop: FC = () => {
   const { keyboardHeight } = useKeyboardHeight()
   const [showDropDrawer, setShowDropDrawer] = useState(false)

   const showFirework = async () => {
    fireworks({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      colors: ['#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e'],
    })
    await Haptics.notification({
      type: NotificationType.Success,
    })
   }

   return (
      <StyledCreateDrop keyboardHeight={keyboardHeight}>
         <BottomSheet isOpen={showDropDrawer} close={() => setShowDropDrawer(false)}>
            <DropInput />
         </BottomSheet>

         <div className="button-container">
            <Button onClick={() => showFirework()} className="new-drop-button">
               Drop
            </Button>
         </div>
      </StyledCreateDrop>
   )
}

export default CreateDrop
