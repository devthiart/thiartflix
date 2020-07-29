import React from 'react';
import Logo from '../../assets/img/Logo.png';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import './Menu.css';

//Button as='a' faz o botão (que é do tipo Button) se comportar como um componente 'a'.

function Menu() {
    return(
        <header>
            <nav className='Menu'>
                <a href='/'>
                    <img className='Logo' src={Logo} alt='Logo Thiartflix'></img>
                </a>
                <Button as='a' className='ButtonLink' href='/'>
                    Novo Vídeo
                </Button>
            </nav>
        </header>
    );
}

export default Menu;