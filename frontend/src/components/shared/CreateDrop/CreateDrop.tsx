import React, { FC, useState } from 'react'
import { Geolocation } from '@capacitor/geolocation'
import { Haptics, NotificationType } from '@capacitor/haptics'
import fireworks from 'fireworks'
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

   const handleChange = (e: any) => setMessage(e.target.value)

   // TODO
   // const { user } = useContext(userStore)

   // useEffect(() => {
   //   setFormState('')
   // }, [user])

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
      showFirework()
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
