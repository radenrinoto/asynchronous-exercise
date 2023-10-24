const API = 'https://restcountries.com/v3.1/region/europe'


async function getDataPhase2(){
    const response = await fetch(`${API}`)
    const data = await response.json();

    const sliceData = data.slice(0, 25)
    const KeyRegions = [
        'Central Europe',
        'Southeast Europe',
        'Northern Europe',
    ];
    
    const filteredData = sliceData.filter((country) => KeyRegions.includes(country.subregion))

    // console.log(filteredData)

    const filteredData2 = filteredData.map(({ name, status, subregion, population, languages, capital}) => ({
        name,
        status,
        subregion,
        population,
        languages,
        capital,
    }))
    // console.log(filteredData2)
    const countriesBySubRegion = {};
    filteredData2.forEach((country) => {
        if (!countriesBySubRegion[country.subregion]) {
            countriesBySubRegion[country.subregion] = [];
        }
        countriesBySubRegion[country.subregion].push(country);
    });
      console.log(countriesBySubRegion);
}






getDataPhase2()


  
