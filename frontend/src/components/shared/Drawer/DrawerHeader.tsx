import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { formatDate, formatNumber } from '../../../helper'
import { Avatar } from '../Avatar'
import { Username } from '../Username'

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

const Header = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   position: relative;
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
      top: -85px;
   }
`

const ViewsContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 9px;
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

const Posts = styled.a`
   font-size: 15px;
   color: #007aff;
`

const Dot = styled.div`
   width: 2px;
   height: 2px;
   background-color: #c4c4c4;
   border-radius: 50%;
`

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
