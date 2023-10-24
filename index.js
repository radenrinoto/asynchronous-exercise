async function getApi() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/region/europe/');
        const data = await response.json();

        const slicedData = data.slice(0, 25);

        const filterData = slicedData.filter(country => country.subregion === "Central Europe");

        const formatData = filterData.map(el => ({
            name: {
                common: el.name.common,
                official: el.name.official,
                nativeName: el.name.nativeName
            },
            status: el.status,
            subregion: el.subregion,
            population: el.population,
            language: el.languages,
            capital: el.capital[0]
        }));

        console.log(formatData);
    } catch (error) {
        console.log(error);
    }
}

// getApi();


async function getApiPhase2() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/region/europe/');
        const data = await response.json();

        const obj = {};

        data.map(country => {
            const { subregion, name, population, capital, languages, status } = country;
            const entry = { name, status, subregion, population, languages, capital };

            if (!obj[subregion]) {
                obj[subregion] = [];
            }
            obj[subregion].push(entry);
        });

        console.log(obj);

    } catch (error) {
        console.log(error);
    }
}

getApiPhase2();
