const getBigCountry = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/region/europe')
      const data = await response.json();
      
      const subregions = ['Central Europe', 'Southeast Europe', 'Northern Europe'];
      
      const bigCountry = subregions.reduce((result, subregion) => {
        result[subregion] = data
          .slice(0, 25)
          .filter(country => country.subregion === subregion)
          .map(({ name, status, subregion, population, languages, capital }) => ({
            name, 
            status, 
            subregion, 
            population, 
            language: languages, 
            capital
          }));
        return result;
      }, {});
  
      console.log(bigCountry);
    } catch (error) {
      console.error('error fetching data', error);
    }
  };
  

getBigCountry()