const API = 'https://restcountries.com/v3.1/region/europe'

// const { data } = await getData()

async function getData(){
    const response = await fetch(`${API}`)
    const data = await response.json();
    const sliceData = data.slice(0, 25)
    const filteredData = sliceData.map(item => ({
        name: item.name,
        status: item.status,
        subregion: item.subregion, 
        population: item.population,
        languages: item.languages,
        capital: item.capital
    }))
    // console.log(filteredData)
    

    const filteredSubRegion = filteredData.filter(item => item.subregion === 'Central Europe')

    console.log(filteredSubRegion)
}

// getData()

