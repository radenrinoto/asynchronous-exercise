const API_URL = "https://restcountries.com/v3.1/region/europe";

const fetchApi = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const filterSubRegion = (data) => {
      return data.subregion === "Central Europe";
    };

    const filteredData = data.filter(filterSubRegion);
    const slicedData = filteredData.slice(0, 25);

    const result = slicedData.map((item) => {
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
  } catch (error) {
    console.log(error);
  }
};

fetchApi();
