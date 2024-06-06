import { Routes, Route } from "react-router-dom";
import { Contador } from "../pages/contador/Contador";
import { ListaDePokemons } from "../pages/listaDePokemons/listaDePokemons";
import { HomePage } from "../pages/homePage/HomePage";
import { ListaDeRacasDnd } from "../pages/racasDnD/racasDnd";
// import { obterPerfilUsuario } from "../uteis/localStorage/localStorage";
export function Rotas() {
  // const user = obterPerfilUsuario();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contador" element={<Contador />} />
      <Route path="/dnd-stuff" element={<ListaDeRacasDnd />} />
      <Route path="/lista-de-pokemon" element={<ListaDePokemons />} />

      {/* {user.perfil === "adm" && (
        <Route path="/lista-de-pokemon" element={<ListaDePokemons />} />
      )} */}
    </Routes>
  );
}
