import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import { Message } from '../Message'
import { PostMessage } from '../PostMessage'
import DrawerHeader from './DrawerHeader'

const Container = styled(animated.div)`
   display: flex;
   align-items: center;
   flex-direction: column;

   height: 720px;

   width: 100%;

   padding: 55px 0px;

   background-color: #1c1c1e;
   position: absolute;
   z-index: 2;

   bottom: 0;
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
   show: boolean
}

const Drawer: React.FC<Props> = ({ id, isPost = true, show }) => {
   const [emoji, setEmoji] = useState('🥐')
   const [color, setColor] = useState('#E0F2FE')
   const [username, setUsername] = useState('@tobiasaf')
   const [message, setMessage] = useState('I just had the best croissant and coffee. ')
   const [views, setViews] = useState(5000)
   const [postDate, setPostDate] = useState(new Date())
   const [scale, setScale] = useState(1)
   const [locationName, setLocationName] = useState('Los Angeles')
   const [messages, setMessages] = useState([
      { emoji, postDate, username, color, message, locationName },
      { emoji, postDate, username, color, message, locationName },
      { emoji, postDate, username, color, message, locationName },
      { emoji, postDate, username, color, message, locationName },
      { emoji, postDate, username, color, message, locationName },
      { emoji, postDate, username, color, message, locationName },
      { emoji, postDate, username, color, message, locationName },
   ])
   const [posts, setPosts] = useState(31)

   const style = useSpring({
      display: show ? 'flex' : 'none',
      opacity: show ? 1 : 0,
      translateY: show ? 0 : 100,
   })

   const handleSubmit = (e: any, data: string) => {
      e.preventDefault()
      console.log(data)
   }

   return (
      <Container style={style}>
         <DrawerHeader
            scale={scale}
            avatar={{ emoji, color }}
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
                  avatar={{ emoji: isPost ? mes.emoji : '📍', color: mes.color }}
                  date={mes.postDate}
                  username={isPost ? mes.username : mes.locationName}
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
      </Container>
   )
}

export default Drawer
