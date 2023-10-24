const getCentralEuropeanCountries = async () => {
  try {
    const response = await fetch(
      'https://restcountries.com/v3.1/region/europe'
    );
    const countries = await response.json();
    const formattedCountries = countries
      .slice(0, 25)
      .filter((country) => country.subregion === 'Central Europe')
      .map(({ name, status, subregion, population, languages, capital }) => ({
        name,
        status,
        subregion,
        population,
        languages,
        capital,
      }));
    console.log(formattedCountries);
  } catch (error) {
    console.error(`Failed to fetch countries: ${error.message}`);
  }
};

getCentralEuropeanCountries();
