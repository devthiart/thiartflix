import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//BrouserRouter: Responsável por "empacotar" nossa aplicação para utilizar as rotas do react-router-dom.
//Switch: Responsável por verificar qual endereço o usuário está.
//Route: Responsável por armazenar os dados de que endereço vai para qual página (componente).
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import PaginaNaoExiste from './pages/Pagina404';

//Um pequeno exemplo de componente
// function CadastroVideo() {
//   return (
//     <div>
//       <h1>Página de Cadastro de Vídeo!</h1>
//     </div>
//   );
// }

//Deve ser renderizado por ultimo na tag Route, sem um path.
// const PaginaNaoExiste = () => (
//   <div>
//     <h1>Página não encontrada!</h1>
//     <h2>Erro 404</h2>
//   </div>
// )

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ Home } exact />
      <Route path='/cadastro/video' component={ CadastroVideo } />
      <Route path='/cadastro/categoria' component={ CadastroCategoria } />
      <Route component={ PaginaNaoExiste } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
