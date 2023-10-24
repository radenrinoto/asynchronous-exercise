async function getRandomUsers(size=10, gender="Female") {
  try {
    const url = `https://random-data-api.com/api/v2/users?size=${size}`;
    const response = await fetch(url);

    const responseBody = await response.json();
    const filteredData = responseBody
      .filter((data) => data.gender === gender);

    if (filteredData.length === 0) {
      console.log(`There are no ${gender}`);
    } else {
      console.log(filteredData);
    }
  } catch (error) {
    console.error(error);
  }
}

getRandomUsers(10, "Female");