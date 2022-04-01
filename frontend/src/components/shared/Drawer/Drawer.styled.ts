import { animated } from 'react-spring'
import styled from 'styled-components'

export const Container = styled(animated.div)`
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

export const Body = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 24px;
   height: 100%;
   width: 100%;
   overflow: auto;
   padding-top: 24px;
`

export const Footer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   bottom: 0;
   height: 92px;
   width: 100%;
   background-color: #27272a;
`
