import React, { FC, useState } from 'react'
import { StyledCreateDrop, DropInput } from '.'
import { BottomSheet } from '..'
import { useKeyboardHeight } from '../../../utils/scripts/useKeyboardHeight'
import { Button } from '../Button'

const CreateDrop: FC = () => {
   const { keyboardHeight } = useKeyboardHeight()
   const [showDropDrawer, setShowDropDrawer] = useState(false)

   return (
      <StyledCreateDrop keyboardHeight={keyboardHeight}>
         <BottomSheet isOpen={showDropDrawer} close={() => setShowDropDrawer(false)}>
            <DropInput />
         </BottomSheet>

         <div className="button-container">
            <Button onClick={() => setShowDropDrawer(true)} className="new-drop-button">
               Drop
            </Button>
         </div>
      </StyledCreateDrop>
   )
}

export default CreateDrop
