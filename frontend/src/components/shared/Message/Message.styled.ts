import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 13px;
`

export const InnerContainer = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   gap: 8px;
`
export const Header = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
`

export const MessageContent = styled.p`
   font-size: 15px;
   font-weight: 400;
   color: white;
`

export const DatePosted = styled.p`
   font-size: 15px;
   font-weight: 500;
   color: #66666e;
`

export const Username = styled.p`
   font-weight: 600;
   font-size: 15px;
   color: #ffffff;
`
