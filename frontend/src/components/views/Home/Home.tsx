import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Map } from '../../Map'
import { auth } from '../../routes'

const Container = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   flex-direction: column;
   gap: 10px;
   width: 100%;
   height: 100%;
   background-color: yellow;
   padding-top: 50vh;
`

const Home: React.FC = () => (
  <Container>
    sup fuckers 
    <Link to={auth.auth}>To Auth</Link> 
  </Container>
)

export default Home
