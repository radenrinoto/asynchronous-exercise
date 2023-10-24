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
    const result = {};
    
    filteredData2.forEach((country) => {
        // console.log(country)
        
        if (!result[country.subregion]) {
            
            result[country.subregion] = [];
        }
        result[country.subregion].push(country);
    });
    console.log(result);
}






getDataPhase2()


  
