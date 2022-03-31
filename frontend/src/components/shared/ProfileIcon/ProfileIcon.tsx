import React from 'react'
import styled from 'styled-components'

type Props = {
   color: string
   size?: string
   fontSize?: string
   scale?: number
}

type ContainerProps = {
   scale: number
   size: string
}

type InnerContainerProps = {
   color: string
   fontSize: string
}

const Container = styled.div<ContainerProps>`
   display: flex;
   justify-content: center;
   align-items: center;
   width: ${({ size }) => size};
   height: ${({ size }) => size};

   border: 2.5px solid white;
   border-radius: 50%;

   transform: scale(${({ scale }) => scale});
`

const InnerContainer = styled.div<InnerContainerProps>`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   border: 1px solid rgba(0, 0, 0, 0.03);
   border-radius: 50%;
   font-size: ${({ fontSize }) => fontSize};
   background-color: ${({ color }) => color};
`

const ProfileIcon: React.FC<Props> = ({
   children,
   color,
   scale = 1,
   size = '80px',
   fontSize = '50px',
}) => (
   <Container scale={scale} size={size}>
      <InnerContainer fontSize={fontSize} color={color}>
         {children}
      </InnerContainer>
   </Container>
)

export default ProfileIcon
