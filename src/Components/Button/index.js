import styled from 'styled-components';
//import { Link } from 'react-router-dom';

//Colocamos o CSS no botão atravéz do módulo 'styled-components'.
//Para estilizar o Link do react-router-dom, precisamos passa-lo como parâmetro.
//const Button = styled(Link)`
const Button = styled.button`
    background-color: var(--blackBackground);
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export default Button;