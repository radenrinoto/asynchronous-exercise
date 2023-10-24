const getCountries = async () => {
  try {
    const response = await fetch(
      'https://restcountries.com/v3.1/region/europe'
    );
    const countries = await response.json();
    let formattedCountries = [];
    for (let i = 0; i < 25; i++) {
      let country = {};
      if (countries[i].subregion === 'Central Europe') {
        country.name = countries[i].name;
        country.status = countries[i].status;
        country.subregion = countries[i].subregion;
        country.population = countries[i].population;
        country.languages = countries[i].languages;
        country.capital = countries[i].capital;
        formattedCountries.push(country);
      }
    }
    console.log(formattedCountries);
  } catch (error) {
    console.error('Error: ', error);
  }
};

getCountries();
