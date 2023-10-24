async function fetchEuropeData() {
    try {
        //fetch api
        const response = await fetch('https://restcountries.com/v3.1/region/europe')
        
        //check response
        if(!response.ok) {
            throw new Error(`HTTP Error ! . Status ${response.status}`)
        }

        // Mengambil Response JSON
        const jsonData = await response.json();

        // Filter Data Sub Region Central Europe , Slice Index dan Looping menggunakan Map untuk Response nya 
        const filteredData = jsonData.filter(country => country.subregion === "Central Europe").slice(0, 30).map(country => ({
            name: {
                common: country.name.common,
                official: country.name.official,
                nativeName: country.name.nativeName,
            },
            status: country.status,
            subregion: country.subregion,
            population: country.population,
            language: country.languages,
            capital: country.capital,
        }));

        return filteredData
    } catch (error) {
        console.log("Error" , error)
        throw error;
    }
}

fetchEuropeData()
    .then(europeData => {
        console.log(europeData);
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });



