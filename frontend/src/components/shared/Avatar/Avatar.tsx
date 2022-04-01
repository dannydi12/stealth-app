import React, { FC } from 'react'
import { StyledAvatar } from '.'

type Props = {
  avatar: {
    emoji: string;
    color: string;
  };
  size?: number;
}

const Avatar: FC<Props> = ({ avatar, size = 62 }) => (
    <StyledAvatar className="avatar" avatarColor={avatar.color} size={size}>
      <div className="avatar-bg">
        <span className="emoji">{avatar.emoji}</span>
      </div>
    </StyledAvatar>
  )

export default Avatar
