/* eslint-disable react/jsx-no-useless-fragment */
import React, { useContext, useEffect, useState } from 'react'
import { Drop } from '../../../types/Drop'
import { mailman } from '../../../utils/scripts/mailman'
import { userStore } from '../../../utils/userContext'
import { BottomSheet } from '../BottomSheet'
import { Message } from '../Message'
import { PostMessage } from '../PostMessage'
import { Footer, Body } from './Drawer.styled'
import DrawerHeader from './DrawerHeader'

type Props = {
   id: string
   isPost?: boolean
   show: boolean
   handleClose: () => void
}

const Drawer: React.FC<Props> = ({ id, isPost = true, show, handleClose }) => {
   const [views, setViews] = useState(5000)
   const [scale, setScale] = useState(1)
   const [drop, setDrop] = useState<Drop | null>(null)
   const [comments, setComments] = useState<any>([])
   const { user } = useContext(userStore)

   const getDrop = async () => {
      const dropData = await mailman(`drops/${id}`, 'GET')
      setDrop(dropData)
      setComments(dropData.comments)
   }

   const handleSubmit = async (e: any, data: string) => {
      e.preventDefault()
      const comment = await mailman('comments', 'POST', { message: data, type: 'message', drop: id })
      // alert(JSON.stringify(comment))
      setComments((prev) => prev.concat([{
        ...comment,
        author: {
          username: user?.username,
          avatar: user?.avatar,
          drop: drop?._id,
          type: 'message',
        },
      }]))
   }

   useEffect(() => {
     getDrop()
   }, [])

   return (
      <BottomSheet close={handleClose} isOpen={show} focus={false}>
         <DrawerHeader
            scale={scale}
            avatar={{
               emoji: drop?.author?.avatar.pfp || '',
               color: drop?.author?.avatar.color || '',
            }}
            username={drop?.author?.username || ''}
            views={views}
            postDate={new Date(drop?.createdAt || '')}
            message={drop?.message || ''}
            posts={drop?.comments ? drop.comments.length : 0}
            isPost={isPost}
         />
         <Body>
            {comments.map((mes: any) => (
               <Message
                  avatar={{
                     emoji: isPost ? mes.author?.avatar.pfp || '' : '📍',
                     color: mes.author?.avatar.color || '',
                  }}
                  date={new Date(mes.createdAt)}
                  username={mes.author?.username || ''}
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
      </BottomSheet>
   )
}

export default Drawer
