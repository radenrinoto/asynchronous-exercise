const dataAPI = 'https://restcountries.com/v3.1/region/europe'

const exercise2 = async (pageSize) => {
    try {
        const API = await fetch(dataAPI)
        const result = await API.json()

        if (result.length < pageSize) {
            console.log(result);
        } else {
            const results = result.slice(0, pageSize) 
            const centralEurope = results.filter(item => item.subregion === 'Central Europe')
            const southEast = results.filter(item => item.subregion === 'Southeast Europe')
            const northernEurope = results.filter(item => item.subregion === 'Northern Europe')
            const dataFix = {
                centralEurope: centralEurope.map((central) => ({
                    name: central.name,
                    status: central.status,
                    subregion: central.subregion,
                    population: central.population,
                    languange: central.languange,
                    capital: central.capital,
                })),
                southEast: southEast.map((south) => ({
                    name: south.name,
                    status: south.status,
                    subregion: south.subregion,
                    population: south.population,
                    languange: south.languange,
                    capital: south.capital,
                })),
                northernEurope: northernEurope.map((northern) => ({
                    name: northern.name,
                    status: northern.status,
                    subregion: northern.subregion,
                    population: northern.population,
                    languange: northern.languange,
                    capital: northern.capital,
                }))
            }

            console.log(dataFix);
        }
    } catch (err) {
        console.log(err, 'Data Tidak Ditemukan');
    }
}

exercise2(25)
