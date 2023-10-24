const getRegion = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/region/europe')
    const result = await response.json()
    const data = result
      .slice(0, 25)
      .filter(item => item.subregion === 'Central Europe')
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
const getRegion2 = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/region/europe')
    const result = await response.json()
    const data = result.slice(0, 25).map(item => {
      const { name, status, subregion, population, languages, capital } = item
      return {
        name,
        status,
        subregion,
        population,
        languages,
        capital,
      }
    })
    const formattedData = {
      centralEurope: [],
      southEast: [],
      northernEurope: [],
    }

    // Filter dan kelompokkan negara berdasarkan subregion
    data.forEach(item => {
      if (item.subregion === 'Central Europe') {
        formattedData.centralEurope.push(item)
      } else if (item.subregion === 'Southeast Europe') {
        formattedData.southEast.push(item)
      } else if (item.subregion === 'Northern Europe') {
        formattedData.northernEurope.push(item)
      }
    })
    console.log(formattedData)
  } catch (error) {
    console.log(error)
  }
}
getRegion2()
