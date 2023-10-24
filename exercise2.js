const API_URL = "https://restcountries.com/v3.1/region/europe";

const asyncFunction = async () => {
  try {
    const response = await fetch(API_URL);
    const respJson = await response.json();
    const slicesResp = respJson.slice(0, 25);
    const subregionArr = slicesResp.map((val) => {
      return val.subregion;
    });
    const subregion = new Set(subregionArr);
    let obj = {};
    subregion.forEach((val) => {
      const filterBySubregion = slicesResp.filter((filterval) => {
        return filterval.subregion === val;
      });
      const resultBySubregion = [];
      filterBySubregion.map((val) => {
        resultBySubregion.push({
          name: val.name,
          status: val.status,
          subregion: val.subregion,
          population: val.population,
          language: val.languages,
          capital: val.capital,
        });
      });
      obj[val] = resultBySubregion;
    });
    console.log(obj);
  } catch (error) {
    console.log(error);
  }
};

asyncFunction();
