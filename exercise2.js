const API_URL = "https://restcountries.com/v3.1/region/europe";

const asyncFunction = async () => {
  try {
    const response = await fetch(API_URL);
    const respJson = await response.json();
    const slicesResp = respJson.slice(0, 25);
    const subregion = {
      centralEurope: "Central Europe",
      southEast: "Southeast Europe",
      northenEurope: "Northern Europe",
    };
    let obj = {};
    Object.entries(subregion).forEach((val) => {
      const resultBySubregion = slicesResp
        .filter((filterval) => {
          return filterval.subregion === val[1];
        })
        .map(({ name, status, subregion, population, languages, capital }) => ({
          name,
          status,
          subregion,
          population,
          languages,
          capital,
        }));
      obj[val[0]] = resultBySubregion;
    });
    console.log(obj);
  } catch (error) {
    console.log(error);
  }
};

asyncFunction();
