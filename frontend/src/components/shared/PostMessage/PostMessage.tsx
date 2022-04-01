import React, { useState } from 'react'
import styled from 'styled-components'
import { Avatar } from '../Avatar'

const Container = styled.form`
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
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

const Button = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: transparent;
   border: none;
   position: absolute;
   right: 13px;
   bottom: 27px;
   color: #007aff;
   font-size: 15px;
`

type Props = {
   onSubmit: (e: any, data: string) => void
}

const PostMessage: React.FC<Props> = ({ children, onSubmit }) => {
   const [message, setMessage] = useState('')

   const handleChange = (e) => {
      if (e.target.value.length < 250) setMessage(e.target.value)
   }

   const handleSubmit = (e) => {
      onSubmit(e, message)
      setMessage('')
   }

   return (
      <Container onSubmit={handleSubmit}>
         <Avatar size={37} avatar={{ emoji: '🏩', color: '#E6E2FE' }} />
         <Input placeholder="Write Comments" value={message} onChange={handleChange} />
         <Button>Drop</Button>
      </Container>
   )
}

export default PostMessage
