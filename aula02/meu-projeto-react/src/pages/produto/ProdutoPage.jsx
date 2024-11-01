import { useEffect, useState } from "react";

export function ProdutoPage() {
  // useEffet - toma conta do que aparece na tela quando fazemos uma requisição
  // "Escuta o que acontece no componente e renderiza a página de acordo com o evento"
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Executa em toda renderização");
  });

  useEffect(()=>{
    console.log('Executa apenas uma vez, quando o componente é montado, ou seja, carregado');
    
  },[]);

  useEffect(()=>{
    console.log('Executa sempre que o contador muda');
    
  }, [contador])

  return (
    <>
      <h1>Produtos!!! yay</h1>
      <button onClick={() => console.log("clicou")}>clicar</button>
      <button onClick={() => setContador(contador +1)}>contar</button>
      {contador}
    </>
  );
}
