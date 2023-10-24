const API_URL = "https://restcountries.com/v3.1/region/europe";

const asyncFunction = async () => {
  try {
    const response = await fetch(API_URL);
    const respJson = await response.json();
    const filterResp = respJson.filter((val) => {
      return val.subregion === "Central Europe";
    });
    const result = [];
    const slicesResp = filterResp.slice(0, 25);
    slicesResp.map((val) => {
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
