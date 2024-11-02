import { useState } from "react";
import { createContext } from "react";

const carrinhoContext = createContext();

const CarrinhoProvider = (props) => {
  const [itensCarrinho, setItensCarrinho] = useState(listaItensCarrinho);
  const [valorTotal, setValorTotal] = useState(0);

  function adicionarItens(novoItem) {
    const produtoExistente = itensCarrinho.find(
      (produto) => produto.id === novoProduto.id
    );

    var novosItens;

    if (produtoExistente) {
      novoItem = itensCarrinho.map((item) => {
        if (item.id === novoProduto.id) {
          return { ...item, quantidade: item.quantidade + 1 };
        }
        return item;
      });
    } else {
      novosItems = [...itensCarrinho, { ...novoProduto, quantidade: 1 }];
    }

    setItensCarrinho(novosItens);
  }

  function removerItem(id) {
    const novoItem = itensCarrinho.filter((item) => item.id === id);
    setItensCarrinho(novoItem);
  }

  function limparCarrinho() {
    setItensCarrinho([]);
  }

  function calcularValorTotal() {
    let total = 0;
    itensCarrinho.forEach((item) => {
      total += item.quantidade * item.preco;
    });

    setValorTotal(total);
  }

  return (
    <carrinhoContext.Provider
      value={{
        itensCarrinho,
        valorTotal,
        adicionarItens,
        removerItem,
        limparCarrinho,
        calcularValorTotal,
      }}
    >
     {props.children}   
    </carrinhoContext.Provider>
  );
};

export {carrinhoContext, CarrinhoProvider}
