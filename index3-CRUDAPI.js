// Function to make a DELETE request
async function deleteData(url) {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Handle the response, e.g., show a success message
      console.log('DELETE request successful:', response.status);
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  
  // Function to make a POST request
  async function postData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Handle the response, e.g., show a success message
      console.log('POST request successful:', response.status);
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  
  // Function to make a PUT (update) request
  async function putData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Handle the response, e.g., show a success message
      console.log('PUT request successful:', response.status);
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
 
  // Function to make a POST request
async function postData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Handle the response, e.g., show a success message
      console.log('POST request successful:', response.status);
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async function fetchAPIData() {
    try {
        //fetch api
        const response = await fetch(getUrl , {
            method: 'GET',
        })
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Mengambil Response JSON
        const jsonData = await response.json();

        const slicedData = jsonData.slice(0, 3);

        const filteredData = slicedData.map(item => ({
            postId : item.postId,
            name : item.name,
            email : item.email,
        }))
        
        return filteredData
    } catch (error) {
        console.log("Error" , error)
        throw error;
    }
}

  
  // Example usage:
  
  const deleteUrl = 'https://calm-plum-jaguar-tutu.cyclic.app/todos/1'; // Replace with the actual DELETE endpoint
  deleteData(deleteUrl);
  
  const postUrl = 'https://calm-plum-jaguar-tutu.cyclic.app/todos'; // Replace with the actual POST endpoint
  const postDataToSend = { name: 'Joko Anwar', email: 'jokoanwar@gmail.com' , body : 'test 2 '};
  postData(postUrl, postDataToSend);
  
  const putUrl = 'https://calm-plum-jaguar-tutu.cyclic.app/todos/1'; // Replace with the actual PUT (update) endpoint
  const putDataToSend = { name: 'Joko Anwar', email: 'jokoanwar@gmail.com' , body : 'test 2' };
  putData(putUrl, putDataToSend);
  
  const getUrl = 'https://jsonplaceholder.typicode.com/comments'
  fetchAPIData(getUrl)
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });