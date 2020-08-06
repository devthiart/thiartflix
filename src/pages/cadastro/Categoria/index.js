import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    };

    const [categorias, setCategorias] = useState([]);
    // A função useState retorna um array em que na primeira posição está o nome do
    // conteúdo, e na segunda esta uma função que altera o nome do conteúdo.
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        // '[chave]: valor' é a maneira do JS atribuir um valor a um certo elemento (id ou chave).
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function handleChange(infosDoEvento) {
        // Pega o atributo "name" do HTML e o valor da tag.
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value,
        );

        /*
        //Abrimos a variável infosDoEvento.target e pegamos somente o 'getAttributes' e o 'value'.
        const { getAttributes, value } = infosDoEvento.target;
        //Com as informações que pegamos acima, utilizamos estas infos no método setValue.
        setValue(
            getAttributes('name'),
            value
        );
        */
    }

    //Utilizamos useEffect quando queremos que algo aconteça em determinado momento.
    //Ele recebe dois parametros, o que deve fazer e quando fazer. Quando passamos o 
    //array vazio, ele executa quando a página é carregada.
    useEffect(() => {
        console.log('use effect funcionando.');
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
    }, []);

    return (
        <>
            <PageDefault>
                <h1>
                Cadastro de Categoria:
                {values.nome}
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
                        setValues(valoresIniciais);
                    }
                }
                >
                    <FormField
                        label="Nome da Categoria"
                        type="text"
                        name="nome"
                        value={values.nome}
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
                            <li key={`${categoria.nome}`}>
                                {categoria.nome}
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
