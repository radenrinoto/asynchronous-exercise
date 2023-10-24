const getPokemon = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const { results } = await response.json()
    const sliceData = results.slice(0, 5)
    console.log(sliceData)
  } catch (error) {
    console.log(error)
  }
}
getPokemon()
