const url = "https://restcountries.com/v3.1/region/europe?_limit=10";

const restCountries = async () => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const limitData = result.slice(0, 25);
    const dataFilter = limitData.filter((e) => e.subregion === "Central Europe");
    const columnData = dataFilter.map((x) => ({
      name: x.name,
      status: x.status,
      subregion: x.subregion,
      population: x.population,
      language: x.language,
      capital: x.capital,
    }));
    console.log(columnData);
  } catch (error) {
    console.log("Fetch error: ", error);
  }
};

restCountries();
