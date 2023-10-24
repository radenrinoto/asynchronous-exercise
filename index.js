async function getCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/region/europe");
    const countries = await response.json();
    const first25Countries = countries.slice(0, 25);
    const centralEuropeCountries = first25Countries.filter(
      (country) => country.subregion == "Central Europe"
    );
    const result = centralEuropeCountries.map(
      ({name, status, subregion, population, languages, capital}) => ({
        name, status, subregion, population, languages, capital
      })
    );
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getCountries();