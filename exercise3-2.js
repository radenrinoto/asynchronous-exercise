const apiUrl = 'https://reqres.in/api/users';
const idUser = 2

// METHOD POST
const postData = {
  name: 'Taufiqurrahman Saleh',
  job: 'Software Engineer',
  email: 'taufiq@gmail.com'
};

const requestPost = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(postData),
};

fetch(apiUrl, requestPost)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Gagal mengirim permintaan POST');
    }
    return response.json();
  })
  .then((data) => {
    console.log('DATA BERHASIL DIKIRIM:');
    console.log(data);
  })
  .catch((error) => {
    console.error('Terjadi kesalahan:', error);
  });

// METHOD PUT
const putData = {
    name: 'Taufiq Updated',
    job: 'Fullstack Developer'
}

const requestPut = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(putData)
}

fetch(`${apiUrl}/${idUser}`, requestPut)
    .then((response) => {
    if (!response.ok) {
        throw new Error('Gagal mengirim permintaan PUT');
    }
    return response.json()
    })
    .then((data) => {
    console.log('DATA BERHASIL DIUPATE:');
    console.log(data);
    })
    .catch((error) => {
    console.error('Terjadi kesalahan:', error);
    })

// METHOD DELETE
fetch(`${apiUrl}/${idUser}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.status === 204) {
        console.log('DATA BERHASIL DIHAPUS');
      } else {
        console.log('Gagal menghapus user');
      }
    })
    .catch(error => console.error('Error:', error));

// METHOD GET SINGLE USER
fetch(`${apiUrl}/${idUser}`, {
    method: 'GET'
})
    .then(response => {
        if (response.status === 200) {
            console.log('DATA BERHASIL DITEMUKAN');
            return response.json()
        } else {
            console.log('Gagal mengambil data user');
        }
    })
    .then(data => console.log('Response GET single data', data))
    .catch(error => console.error('Error:', error));