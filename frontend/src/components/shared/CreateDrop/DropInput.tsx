import React, { FC, useContext, useEffect } from 'react'
import { StyledDropInput } from '.'
import { User } from '../../../types/User'
import { userStore } from '../../../utils/userContext'
import { Avatar } from '../Avatar'

type Props = {
  user: User | null
}

const DropInput: FC<Props> = ({ user }) => {
  const nope = 'NOPE'

  return (
    <StyledDropInput>
      {user && (
        <>
        <div className="user-container">
          <Avatar avatar={{ emoji: user.avatar.pfp, color: user.avatar.color }} size={75} />
          <span className="user-handle">{`@${user.username}`}</span>
        </div>
        <textarea className="drop-text-area" placeholder="Drop something interesting" />
        </>
      )}
    </StyledDropInput>
  )
}

export default DropInput
