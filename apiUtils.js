const apiUrl = {
  api1: 'https://jsonplaceholder.typicode.com',
  api2: 'https://pokeapi.co/api/v2',
  api3: 'https://fakestoreapi.com',
};

const fetchApiData = async (api, endpoint, config) => {
  try {
    const response = await fetch(`${apiUrl[api]}/${endpoint}`, config);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`API request to ${api}/${endpoint} failed: ${error.message}`);
    throw error;
  }
};

module.exports = {
  fetchApiData,
};
