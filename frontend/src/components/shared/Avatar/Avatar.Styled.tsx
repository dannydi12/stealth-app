import styled from 'styled-components'

type StyledProps = {
  avatarColor: string;
  size: number;
}

const StyledAvatar = styled.div<StyledProps>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);

  .avatar-bg {
    height: ${({ size }) => size - 6}px;
    width: ${({ size }) => size - 6}px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${({ avatarColor }) => avatarColor};
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);

    .emoji {
      font-size: ${({ size }) => size * 0.65}px;
    }
  }
  
`

export default StyledAvatar
