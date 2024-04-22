import axios from "axios";


export const servDelete = async (url: string) => {
    var mensagem;

    await axios.delete(url)
        .then((response) => { 
            mensagem =  "usuário deletado";
        }).catch((err) => { 
                mensagem = "erro ao deletar o usuário";
        });

    // Retornar a mensagem de sucesso ou erro
    return mensagem;
}