import React, { FC, useContext, useEffect, useState } from 'react'
import { User } from '../../../types/User'
import { useKeyboardHeight } from '../../../utils/scripts/useKeyboardHeight'
import { userStore } from '../../../utils/userContext'
import { BottomSheet } from '../BottomSheet'
import { Button } from '../Button'
import StyledCreateDrop from './CreateDrop.Styled'
import DropInput from './DropInput'

const CreateDrop: FC = () => {
  const { keyboardHeight } = useKeyboardHeight()
  const [showDropDrawer, setShowDropDrawer] = useState(false)
  const [formError, setFormError] = useState('')
  const [formState, setFormState] = useState('')

  // TODO
  // const { user } = useContext(userStore)

  // useEffect(() => {
  //   setFormState('')
  // }, [user])

  const user = {
    username: 'Paupau',
    avatar: {
      color: 'pink',
      pfp: '🍌',
    },
    signUpLocation: {
      type: '',
      coordinates: [30, 30],
    },
    updatedAt: `${new Date()}`,
    createdAt: `${new Date()}`,
  }

  const handleSubmitDrop = () => {
    console.log('submit drop')

    setShowDropDrawer(false)
  }

  const handleButtonSubmit = () => {
    console.log('sakjfag')
    handleSubmitDrop()
  }

  const handleButtonClick = () => {
    console.log('pls god help')
    console.log(showDropDrawer)
     setShowDropDrawer(true)
  }

  return (
    <StyledCreateDrop keyboardHeight={keyboardHeight}>
      <BottomSheet isOpen={showDropDrawer} close={() => setShowDropDrawer(false)}>
        <DropInput user={user} />
      </BottomSheet>
      
      <div className="button-container">
          <Button onClick={showDropDrawer ? handleButtonSubmit : handleButtonClick} className="new-drop-button">Drop</Button>
      </div>
    </StyledCreateDrop>
  )
}

export default CreateDrop
