import React, { createRef, FC, useState } from 'react'
import generate from 'project-name-generator'
import Confetti from 'react-confetti'
import { StyledProfileCreator } from '.'
import { Avatar } from '../../shared'

type AvatarType = { emoji: string; color: string }

const ProfileCreator: FC = () => {
  const emojis = ['✌', '😂', '😝', '😁', '😱', '👉', '🙌', '🍻', '🔥', '🌈', '☀', '🎈', '🌹', '💄', '🎀', '⚽', '🎾', '🏁', '😡', '👿', '🐻', '🐶', '🐬', '🐟', '🍀', '👀', '🚗', '🍎', '💝', '💙', '👌', '❤', '😍', '😉', '😓', '😳', '💪', '💩', '🍸', '🔑', '💖', '🌟', '🎉', '🌺', '🎶', '👠', '🏈', '⚾', '🏆', '👽', '💀', '🐵', '🐮', '🐩', '🐎', '💣', '👃', '👂', '🍓', '💘', '💜', '👊', '💋', '😘', '😜', '😵', '🙏', '👋', '🚽', '💃', '💎', '🚀', '🌙', '🎁', '⛄', '🌊', '⛵', '🏀', '🎱', '💰', '👶', '👸', '🐰', '🐷', '🐍', '🐫', '🔫', '👄', '🚲', '🍉', '💛', '💚']
  const colors = ['fee2e2', 'ffedd5', 'fef3c7', 'fef9c3', 'ecfccb', 'dcfce7', 'd1fae5', 'ccfbf1', 'cffafe', 'e0f2fe', 'dbeafe', 'e0e7ff', 'ede9fe', 'f3e8ff', 'fae8ff', 'fce7f3', 'ffe4e6']
  const autoHandle = generate().dashed
  const [showConfetti, setShowConfetti] = useState(false)
  const [handle, setHandle] = useState('')
  const [avatar, setAvatar] = useState<AvatarType>({ emoji: emojis[0], color: colors[1] })

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: '10px',
    height: '10px',
    perspective: '500px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  }

  const authenticate = async () => {
    //
  }

  const handleSelection = async (value: string) => {
    setAvatar(JSON.parse(value))
  }

  return (
    <StyledProfileCreator hasHandle={!!handle}>
      <Confetti 
        style={{ pointerEvents: 'none' }}
        numberOfPieces={showConfetti ? 500 : 0}
        recycle={false}
        onConfettiComplete={(confetti: { reset: () => void }) => {
          setShowConfetti(false)
          confetti.reset()
        }}
        className="confetti"
      />
      <div className="top">
        <Avatar avatar={avatar} size={95} />
        <div className="handle-input-container">
          @
          <div spellCheck="false" placeholder={autoHandle} onInput={(e) => setHandle(e.currentTarget.innerText.trim())} className="handle-input" contentEditable={true} />
        </div>
      </div>
      <div className="avatar-list">
        {emojis.map((emoji, index) => {
          const randomColor = colors[index % 17]
          const size = (window.innerWidth - 40 - 80) / 4
          return (
            <div className="avatar-select-container">
              <input type="radio" name="avatar" value={JSON.stringify({ emoji, color: `#${randomColor}` })} onChange={(e) => handleSelection(e.currentTarget.value)} />
              <div className="avatar-select">
                <Avatar avatar={{ emoji, color: `#${randomColor}` }} size={size} key={emoji} />
              </div>
            </div>
           )
        })}
      </div>
      <button type="button" className="finish-btn" onClick={() => setShowConfetti(true)}>Finish</button>
    </StyledProfileCreator>
  )
}

export default ProfileCreator
