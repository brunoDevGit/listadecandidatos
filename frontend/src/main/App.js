import React from 'react'

import Logo from '../components/Logo'
import Main from '../components/Main'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { Container } from '../components/Main/styles'


export default props =>
   <Container>
      <div className="app">
         <Logo />
         <Menu />
         <Main />
         <Footer />
      </div>
   </Container>
