// https://api.openbrewerydb.org/breweries

const getBrewery = async () => {
    try {
        const response = await fetch('https://api.openbrewerydb.org/breweries')
        const data = await response.json()
        
        const states = ['Colorado', 'Washington', 'California', 'Indiana']

        const provinceByState = states.reduce((result, state) => {
            result[state] = data
            .filter(province => province.state === state)
            .map(({ name, city, street, postal_code, website_url }) => ({
                name,
                city,
                street,
                postal_code,
                website_url
            }))
            return result
        }, {})
        console.log(provinceByState)
    } catch (error) {
        console.log('error fetching data', error);
    }
}

getBrewery()