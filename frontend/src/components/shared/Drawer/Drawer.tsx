import React, { useEffect, useState } from 'react'
import { Drop } from '../../../types/Drop'
import { mailman } from '../../../utils/scripts/mailman'
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

   const getDrop = async () => {
      const dropData = await mailman(`drops/${id}`, 'GET')
      setDrop(dropData)
   }

   const handleSubmit = async (e: any, data: string) => {
      e.preventDefault()
      await mailman('comments', 'POST', { message: data, type: 'message', drop: id })
      console.log(data)
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
            posts={drop?.comments.length || 0}
            isPost={isPost}
         />
         <Body>
            {drop?.comments.map((mes) => (
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
