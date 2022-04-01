import React, { FC, useContext, useState } from 'react'
import { Geolocation } from '@capacitor/geolocation'
import { Haptics, NotificationType } from '@capacitor/haptics'
import fireworks from 'fireworks'
import { mailman } from '../../../utils/scripts/mailman'
import { useKeyboardHeight } from '../../../utils/scripts/useKeyboardHeight'
import { userStore } from '../../../utils/userContext'
import { BottomSheet } from '../BottomSheet'
import { Button } from '../Button'
import StyledCreateDrop from './CreateDrop.Styled'
import DropInput from './DropInput'

type Props = {
   updateList: (any) => void;
}

const CreateDrop: FC<Props> = ({ updateList }: Props) => {
   const { keyboardHeight } = useKeyboardHeight()
   const [showDropDrawer, setShowDropDrawer] = useState(false)
   const [message, setMessage] = useState('')
   const { user } = useContext(userStore)

   const handleChange = (e: any) => setMessage(e.target.value)

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

      const res = await mailman('drops', 'POST', data)
      updateList(res)
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
