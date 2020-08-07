import { useState } from 'react';

export function useForm(valoresIniciais) {
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

    function clearForm() {
        setValues(valoresIniciais);
    }

    return {
        values,
        handleChange,
        clearForm
    };
}

export default useForm;