import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import Logo from '../components/Logo'
import Main from '../components/Main'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

import Styles from './GlobalStyles'

export default props =>
   <>
      <div className="app">
         <Logo />
         <Main 
         icon="plane" 
         title="Lista de Candidatos" 
         subtitle="Projeto Lista de candidatos" />
         <Menu/>
         <Footer/>
      </div>
      <Styles/>
  </>
