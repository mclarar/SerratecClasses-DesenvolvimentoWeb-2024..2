import React, { useState } from 'react';
import axios from 'axios';
 
export const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Estrutura do novo produto
    const newProduct = {
      title,
      price: parseFloat(price),
      description,
      category,
      image,
    };

    try {
      const response = await axios.post('https://fakestoreapi.com/products', newProduct);
      setMessage(`Produto adicionado com sucesso: ${response.data.title}`);
    } catch (error) {
      setMessage(`Erro ao adicionar produto: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Adicionar Novo Produto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Preço:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Categoria:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label>URL da Imagem:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Adicionar Produto</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};


