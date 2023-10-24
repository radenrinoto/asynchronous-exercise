const BASE_URL = "https://www.abibliadigital.com.br/api/users";
const createUser = async (name, email, password, notification) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        notifications: notification,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const resJson = await res.json();
    console.log(resJson);
  } catch (error) {
    console.log(error.message);
  }
};
const getUserInfo = async (email, token) => {
  try {
    const res = await fetch(`${BASE_URL}/${email}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const resJson = await res.json();
    console.log(resJson);
  } catch (error) {
    console.log(error.message);
  }
};
const updateToken = async (email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/token`, {
      method: "PUT",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const resJson = await res.json();
    console.log(resJson);
  } catch (error) {
    console.log(error.message);
  }
};
const deleteUser = async (email, password, token) => {
  try {
    await fetch(`${BASE_URL}`, {
      method: "DELETE",
      body: {
        email: email,
        password: password,
      },
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// createUser("username", "abcd@a.com", "12345678", true);

// getUserInfo(
//   "abc@a.com",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlR1ZSBPY3QgMjQgMjAyMyAwODozMzowMyBHTVQrMDAwMC5hYmNAYS5jb20iLCJpYXQiOjE2OTgxMzYzODN9.ZjWcIo2753i1x4hBdktHsi1RRwNG21nUYEc9vwefhiM"
// );

// updateToken("abc@a.com", "12345678");

// deleteUser(
//   "abc@a.com",
//   "12345678",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlR1ZSBPY3QgMjQgMjAyMyAwODozMzowMyBHTVQrMDAwMC5hYmNAYS5jb20iLCJpYXQiOjE2OTgxMzYzODN9.ZjWcIo2753i1x4hBdktHsi1RRwNG21nUYEc9vwefhiM"
// );
