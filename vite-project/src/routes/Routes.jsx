import { Routes, Route } from "react-router-dom";
import { Contador } from "../pages/contador/Contador";
import { ListaDePokemons } from "../pages/listaDePokemons/listaDePokemons";
import { HomePage } from "../pages/homePage/HomePage";
import { ListaDeRacasDnd } from "../pages/racasDnD/racasDnd";
export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contador" element={<Contador />} />
      <Route path="/lista-de-pokemon" element={<ListaDePokemons />} />
      <Route path="/dnd-stuff" element={<ListaDeRacasDnd />} />
    </Routes>
  );
}
