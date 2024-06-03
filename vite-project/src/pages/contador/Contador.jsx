import { useState, useEffect } from "react";
import { Botao } from "../../components/Button/Button";

export function Contador() {
  const [contador, setContador] = useState(0);
  const [contadorB, setContadorB] = useState(0);

  function contar() {
    setContador(contador + 1);
  }

  //uso normal do useEffect
  useEffect(() => {
    console.log("roda a cada renderização");
  });

  //array de dependencias
  useEffect(() => {
    console.log("rosa só ao incrementar o contador");
  }, [contador]);

  //array de depencencia vazio
  useEffect(() => {
    console.log("renderizado apenas uma vez");
  }, []);

  useEffect(() => {
    console.log("renerizando");

    return () =>
      setTimeout(() => {
        //chama uma função depois de determinado tempo
        setContador(0), 2000;
      });
  }, []);

  return (
    <>
      <h1>Contador</h1>
      <Botao title={"botão"} valor={"clique aqui"} onClick={contar}></Botao>
      {contador === 1
        ? `você clicou ${contador} vez`
        : `você clicou ${contador} vezes`}
      <h1>Contador B</h1>

      <button onClick={() => setContadorB(() => contadorB + 1)}>
        clique aqui
      </button>
      {contadorB === 1
        ? `você clicou ${contadorB} vez`
        : `você clicou ${contadorB} vezes`}
    </>
  );
}
