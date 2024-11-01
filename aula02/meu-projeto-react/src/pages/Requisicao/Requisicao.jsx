import { useEffect } from 'react';
import {api} from '../../services/api'

export function Requisicao(){

  
        //POST
        vaga = {
            nome: 'professor',
            local: 'Petrópolis',
            Remuneracao: 15.000
        }

        const postVaga = async ()=>{
            await api.post('/cadastrar-vaga', vaga ).then((response)=>{
                response.data
                console.log('cadastro realizado com sucesso');
                
            }).catch((error)=>{
                console.log(error);
                "Não foi possível realizar o cadastro"
                
            })
        }

    return(
 
        <>
        <h1>Tela de exemplo de requisição</h1>
        </>
    )
}