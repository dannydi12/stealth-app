import React, { useState } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { Message } from '../Message'
import { ProfileIcon } from '../ProfileIcon'
import { Username } from '../Username'

const InnerContainer = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   height: 720px;
   width: 100%;

   padding: 70px 30px;

   background-color: #1c1c1e;
   position: relative;
`

const Container = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   flex-direction: column;
   height: 100%;
   width: 100%;
   background-color: rgba(0, 0, 0, 0.7);
`

const Header = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   width: 100%;

   a {
      font-size: 15px;
      text-decoration: none;
      font-weight: 600;
   }

   & > div:first-child {
      position: absolute;
      top: -30px;
   }
`

const Body = styled.div``

const ViewsContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   width: 100%;

   color: #66666e;
   font-size: 15px;
   font-weight: 500;

   margin-top: 11px;
`

const Views = styled.p``

const PostDate = styled.p`
   position: absolute;
   right: 0;
`

type Props = {
   id: string
}

const REFERENCE = moment(new Date())
const TODAY = REFERENCE.clone().startOf('day')
const YESTERDAY = REFERENCE.clone().subtract(1, 'days').startOf('day')

const Drawer: React.FC<Props> = ({ id }) => {
   const [pfp, setPfp] = useState('🥐')
   const [color, setColor] = useState('#E0F2FE')
   const [username, setUsername] = useState('@tobiasaf')
   const [message, setMessage] = useState('I just had the best croissant and coffee. ')
   const [views, setViews] = useState(0)
   const [postDate, setPostDate] = useState(new Date())
   const [scale, setScale] = useState(1)

   return (
      <Container>
         <InnerContainer>
            <Header>
               <ProfileIcon scale={scale} color={color}>
                  {pfp}
               </ProfileIcon>
               <Username>{username}</Username>
               <ViewsContainer>
                  <Views>{`${views} views`} </Views>
               </ViewsContainer>
            </Header>
            <Body>
               <Message pfp={pfp} date={postDate} username={username} color={color}>
                  {message}
               </Message>
            </Body>
         </InnerContainer>
      </Container>
   )
}

export default Drawer
