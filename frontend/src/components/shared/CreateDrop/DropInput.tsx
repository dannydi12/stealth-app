import React, { FC } from 'react'
import { StyledDropInput } from '.'
import { User } from '../../../types/User'
import { Avatar } from '../Avatar'

type Props = {
   user: User | null
   handleChange: (e) => void
}

const DropInput: FC<Props> = ({ user, handleChange }) => (
   <StyledDropInput>
      {user && user.avatar && (
         <>
            <div className="user-container">
               <Avatar avatar={{ emoji: user.avatar.pfp, color: user.avatar.color }} size={75} />
               <span className="user-handle">{`@${user.username}`}</span>
            </div>
            <textarea
               onChange={handleChange}
               className="drop-text-area"
               placeholder="Drop something interesting"
            />
         </>
      )}
   </StyledDropInput>
)

export default DropInput
