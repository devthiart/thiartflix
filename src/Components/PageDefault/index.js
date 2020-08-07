import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll }) => css`
        padding: ${ paddingAll };
    `}
`;

//<></> = É o mesmo que utilizar a tag <React.Fragment> do React, porém
//utilizando esta sintaxe não conseguimos incluir keys (<tag key="valorKey">).

//Posso pegar o objeto props diretamente e acessar o que eu preciso
//ou utilizando {} eu pego a propriedade ou método específico que desejo utilizar.
//function PageDefault(props){
function PageDefault({ children, paddingAll }) {
    return (
        <>
            <Menu />
                <Main paddingAll={paddingAll}>
                    { /*props.children */ }
                    { children }
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault;