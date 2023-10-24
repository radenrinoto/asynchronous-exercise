const URL = "https://reqres.in/api";

const callApi = async (params, method = "GET", body) => {
  try {
    const res = await fetch(`${URL}${params}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async () => {
  const users = await callApi(`/users`);
  console.log(users.data);
  return users.data;
};

getAllUsers();

const loginUser = async (data) => {
  const { token } = await callApi(`/login`, "POST", data);

  let fakeCookie = {};
  if (token) {
    fakeCookie = token;
  }

  console.log({ fakeCookie });
  return fakeCookie;
};

loginUser({ email: "eve.holt@reqres.in", password: "string" });
