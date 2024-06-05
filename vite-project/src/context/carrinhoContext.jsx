import { useState } from "react";
import { createContext } from "react";

const cartContext = createContext();

const CartProvider = (props) => {
  const [cartItens, setCartItens] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);

  function adicionarItens(produto) {
    !cartItens.includes(produto) && setCartItens([...cartItens, produto]);
  }

  function removerItens(id) {
    for (let i = 0; i < cartItens.length; i++) {
      if (cartItens[i].id === id) {
        cartItens.splice(i, 1);
      }
    }
    setCartItens([...cartItens]);
  }

  function limparCarrinho() {
    setCartItens([]);
  }

  function calcularValorTotal() {
    let total = 0;
    valor.forEach((item) => {
      total += item.quantidade * item.valorUnitario;
    });
    setValorTotal(total);
  }

  return (
    <cartContext.Provider
      value={{
        cartItens,
        adicionarItens,
        removerItens,
        limparCarrinho,
        calcularValorTotal,
      }}
    >
        {props.children}
    </cartContext.Provider>
  );
};

export {cartContext, CartProvider}
