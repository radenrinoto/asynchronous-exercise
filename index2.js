async function fetchEuropeData() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/region/europe");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();

         // Initialize the groupedData object with subregion names as keys
         const groupedData = {
            "Central Europe": [],
            "Eastern Europe": [],
            "Western Europe": [],
            "Northern Europe": [],
        };

        jsonData //filter Country into several region
            .filter(country => ["Central Europe", "Eastern Europe", "Western Europe", "Northern Europe"].includes(country.subregion)) // filter that includes sub region
            .forEach(country => {
                //the subregion is the country.subregion
                const subregion = country.subregion;

                //filter length < 40
                if (groupedData[subregion].length < 40) {

                    //push the data from response and push into new array based on subregion
                    groupedData[subregion].push({
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
                    });
                }
            });

        return groupedData;
    } catch (error) {
        console.error("Error:", error);
        throw error; // Rethrow the error for further handling if needed
    }
}

// Call the fetchEuropeData function directly
fetchEuropeData()
    .then(data => {
        console.log(JSON.stringify(data,null,2));
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
