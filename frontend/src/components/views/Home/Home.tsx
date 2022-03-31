import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Map } from '../../Map'
import { auth } from '../../routes'

const Container = styled.div`
   width: 100%;
   height: 100%;
   background-color: yellow;
   padding-top: 50vh;
`

const Home: React.FC = () => (

  <Container>
    sup fuckers 
    <Map />
    <Link to={auth.auth}>To Auth</Link> 
  </Container>
)

export default Home
