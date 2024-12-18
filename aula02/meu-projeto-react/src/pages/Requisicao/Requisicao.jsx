import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Requisicao = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

     // Função para buscar os produtos
     const getProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {

   getProducts();
  }, []);

  loading &&  <p>Loading...</p>;
  error && <p>Error: {error}</p>;

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Preço: ${product.price}</p>
            <img src={product.image} alt={product.title} width={100} />
          </li>
        ))}
      </ul>
    </div>
  );
};


