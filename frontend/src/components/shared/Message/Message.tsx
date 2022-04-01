import React from 'react'
import moment from 'moment'
import { formatDate } from '../../../helper'
import { ProfileIcon } from '../ProfileIcon'
import {
   Container,
   InnerContainer,
   Header,
   MessageContent,
   Username,
   DatePosted,
} from './Message.styled'

type Props = {
   color: string
   pfp: string
   username: string
   date: Date
}

const Message: React.FC<Props> = ({ children, color, pfp, username, date }) => (
   <Container>
      <ProfileIcon size="38px" fontSize="21px" color={color}>
         {pfp}
      </ProfileIcon>
      <InnerContainer>
         <Header>
            <Username>{username}</Username>
            <DatePosted>{formatDate(moment(date))}</DatePosted>
         </Header>
         <MessageContent>{children}</MessageContent>
      </InnerContainer>
   </Container>
)

export default Message
