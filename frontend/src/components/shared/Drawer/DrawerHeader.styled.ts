import styled from 'styled-components'

export const Header = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   position: relative;
   gap: 11px;
   width: 100%;
   padding: 40px 32px;

   border-bottom: 1px solid rgba(102, 102, 110, 0.2);
   a {
      font-size: 15px;
      text-decoration: none;
      font-weight: 600;
   }

   & > div:first-child {
      position: absolute;
      top: -55px;
   }


   .avatar {
    z-index: 1;
    pointer-events: none;
  }
`

export const ViewsContainer = styled.div`
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

export const Views = styled.p``

export const PostDate = styled.p`
   position: absolute;
   right: 0;
`

export const Post = styled.h1`
   font-size: 24px;
   line-height: 28.64px;
   margin-top: 11px;
`

export const Posts = styled.a`
   font-size: 15px;
   color: #007aff;
`

export const Dot = styled.div`
   width: 2px;
   height: 2px;
   background-color: #c4c4c4;
   border-radius: 50%;
`
