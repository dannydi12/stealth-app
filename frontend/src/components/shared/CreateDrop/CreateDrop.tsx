import React, { FC, useState } from 'react'
import { StyledCreateDrop, DropInput } from '.'
import { BottomSheet } from '..'
import { Button } from '../Button'

const CreateDrop: FC = () => {
  const [showDropDrawer, setShowDropDrawer] = useState(false)

  return (
    <StyledCreateDrop>
      <BottomSheet isOpen={showDropDrawer} close={() => setShowDropDrawer(false)}>
        <DropInput />
      </BottomSheet>
      
      <div className="button-container">
        <Button onClick={() => setShowDropDrawer(true)} className="new-drop-button">Drop</Button>
      </div>
    </StyledCreateDrop>
  )
}

export default CreateDrop
