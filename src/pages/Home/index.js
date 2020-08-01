import React from 'react';
//Como a pasta já possui um arquivo index.js, ele puxa este arquivo somente passando o diretório.
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carrousel from '../../components/Carousel';

import Dados from '../../data/dados_iniciais.json';

function Home() {
  return (
    <>
      <PageDefault>
      <BannerMain videoTitle={Dados.categorias[0].videos[0].titulo} url={Dados.categorias[0].videos[0].url} />

      <Carrousel ignoreFirstVideo category={Dados.categorias[0]} />

      <Carrousel category={Dados.categorias[1]} />

      <Carrousel category={Dados.categorias[2]} />

      <Carrousel category={Dados.categorias[3]} />

      <Carrousel category={Dados.categorias[4]} />

      <Carrousel category={Dados.categorias[5]} />
      </PageDefault>
    </>
  );
}

export default Home;
