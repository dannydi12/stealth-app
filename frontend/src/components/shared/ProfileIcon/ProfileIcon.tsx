import React from 'react'
import styled from 'styled-components'

type Props = {
   color: string
   scale: number
}

const Container = styled.div<Props>`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 80px;
   height: 80px;

   padding: 15px;
   border-radius: 50%;
   font-size: 50px;

   background-color: ${({ color }) => color};

   transform: scale(${({ scale }) => scale});
`

const ProfileIcon: React.FC<Props> = ({ children, color, scale }) => (
   <Container color={color} scale={scale}>
      {children}
   </Container>
)

export default ProfileIcon
