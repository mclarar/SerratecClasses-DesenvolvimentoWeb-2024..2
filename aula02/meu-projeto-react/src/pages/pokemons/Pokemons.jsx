import { useEffect, useState } from "react";
import { Input } from "../../components/Input/Input";
import { api } from "../../services/api";

export function Pokemons() {
  const [pokemon, setPokemon] = useState("");
  const [listaPokemons, setListaPokemons] = useState([]);
  const [fotoPokemon, setFotoPokemon] = useState("");

  useEffect(() => {
   getPokemon();
  }, [pokemon]);

  const getPokemon = async () => {
    api
      .get(`/pokemon/${pokemon}`)
      .then((response) => {
        setFotoPokemon(response.data.sprites.front_default);
        setListaPokemons([...listaPokemons, fotoPokemon]);
       
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("chegou no finally");
      })
  };

  return (
    <>
      <h1>pokemons</h1>
      <Input
        type={"text"}
        placeholder={"Digite seu pokemon"}
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
      />
      <button onClick={()=> getPokemon()}>Adcionar pokemon</button>
      <ul>
        {listaPokemons.map((fotoPokemon, index) => (
          <li key={index}>
            <img src={fotoPokemon} alt="fotoPokemon" />
          </li>
        ))}
      </ul>
    </>
  );
}
