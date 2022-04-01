import React from 'react'
import { Container, InnerContainer } from './Avatar.Styled'

type Props = {
   avatar: {
      emoji: string
      color: string
   }
   size?: number
   scale?: number
   isDisabled?: boolean;
}

const Avatar: React.FC<Props> = ({ avatar, scale = 1, size = 80, isDisabled }) => (
   <Container scale={scale} size={size} isDisabled={isDisabled} className="avatar">
      <InnerContainer size={size} color={avatar.color}>
         {avatar.emoji}
      </InnerContainer>
   </Container>
)

export default Avatar
