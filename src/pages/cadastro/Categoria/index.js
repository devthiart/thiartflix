import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
    const valoresIniciais = {
        titulo: '',
        descricao: '',
        cor: '',
    };

    const { values, handleChange, clearForm } = useForm(valoresIniciais);

    const [categorias, setCategorias] = useState([]);

    //Utilizamos useEffect quando queremos que algo aconteça em determinado momento.
    //Ele recebe dois parametros, o que deve fazer e quando fazer. Quando passamos o 
    //array vazio, ele executa quando a página é carregada.
    useEffect(() => {
        const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://thiartflix.herokuapp.com/categorias';
        fetch(URL)
            .then(async (respostaDoServidor) => {
                //Utilizamos await para esperar a resposta do servidor. 
                //Para utilizar await precisamos utilizar async acima.
                const resposta = await respostaDoServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            })
            .catch( respostaDoServidor =>
                <div>
                    <p>Não foi possível conectar ao servidor</p>
                </div>
            );
    }, []);

    return (
        <>
            <PageDefault>
                <h1>
                Cadastro de Categoria:
                {values.titulo}
              </h1>

                <form onSubmit={
                    // É boa prática colocar 'handle' nas funções de evento.
                    function handleSubmir(infosDoEvento) {
                        // Previne que o formulário execute a função padrão de recarregar a página.
                        infosDoEvento.preventDefault();

                        // '...categorias' são todos os dados que já estavam no array,
                        // para que o array não perca os dados que já foram setados,
                        // e passamos o dado do input para o array de categorias.
                        setCategorias([...categorias, values]);

                        // limpa o formulário.
                        clearForm(valoresIniciais);
                    }
                }
                >
                    <FormField
                        label="Nome da Categoria"
                        type="text"
                        name="titulo"
                        value={values.titulo}
                        onChange={handleChange}
                    />

                    <FormField
                        label="Descricao"
                        type="textarea"
                        name="descricao"
                        value={values.descricao}
                        onChange={handleChange}
                    />

                    <FormField
                        label="Cor"
                        type="color"
                        name="cor"
                        value={values.cor}
                        onChange={handleChange}
                    />

                    {/*
                    Refatorado para FormField.
                    <div>
                        <label>
                        Nome da Categoria:
                        <input
                            type="text"
                            name="nome"
                            //Também posso usar:
                            //value={values['nome']}
                            value={values.nome}
                            onChange={

                                //Refatorado para a função 'handlechange'.
                                //Esta função executa quando os dados do formulário são alterados.
                                //function funcaoHandleQuePrecisaParaAlterarInput(dadosRecebidosPeloInput) {
                                    //Pega o valor dos dados e altera a variável.
                                    //setValue('nome', dadosRecebidosPeloInput.target.value);
                                //}

                                handleChange
                            }
                        />
                        </label>

                        <label>
                        Descrição:
                        <textarea
                            type="text"
                            name="descricao"
                            value={values.descricao}
                            onChange={ handleChange }
                        />
                        </label>

                        <label>
                        Cor:
                        <input
                            type="color"
                            name="cor"
                            value={values.cor}
                            onChange={ handleChange }
                        />
                        </label>
                    </div>
                    */}

                    <Button>
                    Cadastrar
                    </Button>
                </form>

                {categorias.length === 0 && (
                    <div>
                        Carregando...
                    </div>
                )}

                <ul>
                    {
                        categorias.map((categoria) => (
                            <li key={`${categoria.titulo}`}>
                                {categoria.titulo}
                          </li>
                        ))
                    }
                </ul>

                <Link to="/">
                Ir para a home.
                </Link>
          </PageDefault>
      </>
    );
}

export default CadastroCategoria;
