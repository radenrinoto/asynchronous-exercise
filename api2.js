async function fetchPokemonData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25');
    const data = await response.json();

    const pokemonData = {};

    for (const pokemon of data.results) {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonDetails = await pokemonResponse.json();

      const characteristics = await fetchCharacteristics(pokemonDetails.id);

      const formattedData = {
        characteristics: characteristics,
        abilities: pokemonDetails.abilities.map(({ ability }) => ability.name),
        type: pokemonDetails.types.map(({ type }) => type.name),
        weight: pokemonDetails.weight,
      };

      pokemonData[pokemonDetails.name] = formattedData;
    }

    console.log(pokemonData);
  } catch (error) {
    console.error(`Failed to fetch pokemons: ${error.message}`);
  }
}

async function fetchCharacteristics(pokemonId) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/characteristic/${pokemonId}/`
    );
    const data = await response.json();
    return data.descriptions[7].description;
  } catch (error) {
    console.error(
      `Failed to fetch pokemon's characteristics: ${error.message}`
    );
  }
}

fetchPokemonData();
