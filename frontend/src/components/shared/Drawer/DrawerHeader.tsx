import React from 'react'
import moment from 'moment'
import { formatDate, formatNumber } from '../../../helper'
import { Avatar } from '../Avatar'
import { Username } from '../Username'
import { Dot, Posts, Post, Header, ViewsContainer, Views, PostDate } from './DrawerHeader.styled'

type Props = {
   scale: number
   avatar: {
      emoji: string
      color: string
   }
   username: string
   views: number
   postDate: Date
   message: string
   posts: number
   isPost: boolean
}

const DrawerHeader: React.FC<Props> = ({
   scale,
   username,
   views,
   postDate,
   message,
   posts,
   isPost,
   avatar,
}) => (
   <Header className="header">
      <Avatar scale={scale} avatar={avatar} />
      <Username>{username}</Username>
      <ViewsContainer>
         <Views>{`${formatNumber(views)} views`} </Views>
         {isPost ? (
            <PostDate>{formatDate(moment(postDate))}</PostDate>
         ) : (
            <>
               <Dot />
               <Posts>{`${formatNumber(posts)} posts`}</Posts>
            </>
         )}
      </ViewsContainer>
      {isPost && <Post>{message}</Post>}
   </Header>
)

export default DrawerHeader
