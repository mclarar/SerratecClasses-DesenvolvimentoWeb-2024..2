import { useContext } from "react";
import { cartContext } from "../../context/carrinhoContext";

export function CarrinhoDeCompras() {
  const { adicionarItens, removerItens, limparCarrinho, calcularValorTotal } =
    useContext(cartContext);

  return (
    <>
    <button onClick={adicionarItens}></button>
      <h1>Carrinho</h1>
    </>
  );
}
