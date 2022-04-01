import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import { Message } from '../Message'
import { PostMessage } from '../PostMessage'
import { Container, Footer, Body } from './Drawer.styled'
import DrawerHeader from './DrawerHeader'

type Props = {
   id: string
   isPost?: boolean
   show: boolean
   handleClose: () => void
}

const Drawer: React.FC<Props> = ({ id, isPost = true, show, handleClose }) => {
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
      marginBottom: show ? 0 : -50,
   })

   const handleSubmit = (e: any, data: string) => {
      e.preventDefault()
      console.log(data)
   }

   return (
      <Container style={style} className="drawer">
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
