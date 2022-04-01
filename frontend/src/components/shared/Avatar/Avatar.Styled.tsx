import styled from 'styled-components'

type ContainerProps = {
   scale: number
   size: number
}

export const Container = styled.div<ContainerProps>`
   display: flex;
   justify-content: center;
   align-items: center;
   width: ${({ size }) => size}px;
   height: ${({ size }) => size}px;
   min-width: ${({ size }) => size}px;
   min-height: ${({ size }) => size}px;

   border: 2.5px solid white;
   border-radius: 50%;

   transform: scale(${({ scale }) => scale});
   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
`

type InnerContainerProps = {
   color: string
   size: number
}

export const InnerContainer = styled.div<InnerContainerProps>`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 100%;
   border-radius: 50%;

   background-color: ${({ color }) => color};
   box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);

   font-size: ${({ size }) => size * 0.65}px;
`
