import React from 'react';
import { Container } from './styles';
import logo from '../../assets/imgs/logo193.png'


export default props =>
    <Container>
        <aside className="logo">
            <a href="" className="logo">
                <img src={logo} alt="logo" />
            </a>
        </aside>
    </Container>
