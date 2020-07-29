import React from 'react';

function ButtonLink(props) {
    //Props é o que foi passado para a nossa tag JSX, assim como funciona o HTML.
    //props => {
    //    children: 'São as tags filhas da tag recebida.', 
    //    className: 'O que passamos como propriedade no className', 
    //    href: 'O que passamos como propriedade no href'
    //}

    return(
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;