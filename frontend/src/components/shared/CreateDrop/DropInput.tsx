import React, { FC } from 'react'
import { StyledDropInput } from '.'
import { Avatar } from '../Avatar'

const DropInput: FC = () => {
  const nope = 'NOPE'

  return (
    <StyledDropInput>
      <div className="user-container">
        <Avatar avatar={{ emoji: '🍌', color: '#fef3c7' }} size={75} />
        <span className="user-handle">@jamelhammoud</span>
      </div>
      <textarea className="drop-text-area" placeholder="Drop something interesting" />
    </StyledDropInput>
  )
}

export default DropInput
