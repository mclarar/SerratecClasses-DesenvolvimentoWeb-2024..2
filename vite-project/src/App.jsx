import "./App.css";
import { useState } from "react";
import {ListaDePokemons} from '../src/pages/listaDePokemons/listaDePokemons'

function App() {
  const [contador, setContador] = useState(0);

  function contar() {
    setContador(contador + 1);
  }

  return (
    <>
      {/* <h1>Hello World!</h1>
      <button onClick={contar}>clique aqui</button>
      {contador === 1
        ? `você clicou ${contador} vez`
        : `você clicou ${contador} vezes`} */}
        <ListaDePokemons/>
    </>
  );
}

export default App;
