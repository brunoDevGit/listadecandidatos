import React from 'react'
import Header from '../Header'
import { Container } from './styles'

export default props =>
    <>
        <Container>
            <Header />
            <main className="content">
                Conteudo
        </main>
        </Container>
    </>