const URL_JSONPLACE = "https://jsonplaceholder.typicode.com";

const callApi = async (endpoint, method = "GET", body) => {
  try {
    const res = await fetch(`${URL_JSONPLACE}${endpoint}`, {
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

const getDataUsers = async () => {
  const getUser = await callApi("/users");
  console.log({ getUser });
  return getUser;
};

getDataUsers();

const postDataPosts = async (data) => {
  const user = await getDataUsers();
  const dataRes = {
    userId: user[0].id,
    ...data,
  };

  const res = await callApi("/posts", "POST", dataRes);
  console.log({ res });
  return res;
};

postDataPosts({ title: "TEST", body: "WPLAWPLW" });

const deleteDataPost = async (id) => {
  const resDelete = await callApi(`/posts/${id}`, "DELETE");
  console.log({ resDelete });
  return resDelete;
};

deleteDataPost(1);

const updateDataPost = async (data) => {
  const { id, ...rest } = data;
  const resPatch = await callApi(`/posts/${id}`, "PATCH", rest);
  console.log({ resPatch });
  return resPatch;
};

updateDataPost({ id: 1, title: "UPDATE", body: "UPDATEEE", userId: 1 });
