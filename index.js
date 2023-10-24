const getResponse = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/region/europe')
        const data = await response.json()

        const filteredData = data
        .slice(0, 25)
        .filter(country => country.subregion === 'Central Europe');
        
        const datas = filteredData.map(({ name, status, subregion, population, languages, capital }) => ({
            name,
            status,
            subregion,
            population,
            language: languages,
            capital
        }));
        console.log(datas)
    } catch (error) {
        console.log('error fetching data', error);
    }
}

getResponse()