import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoDoVideo) {

    //method: O método de requisição (POST: Colocar/ GET: Pegar)
    //headers: Explica o tipo de conteúdo que estamos enviando. No caso estamos enviando JSON.
    //body: Conteúdo em sí, convertido para texto pois só conseguimos passar texto pela rede.
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(objetoDoVideo),
    })
        .then(async (respostaDoServidor) => {
        
            if(respostaDoServidor.ok){
                const resposta = await respostaDoServidor.json();
                return resposta;
            }

            throw new Error('Não foi possível cadastrar os dados')
        });
}

export default {
    create,
};