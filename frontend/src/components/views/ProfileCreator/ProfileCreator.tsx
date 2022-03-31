import React, { createRef, FC, useState } from 'react'
import { StyledProfileCreator } from '.'
import { Avatar } from '../../shared'

const ProfileCreator: FC = () => {
  const [handle, setHandle] = useState('')
  const emojis = ['✌', '😂', '😝', '😁', '😱', '👉', '🙌', '🍻', '🔥', '🌈', '☀', '🎈', '🌹', '💄', '🎀', '⚽', '🎾', '🏁', '😡', '👿', '🐻', '🐶', '🐬', '🐟', '🍀', '👀', '🚗', '🍎', '💝', '💙', '👌', '❤', '😍', '😉', '😓', '😳', '💪', '💩', '🍸', '🔑', '💖', '🌟', '🎉', '🌺', '🎶', '👠', '🏈', '⚾', '🏆', '👽', '💀', '🐵', '🐮', '🐩', '🐎', '💣', '👃', '👂', '🍓', '💘', '💜', '👊', '💋', '😘', '😜', '😵', '🙏', '👋', '🚽', '💃', '💎', '🚀', '🌙', '🎁', '⛄', '🌊', '⛵', '🏀', '🎱', '💰', '👶', '👸', '🐰', '🐷', '🐍', '🐫', '🔫', '👄', '🚲', '🍉', '💛', '💚']
  const colors = ['fee2e2', 'ffedd5', 'fef3c7', 'fef9c3', 'ecfccb', 'dcfce7', 'd1fae5', 'ccfbf1', 'cffafe', 'e0f2fe', 'dbeafe', 'e0e7ff', 'ede9fe', 'f3e8ff', 'fae8ff', 'fce7f3', 'ffe4e6']

  const authenticate = async () => {
    //
  }

  const handleInput = () => {
    
  }

  return (
    <StyledProfileCreator>
      <div className="top">
        <Avatar avatar={{ color: '#E0F2FE', emoji: '🥝' }} size={95} />
        <div className="handle-input-container">
          @
          <div onInput={(e) => setHandle(e.currentTarget.innerText)} className="handle-input" contentEditable={true}>
            hello
          </div>
        </div>
      </div>
      <div className="avatar-list">
        {emojis.map((emoji) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)]
          const size = (window.innerWidth - 40 - 80) / 4
          return <Avatar avatar={{ emoji, color: `#${randomColor}` }} size={size} key={emoji} />
        })}
      </div>
    </StyledProfileCreator>
  )
}

export default ProfileCreator
