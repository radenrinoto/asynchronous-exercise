const { fetchApiData } = require('./apiUtils');

async function fetchPokemonData() {
  try {
    const { results } = await fetchApiData('api2', 'pokemon?limit=25');

    const pokemonData = {};

    for (const pokemon of results) {
      const pokemonResponse = await fetchApiData(
        'api2',
        `pokemon/${pokemon.name}`
      );
      const pokemonDetails = pokemonResponse;

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
    const response = await fetchApiData('api2', `characteristic/${pokemonId}`);
    const data = response.descriptions[7].description;
    return data;
  } catch (error) {
    console.error(
      `Failed to fetch pokemon's characteristics: ${error.message}`
    );
  }
}

fetchPokemonData();
