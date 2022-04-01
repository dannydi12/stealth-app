import React from 'react'
import { Container, InnerContainer } from './Avatar.Styled'

type Props = {
   avatar: {
      emoji: string
      color: string
   }
   size?: number
   scale?: number
}

const Avatar: React.FC<Props> = ({ avatar, scale = 1, size = 80 }) => (
   <Container scale={scale} size={size}>
      <InnerContainer size={size} color={avatar.color}>
         <span>{avatar.emoji}</span>
      </InnerContainer>
   </Container>
)

export default Avatar
