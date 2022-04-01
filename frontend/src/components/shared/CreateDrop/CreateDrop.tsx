import React, { FC, useState } from 'react'
import { Geolocation } from '@capacitor/geolocation'
import { mailman } from '../../../utils/scripts/mailman'
import { useKeyboardHeight } from '../../../utils/scripts/useKeyboardHeight'
import { BottomSheet } from '../BottomSheet'
import { Button } from '../Button'
import StyledCreateDrop from './CreateDrop.Styled'
import DropInput from './DropInput'

const CreateDrop: FC = () => {
   const { keyboardHeight } = useKeyboardHeight()
   const [showDropDrawer, setShowDropDrawer] = useState(false)
   const [message, setMessage] = useState('')

   const handleChange = (e) => setMessage(e.target.value)

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

   const handleSubmitDrop = async () => {
      Geolocation.requestPermissions()
      const pos = await Geolocation.getCurrentPosition()
      const lat = pos?.coords.latitude || 0
      const long = pos?.coords.longitude || 0

      const data = {
         message,
         coordinates: [long, lat],
         type: 'message',
      }

      await mailman('drops', 'POST', data)

      setShowDropDrawer(false)
   }

   const handleButtonClick = () => {
      console.log('pls god help')
      console.log(showDropDrawer)
      setShowDropDrawer(true)
   }

   return (
      <StyledCreateDrop keyboardHeight={keyboardHeight}>
         <BottomSheet isOpen={showDropDrawer} close={() => setShowDropDrawer(false)}>
            <DropInput user={user} handleChange={handleChange} />
         </BottomSheet>

         <div className="button-container">
            <Button
               onClick={showDropDrawer ? handleSubmitDrop : handleButtonClick}
               className="new-drop-button"
            >
               Drop
            </Button>
         </div>
      </StyledCreateDrop>
   )
}

export default CreateDrop
