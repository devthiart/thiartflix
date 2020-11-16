import styled from 'styled-components';

export const BannerMainContainer = styled.section`
    /**vh é a medida (em %) pelo tamanho da tela (viewport height) */
    height: 80vh;
    color: var(--white);
    /**Pego a imagem com JS que é recebida pela tag como propriedade. */
    background-image: ${({ backgroundImage }) => `url(${ backgroundImage })`};
    background-size: cover;
    background-position: center;

    @media(max-width: 800px){
        height: auto;
        min-width: 50vh;
    }
`;

export const ContentAreaContainer = styled.section`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    margin-left: 5%;
    margin-right: 5%;

    @media(max-width: 800px) {
        padding-top: 100px;
        flex-direction: column;
    }
`;

ContentAreaContainer.Item = styled.div`
    margin-bottom: 50px;
    width: 50%;

    @media(max-width: 800px) {
        width: 100%;
    }
`;
ContentAreaContainer.Title = styled.h2`
    font-size: 40px;
    font-weight: 300;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 32px;

    @media(max-width: 800px) {
        font-size: 32px;
        text-align: center;
    }
`;

ContentAreaContainer.Description = styled.p`
    @media(max-width: 800px) {
        display: none;
    }
`;

export const WatchButton = styled.button`
    background-color: var(--white);
    border: 0;
    border-radius: 4px;
    color: var(--black);
    /**Faz o cursor do mouse virar uma mão quando o mouse estiver sobre o elemento. */
    cursor: pointer;
    display: none;
    font-size: 16px;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
    outline: none;
    padding: 16px 24px;
    @media(max-width: 800px){
        display: block;
    }
`;

export const VideoContainer = styled.div`
    padding-top: 56.25%;
    position: relative;
    width: 100%;

    @media(max-width: 800px){
        display: none;
    }
`;

export const ResponsiveIframe = styled.iframe`
    bottom: 0;
    height: 100%;
    left: 0;
    position: relative;
    right: 0;
    top: 0;
    width: 100%;
`;