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
        api.get('/produto',{
          headers: {
            'Access-Control-Allow-Origin': '',
          }
        })
        .then((response)=>{
               console.log((response.data));
                
        }).catch((error)=>{
            console.log(error);
            
        })
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
