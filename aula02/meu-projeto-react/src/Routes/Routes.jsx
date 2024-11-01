import { Routes, Route } from "react-router-dom";
import { ContatoPage } from "../pages/contato/ContatoPage";
import { Layout } from "../Layout/Layout";
import { ProdutoPage } from "../pages/produto/ProdutoPage";
import { NotFoundPage } from "../pages/notFound/NotFound";
import { Pokemons } from "../pages/pokemons/Pokemons";
import { Requisicao } from "../pages/Requisicao/Requisicao";

export function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* As rotas abaixo serão renderizadas dentro do Layout */}
          <Route index element={<ContatoPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="/pokemons" element={<Pokemons />} />
        </Route>
        <Route path="produtos" element={<ProdutoPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/requisicao" element={<Requisicao />} />
      </Routes>
    </>
  );
}
