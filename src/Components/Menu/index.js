import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import './Menu.css';

//Button as='a' faz o botão (que é do tipo Button) se comportar como um componente 'a'.

function Menu() {
    return(
        <header>
            <nav className='Menu'>
                <Link to='/'>
                    <img className='Logo' src={Logo} alt='Logo Thiartflix'></img>
                </Link>
                <Button as={ Link } className='ButtonLink' to='/cadastro/video'>
                    Novo Vídeo
                </Button>
            </nav>
        </header>
    );
}

export default Menu;