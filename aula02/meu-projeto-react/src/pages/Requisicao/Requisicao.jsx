import { useEffect } from 'react';
import {api} from '../../services/api'

export function Requisicao(){

    useEffect(()=>{
        getVagas();
    }, [])

        //GET
        const getVagas = async () =>{
            api.get('/vaga')
            .then((response)=>{
                   console.log((response.data));
                    
            }).catch((error)=>{
                console.log(error);
                
            })
        }

        //POST
        vaga = {
            nome: 'professor',
            local: 'Petrópolis',
            Remuneracao: 15.000
        }

        const postVaga = async =()=>{
            api.post('/cadastrar-vaga', vaga ).then((response)=>{
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