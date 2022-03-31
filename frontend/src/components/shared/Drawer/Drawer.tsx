import React, { useState } from 'react'
import styled from 'styled-components'
import { ProfileIcon } from '../ProfileIcon'

const Container = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   height: 720px;
   position: relative;
`

const Header = styled.div``
const Body = styled.div``

type Props = {
   id: string
}

const Drawer: React.FC = ({ children }) => {
   const [pfp, setPfp] = useState('🥐')
   const [color, setColor] = useState('#E0F2FE')
   const [username, setUsername] = useState('')
   const [message, setMessage] = useState('')
   const [views, setViews] = useState(0)
   const [postDate, setPostDate] = useState(new Date())

   return (
      <Container>
         <Header>
            <ProfileIcon color={color}>{pfp}</ProfileIcon>
         </Header>
         <Body>a</Body>
      </Container>
   )
}

export default Drawer
