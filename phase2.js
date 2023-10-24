const getEuropeanCountriesBySubRegion = async () => {
  try {
    const response = await fetch(
      'https://restcountries.com/v3.1/region/europe'
    );
    const countries = await response.json();
    const subRegions = [
      'Central Europe',
      'Southeast Europe',
      'Northern Europe',
    ];
    const formattedCountries = countries
      .slice(0, 25)
      .filter((country) => subRegions.includes(country.subregion))
      .map(({ name, status, subregion, population, languages, capital }) => ({
        name,
        status,
        subregion,
        population,
        languages,
        capital,
      }));
    const countriesBySubRegion = {};
    formattedCountries.map((country) => {
      if (!countriesBySubRegion[country.subregion]) {
        countriesBySubRegion[country.subregion] = [];
      }
      countriesBySubRegion[country.subregion].push(country);
    });
    console.log(countriesBySubRegion);
  } catch (error) {
    console.error(`Failed to fetch countries: ${error.message}`);
  }
};

getEuropeanCountriesBySubRegion();
