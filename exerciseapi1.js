const url = "https://reqres.in/api/users";

const addUserData = {
  name: "Andika",
  job: "Developer",
};

const updateUserData = {
  name: "Hiro",
  job: "Magician",
};

const user = async () => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("message error: ", error);
  }
};

const addUser = async () => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUserData),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("message error: ", error);
  }
};

const updateUser = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUserData),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("message error: ", error);
  }
};

const deleteData = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if (response.status === 204) {
      console.log(`user has been deleted`);
    } else {
      console.log("Delete failed with status: ", response.status);
    }
  } catch (error) {
    console.log("message error: ", error);
  }
};

user()
  .then((result) => {
    const data = result.data;
    console.log(data);
  })
  .catch((error) => {
    console.log("Error Message:", error);
  });

addUser()
  .then((result) => {
    console.log("Added user:", result);
  })
  .catch((error) => {
    console.log("Error Message:", error);
  });

updateUser(1)
  .then((result) => {
    console.log("Updated Data: ", result);
  })
  .catch((error) => {
    console.log("Error Message:", error);
  });

deleteData(1).catch((error) => {
  console.log("Error Message:", error);
});
