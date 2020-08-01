import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

//<></> = É o mesmo que utilizar a tag <React.Fragment> do React, porém
//utilizando esta sintaxe não conseguimos incluir keys (<tag key="valorKey">).

//Posso pegar o objeto props diretamente e acessar o que eu preciso
//ou utilizando {} eu pego a propriedade ou método específico que desejo utilizar.
//function PageDefault(props){
function PageDefault({ children }) {
    return (
        <>
            <Menu />
                <Main>
                    { /*props.children */ }
                    { children }
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault;