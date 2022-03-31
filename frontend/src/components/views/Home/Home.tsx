import React from 'react'
import styled from 'styled-components'
import { Map } from '../../Map'

const Container = styled.div`
   width: 100%;
   height: 100%;
   background-color: yellow;
`

const Home: React.FC = () => (
<Container>
{/* sup fuckers */}
<Map />
</Container>
)

export default Home
