import React, { useState } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { formatDate, formatNumber } from '../../../helper'
import { Message } from '../Message'
import { PostMessage } from '../PostMessage'
import { ProfileIcon } from '../ProfileIcon'
import { Username } from '../Username'

const InnerContainer = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;

   height: 720px;
   width: 100%;

   padding: 55px 0px;

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
   gap: 11px;
   width: 100%;

   padding: 15px 32px;

   border-bottom: 1px solid rgba(102, 102, 110, 0.2);
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

const Body = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   gap: 24px;
   overflow: auto;
   padding-top: 24px;
`

const ViewsContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   width: 100%;

   color: #66666e;
   font-size: 15px;
   font-weight: 500;
`

const Views = styled.p``

const PostDate = styled.p`
   position: absolute;
   right: 0;
`

const Post = styled.h1`
   font-size: 24px;
   line-height: 28.64px;
   margin-top: 11px;
`

const Footer = styled.form`
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   bottom: 0;
   height: 92px;
   width: 100%;
   background-color: #27272a;
`

type Props = {
   id: string
}

const Drawer: React.FC<Props> = ({ id }) => {
   const [pfp, setPfp] = useState('🥐')
   const [color, setColor] = useState('#E0F2FE')
   const [username, setUsername] = useState('@tobiasaf')
   const [message, setMessage] = useState('I just had the best croissant and coffee. ')
   const [views, setViews] = useState(5000)
   const [postDate, setPostDate] = useState(new Date())
   const [scale, setScale] = useState(1)
   const [messages, setMessages] = useState([
      { pfp, postDate, username, color, message },
      { pfp, postDate, username, color, message },
      { pfp, postDate, username, color, message },
      { pfp, postDate, username, color, message },
      { pfp, postDate, username, color, message },
      { pfp, postDate, username, color, message },
      { pfp, postDate, username, color, message },
      { pfp, postDate, username, color, message },
      { pfp, postDate, username, color, message },
      { pfp, postDate, username, color, message },
      { pfp, postDate, username, color, message },
      { pfp, postDate, username, color, message },
   ])

   return (
      <Container>
         <InnerContainer>
            <Header className="header">
               <ProfileIcon scale={scale} color={color}>
                  {pfp}
               </ProfileIcon>
               <Username>{username}</Username>
               <ViewsContainer>
                  <Views>{`${formatNumber(views)} views`} </Views>
                  <PostDate>{formatDate(moment(postDate))}</PostDate>
               </ViewsContainer>
               <Post>{message}</Post>
            </Header>
            <Body>
               {messages.map((mes) => (
                  <Message
                     pfp={mes.pfp}
                     date={mes.postDate}
                     username={mes.username}
                     color={mes.color}
                  >
                     {mes.message}
                  </Message>
               ))}
            </Body>
            <Footer>
               <PostMessage />
            </Footer>
         </InnerContainer>
      </Container>
   )
}

export default Drawer
