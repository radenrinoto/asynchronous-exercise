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
    const data = {
      name,
      status,
      subregion,
      population,
      languages,
      capital,
    };
    return data;
  });

  console.log(result);
};

fetchApi();

const exerciseTwo = async () => {
  const data = await getApi();
  const dataSliced = data.slice(0, 25);

  const obj = {};

  dataSliced.map((item) => {
    if (!obj[item.subregion]) {
      obj[item.subregion] = {
        name: item.name,
        status: item.status,
        subregion: item.subregion,
        population: item.population,
        languages: item.languages,
        capital: item.capital,
      };
    }
  });
  console.log(obj);
};

exerciseTwo();
