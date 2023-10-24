async function data() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/region/europe")
    const allData = await response.json();
    const centralEurope = allData.filter(
      (dataOfCountry) => dataOfCountry.subregion === "Central Europe"
    );
    const data25Country = centralEurope.slice(0, 25);
    const result = data25Country.map(
      ({name, status, subregion, population, languages, capital}) => ({
        name, status, subregion, population, languages, capital
      })
    );
    console.log("Success bre >>>", result);
  } catch (error) {
    console.log("Error bre >>>", error);
  }
}
data()