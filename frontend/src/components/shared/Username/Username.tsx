import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.a`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: transparent;
   width: fit-content;
   color: #e9e9e9;

   font-size: 40px;
   font-weight: 400;
   text-underline-offset: 0.2em;
   text-decoration: underline;
`

const Username: React.FC = ({ children }) => {
   const navigate = useNavigate()

   const handleNavigate = () => navigate(`/user/${children}`)

   return <Button onClick={handleNavigate}>{children}</Button>
}

export default Username
