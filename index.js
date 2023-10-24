const API_URL = "https://restcountries.com/v3.1/region/europe";

const getApi = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchApi = async () => {
  const data = await getApi();

  const filterSubRegion = (data) => {
    return data.subregion === "Central Europe";
  };

  const slicedData = data.slice(0, 25);
  const filteredData = slicedData.filter(filterSubRegion);

  const result = filteredData.map((item) => {
    const { name, status, subregion, population, languages, capital } = item;
    const output = { name, status, subregion, population, languages, capital };
    return output;
  });

  console.log(result);
};

fetchApi();

const exerciseTwo = async () => {
  const data = await getApi();
  const dataSliced = data.slice(0, 25);

  const KEY_REGION = ["Southeast Europe", "Central Europe", "Northern Europe"];

  const dataFiltered = dataSliced.filter((country) => KEY_REGION.includes(country.subregion));

  const filteredData = dataFiltered.map((item) => {
    const { name, status, subregion, population, languages, capital } = item;
    const output = { name, status, subregion, population, languages, capital };
    return output;
  });

  const result = {};

  filteredData.forEach((country) => {
    if (!result[country.subregion]) {
      result[country.subregion] = [];
    }
    result[country.subregion].push(country);
  });

  console.log(result);
};

exerciseTwo();
