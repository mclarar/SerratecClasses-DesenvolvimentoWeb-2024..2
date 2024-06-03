
import { useState } from "react"
import { Card } from "../../components/Card/Card";

export function ListaDePokemons() {
  const pokemons = [
    { id: 1, name: 'Charmander' },
    { id: 2, name: 'Bulbassauro' },
    { id: 3, name: 'Squirtle' },
  ]

  const [listaDepokemons, setListaDePokemons] = useState(pokemons);
  const [novoPokemon, setNovoPokemon] = useState('');

  function adicionarPokemons() {
    if (novoPokemon.trim() !== '') {
      const EntradaNovoPokemon = {
        id: listaDepokemons.length + 1,
        name: novoPokemon,
      };
      setListaDePokemons([...listaDepokemons, EntradaNovoPokemon]);
      setNovoPokemon('');
    }

  }


  return (
    <>
      <h1>meus pokemons favoritos</h1>

      <div>
        <ul>
          {listaDepokemons.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul>
        <input
          type="text"
          value={novoPokemon}
          onChange={(e) => setNovoPokemon(e.target.value)}
          placeholder="Adicionar novo pokemon"
        />
        <br />
        <br />
        <button onClick={adicionarPokemons}>Adicionar</button>

        <Card/>

      </div>
    </>
  )
}