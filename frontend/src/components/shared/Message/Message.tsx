import React, { useEffect } from 'react'
import moment from 'moment'
import { formatDate } from '../../../helper'
import { Avatar } from '../Avatar'
import {
   Container,
   InnerContainer,
   Header,
   MessageContent,
   Username,
   DatePosted,
} from './Message.styled'

type Props = {
   avatar: {
      emoji: string
      color: string
   }
   username: string
   date: Date
}

const Message: React.FC<Props> = ({ children, username, date, avatar }) => (
    <Container>
       <Avatar size={38} avatar={avatar} />
       <InnerContainer>
          <Header>
             <Username>@{username}</Username>
             <DatePosted>{formatDate(moment(date))}</DatePosted>
          </Header>
          <MessageContent>{children}</MessageContent>
       </InnerContainer>
    </Container>
 )

export default Message
