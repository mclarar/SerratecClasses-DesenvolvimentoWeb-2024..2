import { useEffect, useState } from "react";
import {api} from '../../services/api'

export function ProdutoPage() {
  // useEffet - toma conta do que aparece na tela quando fazemos uma requisição
  // "Escuta o que acontece no componente e renderiza a página de acordo com o evento"
  const [contador, setContador] = useState(0);

  // useEffect(() => {
  //   console.log("Executa em toda renderização");
  // });

  // useEffect(()=>{
  //   console.log('Executa apenas uma vez, quando o componente é montado, ou seja, carregado');
    
  // },[]);

  // useEffect(()=>{
  //   console.log('Executa sempre que o contador muda');
    
  // }, [contador])

  useEffect(()=>{
    getProduto();
}, [])

    //GET
    const getProduto = async () =>{
        api.get('/produto', {
        })
        .then((response)=>{
               console.log((response.data));
                
        }).catch((error)=>{
            console.log(error);
            
        })
    }


    let produto = {
      nome: 'Bola Quadrada',
      valor: 10.00,

  }

  //POST
  const saveProduto = async (produto) => {
      //o que veio do usuário será passado como parametro na chamada da função
      // no lugar do objeto podem ser passados tambem as variáveis
        
      try {
         await api.post('produto', produto)
         alert('Produto cadastrado com sucesso!')
      } catch (error) {
         console.log(error)
         alert(
            error.response.data.message + ' ' + 
            error.response.data.details
         )
      }
   }
   

   //UPDATE
   const updateProduto = async (produto) => {
      try {
         await api.put('produto', produto)
         alert('Produto atualizado com sucesso!')
      } catch (error) {
         console.log(error)
         alert(
            error.response.data.message + ' ' + 
            error.response.data.details
         )
      }
   }



  return (
    <>
      <h1>Produtos!!! yay</h1>
      <button onClick={() => console.log("clicou")}>clicar</button>
      <button onClick={() => setContador(contador +1)}>contar</button>
      {contador}
    </>
  );
}
