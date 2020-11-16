/*Conteúdo CSS do App.js somente com exemplos de como funcionará.*/

import styled from 'styled-components';

//Utilizanso o styled conseguimos colocar estilos dentro de uma tag que criamos.
//Estamos criando a tag AppWrapper que se comporta como uma div e tem os estilos definidos.
const AppWrapper = styled.div`
    background: var(--grayDark);

    padding-top: 94px;

    @media (max-width: 800px) {
        padding-top: 40px;
    }
`;

function App() {
    //Exemplo de como funcionará o AppWrapper.
    <AppWrapper>
        <TagsDoApp>
        </TagsDoApp>
    </AppWrapper>
}

export default App;