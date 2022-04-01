import { animated } from 'react-spring'
import styled from 'styled-components'

const StyledBottomSheet = styled(animated.div)`
   display: flex;
   align-items: center;
   flex-direction: column;

   height: 50%;

   width: 100%;

   background-color: #1c1c1e;
   position: absolute;
   z-index: 2;

   bottom: 0;
`

export default StyledBottomSheet
