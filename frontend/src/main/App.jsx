import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import Logo from '../components/Logo'
import Main from '../components/Main'
import Menu from '../components/Menu'


import Styles from './GlobalStyles'

export default props =>
   <>
      <div className="app">
         <Logo  icon="globe"/>
         <Main 
         title="Global Contratações" 
         subtitle="Candidatos a vaga de frontend" />
         <Menu/>
         
      </div>
      <Styles/>
  </>
