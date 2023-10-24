async function getCountriesBySubregions() {
  const response = await fetch("https://restcountries.com/v3.1/region/europe");
  const countries = await response.json();
  const first25Countries = countries.slice(0, 25);

  const countriesWithDataFiltered = first25Countries.map(
    ({name, status, subregion, population, languages, capital}) => ({
      name, status, subregion, population, languages, capital
    })
  );
  
  const subregionsObject = {
    "centralEurope": "Central Europe",
    "southEast": "Southeast Europe",
    "northernEurope": "Northern Europe"
  };

  // Contain the value or name of subregions 
  const subregionsArray = Object.values(subregionsObject);

  // Initialize the array
  const result = {};
  Object.keys(subregionsObject).forEach((key) => {
    result[key] = [];
  })

  countriesWithDataFiltered.forEach((country) => {
    if (subregionsArray.includes(country.subregion)) {
      const key = Object.keys(subregionsObject).find(key => subregionsObject[key] === country.subregion);
      result[key].push(country);
    }
  })

  console.log(result);
}
  
getCountriesBySubregions();