import styled from 'styled-components';

//Além de poder utilizar as tags padrões do HTML, eu posso utilizar as tags que eu criei do React.
export const Button = styled.button`
    border: 1px solid var(--white);
    border-radius: 4px;
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    padding: 16px 24px;
    text-decoration: none;
    transition: opacity .3s;
    &:hover,
    &:focus {
        opacity: .5;
    }

    @media(max-width: 800px) {
        background-color: var(--primary);
        border: 0;
        border-radius: 0;
        bottom: 0;
        color: var(--white);
        left: 0;
        outline: 0;
        position: fixed;
        text-align: center;
    }
`;