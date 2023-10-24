async function exercise2() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/region/europe")
    const allData = await response.json()

    const resultsData = allData.slice(0, 25)
    const centralEurope = resultsData.filter(dataOfCountry => dataOfCountry.subregion === 'Central Europe')
    const southEast = resultsData.filter(dataOfCountry => dataOfCountry.subregion === 'Southeast Europe')
    const northernEurope = resultsData.filter(dataOfCountry => dataOfCountry.subregion === 'Northern Europe')
    const data = {
      centralEurope: centralEurope.map(
        ({ name, status, subregion, population, languages, capital }) => ({
          name, status, subregion, population, languages, capital
        })
      ),
      southEast: southEast.map(
        ({ name, status, subregion, population, languages, capital }) => ({
          name, status, subregion, population, languages, capital
        })
      ),
      northernEurope: northernEurope.map(
        ({ name, status, subregion, population, languages, capital }) => ({
          name, status, subregion, population, languages, capital
        })
      )
    }
    console.log(data);
  } catch (error) {
    console.log('Error', error);
  }
}

exercise2()