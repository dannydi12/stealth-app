import React, { FC } from 'react'
import styled from 'styled-components'
import { StyledCreateDrop, DropInput } from '.'
import { BottomSheet } from '..'
import { Button } from '../Button'

type Props = {
   show: boolean
   handleClose: () => void
   handleOpen: () => void
}

const ButtonContainer = styled.div<{ show: boolean }>`
   padding: 0 20px calc(env(safe-area-inset-bottom) + 20px) 20px;
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   z-index: 20;

   .new-drop-button {
      height: 56px;
      width: 100%;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 6px;
      border: none;
      color: black;
   }
`

const CreateDrop: FC<Props> = ({ show, handleClose, handleOpen }) => {
   const handleSubmit = (e) => {
      e.preventDefault()
   }
   return (
      <StyledCreateDrop onSubmit={handleSubmit}>
         <BottomSheet isOpen={show}>
            <DropInput />
         </BottomSheet>
         <ButtonContainer show={show}>
            <Button onClick={show ? handleClose : handleOpen} className="new-drop-button">
               Drop
            </Button>
         </ButtonContainer>
      </StyledCreateDrop>
   )
}

export default CreateDrop
