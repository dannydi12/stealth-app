import React, { createRef, FC, useState } from 'react'
import generate from 'project-name-generator'
import Confetti from 'react-confetti'
import { useLocation, useParams } from 'react-router-dom'
import { StyledProfileCreator } from '.'
import { mailman } from '../../../utils/scripts/mailman'
import { Avatar } from '../../shared'

type AvatarType = { emoji: string; color: string }

const ProfileCreator: FC = () => {
  const { state: { uid } }: any = useLocation()
  const emojis = ['✌', '😂', '😝', '😁', '😱', '👉', '🙌', '🍻', '🔥', '🌈', '☀', '🎈', '🌹', '💄', '🎀', '⚽', '🎾', '🏁', '😡', '👿', '🐻', '🐶', '🐬', '🐟', '🍀', '👀', '🚗', '🍎', '💝', '💙', '👌', '❤', '😍', '😉', '😓', '😳', '💪', '💩', '🍸', '🔑', '💖', '🌟', '🎉', '🌺', '🎶', '👠', '🏈', '⚾', '🏆', '👽', '💀', '🐵', '🐮', '🐩', '🐎', '💣', '👃', '👂', '🍓', '💘', '💜', '👊', '💋', '😘', '😜', '😵', '🙏', '👋', '🚽', '💃', '💎', '🚀', '🌙', '🎁', '⛄', '🌊', '⛵', '🏀', '🎱', '💰', '👶', '👸', '🐰', '🐷', '🐍', '🐫', '🔫', '👄', '🚲', '🍉', '💛', '💚']
  const colors = ['fee2e2', 'ffedd5', 'fef3c7', 'fef9c3', 'ecfccb', 'dcfce7', 'd1fae5', 'ccfbf1', 'cffafe', 'e0f2fe', 'dbeafe', 'e0e7ff', 'ede9fe', 'f3e8ff', 'fae8ff', 'fce7f3', 'ffe4e6']
  const autoHandle = generate().dashed
  const [showConfetti, setShowConfetti] = useState(false)
  const [handle, setHandle] = useState('')
  const [avatar, setAvatar] = useState<AvatarType>({ emoji: emojis[0], color: colors[1] })

  const authenticate = async () => {
    await mailman('signup', 'POST', JSON.stringify({ data: true }))
    setShowConfetti(true)
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
        onConfettiComplete={(confetti: any) => {
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
      <button type="button" className="finish-btn" onClick={() => authenticate()}>Finish</button>
    </StyledProfileCreator>
  )
}

export default ProfileCreator
