const getRegion = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/region/europe')
    const result = await response.json()
    const data = result
      .filter(item => item.subregion === 'Central Europe')
      .slice(0, 25)
      .map(val => {
        const { name, status, subregion, population, languages, capital } = val
        return {
          name,
          status,
          subregion,
          population,
          languages,
          capital,
        }
      })
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
getRegion()
