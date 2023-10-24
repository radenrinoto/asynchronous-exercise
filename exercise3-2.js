const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const getPostsByLimit = async (limit) => {
  try {
    const res = await fetch(BASE_URL);
    const resJson = await res.json();
    console.log(resJson.slice(0, limit));
  } catch (error) {
    console.log(error.message);
  }
};
const addPost = async (title, body) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
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
const updatePostById = async (id, title, body) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: title,
        body: body,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(await res.json());
  } catch (error) {
    console.log(error.message);
  }
};
const deletePostById = async (id) => {
  try {
    await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  } catch (error) {
    console.log(error.message);
  }
};
getPostsByLimit(2);

addPost("ini Judul", "body");

updatePostById(1, "ini Judul", "body");

deletePostById(1);
