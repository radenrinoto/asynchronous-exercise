const API_URL = "https://restcountries.com/v3.1/region/europe";

const asyncFunction = async () => {
  try {
    const response = await fetch(API_URL);
    const respJson = await response.json();
    const slicesResp = respJson.slice(0, 25);
    const filterResp = slicesResp.filter((val) => {
      return val.subregion === "Central Europe";
    });
    const result = [];
    filterResp.map((val) => {
      result.push({
        name: val.name,
        status: val.status,
        subregion: val.subregion,
        population: val.population,
        language: val.languages,
        capital: val.capital,
      });
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

asyncFunction();
