// @ts-nocheck
import React, { useEffect, useRef } from 'react'
import { Keyboard } from '@capacitor/keyboard'
import styled from 'styled-components'
import { ProfileIcon } from '../ProfileIcon'

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   gap: 17px;

   padding: 16px;
`

const Input = styled.input.attrs(() => ({ type: 'text' }))`
   width: 100%;
   height: 44px;
   padding-left: 10px;

   border: 1px solid #007aff;
   border-radius: 5px;

   background-color: transparent;
   color: white;

   font-size: 15px;
   &::placeholder {
      color: #8b8b8d;
   }
`

const PostMessage: React.FC = ({ children }) => {
   const inputElement = useRef(null)

   Keyboard.addListener('keyboardWillShow', (info) => {
      Keyboard.show()
   })

   return (
      // lol
      <Container>
         <ProfileIcon color="#E6E2FE" size="37px" fontSize="21px">
            🏩
         </ProfileIcon>
         <Input ref={inputElement} placeholder="Write Comments" />
      </Container>
   )
}

export default PostMessage
