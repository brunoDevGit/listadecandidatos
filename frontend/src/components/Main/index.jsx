import React from 'react'
import Header from '../Header'
import { Container } from './styles'

export default props =>
    <>
    
        <Container>
        <Header {...props} />
            <main className="content">
                <ul>
                <li>conteudo conteudo</li>
                <li>conteudo conteudo</li>
                <li>conteudo conteudo</li>
                <li>conteudo conteudo</li>
                <li>conteudo conteudo</li>
                <li>conteudo conteudo</li>
                </ul>
        </main>
        </Container>
    </>