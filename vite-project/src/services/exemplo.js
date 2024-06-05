import axios from "axios";

export const api = axios.create({
  baseURL: "http://www.localhost:8080/ecommerce/",
});
produto = {
nome: '',
valor: '',
quantidade: 0
}

export const criarProduto = () => {
  const url = "/post-produto";
  return api.post(url, {produto}, {
    headers: {
      "Access-Control-Allow-Origin*": "",
      Authorization: "Bearer + token",
    },
  });
};

export const atualizarProduto = () => {
    const url = "/put-produto";
    return api.put(url, {produto}, {
      headers: {
        "Access-Control-Allow-Origin*": "",
        Authorization: "Bearer + token",
      },
    });
  };
