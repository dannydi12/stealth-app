import React, { useState } from 'react'
import styled from 'styled-components'
import { Message } from '../Message'
import { PostMessage } from '../PostMessage'
import DrawerHeader from './DrawerHeader'

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

const Body = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   gap: 24px;
   height: 100%;
   overflow: auto;
   padding-top: 24px;
`

const Footer = styled.div`
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
   isPost?: boolean
}

const Drawer: React.FC<Props> = ({ id, isPost = true }) => {
   const [pfp, setPfp] = useState('🥐')
   const [color, setColor] = useState('#E0F2FE')
   const [username, setUsername] = useState('@tobiasaf')
   const [message, setMessage] = useState('I just had the best croissant and coffee. ')
   const [views, setViews] = useState(5000)
   const [postDate, setPostDate] = useState(new Date())
   const [scale, setScale] = useState(1)
   const [locationName, setLocationName] = useState('Los Angeles')
   const [messages, setMessages] = useState([
      { pfp, postDate, username, color, message, locationName },
      { pfp, postDate, username, color, message, locationName },
      { pfp, postDate, username, color, message, locationName },
      { pfp, postDate, username, color, message, locationName },
      { pfp, postDate, username, color, message, locationName },
      { pfp, postDate, username, color, message, locationName },
      { pfp, postDate, username, color, message, locationName },
   ])
   const [posts, setPosts] = useState(31)

   const handleSubmit = (e: any, data: string) => {
      e.preventDefault()
      console.log(data)
   }

   return (
      <Container>
         <InnerContainer>
            <DrawerHeader
               scale={scale}
               color={color}
               pfp={pfp}
               username={username}
               views={views}
               postDate={postDate}
               message={message}
               posts={posts}
               isPost={isPost}
            />
            <Body>
               {messages.map((mes) => (
                  <Message
                     pfp={isPost ? mes.pfp : '📍'}
                     date={mes.postDate}
                     username={isPost ? mes.username : mes.locationName}
                     color={mes.color}
                  >
                     {mes.message}
                  </Message>
               ))}
            </Body>
            {isPost && (
               <Footer>
                  <PostMessage onSubmit={handleSubmit} />
               </Footer>
            )}
         </InnerContainer>
      </Container>
   )
}

export default Drawer
