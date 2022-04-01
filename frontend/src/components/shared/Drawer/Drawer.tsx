import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Drop } from '../../../types/Drop'
import { mailman } from '../../../utils/scripts/mailman'
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
   const scale = 1
   const [views, setViews] = useState(5000)
   const [drop, setDrop] = useState<Drop | null>(null)

   const getDrop = async () => {
      const dropData = await mailman(`drops/${id}`, 'GET', {})
      setDrop(dropData)
   }

   const handleSubmit = async (e: any, data: string) => {
      e.preventDefault()
      await mailman('drops', 'POST', { message: data, type: 'message', drop: id })
      console.log(data)
   }

   useEffect(() => {
      getDrop()
   }, [])

   return (
      <Container>
         <InnerContainer>
            <DrawerHeader
               scale={scale}
               color={drop?.author?.avatar.color || ''}
               pfp={drop?.author?.avatar.pfp || ''}
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
                     pfp={mes.author?.avatar.pfp || '📍'}
                     date={new Date(mes.createdAt)}
                     username={mes.author?.username || ''}
                     color={mes.author?.avatar.color || ''}
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
