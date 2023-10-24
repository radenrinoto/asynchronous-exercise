const API_URL = "https://restcountries.com/v3.1/region/europe";

const asyncFunction = async () => {
  try {
    const response = await fetch(API_URL);
    const respJson = await response.json();
    const result = respJson
      .slice(0, 25)
      .filter((val) => {
        return val.subregion === "Central Europe";
      })
      .map(({ name, status, subregion, population, languages, capital }) => ({
        name,
        status,
        subregion,
        population,
        languages,
        capital,
      }));
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

asyncFunction();
