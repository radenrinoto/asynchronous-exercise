const FilteredData = (data, region, max, min) => {
  region = region.toLowerCase()
  const res = data
    .slice(Number(min), Number(max))
    .filter(val => val.region.toLowerCase() === region)
  return res
}
const ResultData = data => {
  return data.map(({ name, capital, region, subregion, continents }) => {
    return {
      name,
      capital,
      region,
      subregion,
      continents,
    }
  })
}
const getLang = async ({ region, max, min }) => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/lang/spanish')
    const result = await response.json()
    const filterByRegion = FilteredData(result, region, max, min)
    const finalResults = ResultData(filterByRegion)
    console.log(finalResults)
  } catch (error) {
    console.log(error)
  }
}
getLang({ region: 'americas', max: 3, min: 0 })
