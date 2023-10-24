const getResponse = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/region/europe')
        const data = await response.json()

        let datas = []
        for(let i = 0; i < 25; i++) {
            let country = {}
            if(data[i].subregion === 'Central Europe') {
                country.name = data[i].name
                country.status = data[i].status
                country.subregion = data[i].subregion
                country.population = data[i].population
                country.language = data[i].languages
                country.capital = data[i].capital
                datas.push(country)
            }
        }
        console.log(datas)
    } catch (error) {
        console.log('error fetching data', error)
    }
}

console.log(getResponse())