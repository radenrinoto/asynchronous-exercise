const URL = "https://pokeapi.co/api/v2";

let pokemonResult;

const callApi = async (params, method = "GET", body) => {
  try {
    const res = await fetch(`${URL}${params}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getListPokemon = async () => {
  const pokemons = await callApi(`/pokemon`);
  return pokemons;
};

const getDetailPokemon = async (pokemonId) => {
  const { id, abilities, sprites, stats, types } = await callApi(`/pokemon/${pokemonId}`, "GET");

  const pokemon = {
    pokemonId: id,
    abilitiesPokemon: [],
    typesPokemon: [],
    statsPokemon: stats,
    imagePokemon: sprites.other.dream_world.front_default,
  };

  abilities.map((item) => {
    pokemon.abilitiesPokemon.push(item.ability.name);
  });

  types.map((item) => {
    pokemon.typesPokemon.push(item.types.type.name);
  });

  return pokemon;
};

getDetailPokemon(1);
