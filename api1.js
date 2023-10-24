const createPost = async (title, body) => {
  try {
    const newPost = {
      title,
      body,
    };
    const config = {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    };

    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
      config
    );
    const createdPost = await response.json();
    console.log('Created Post: ', createdPost);
  } catch (error) {
    console.error(`An error occurred while creating post: ${error.message}`);
  }
};

const editPostById = async (postId, body) => {
  try {
    const config = {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      config
    );
    const editedPost = await response.json();
    console.log('Edited Post: ', editedPost);
  } catch (error) {
    console.error(`An error occurred while editing post: ${error.message}`);
  }
};

const deletePostById = async (postId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      { method: 'DELETE' }
    );
    console.log(
      `Post Deleted. Status: ${response.status} ${response.statusText} `
    );
  } catch (error) {
    console.error(`An error occurred while deleting post: ${error.message}`);
  }
};

createPost('This is a new title', 'This is a new body');
const editPostBody = {
  title: 'This title is edited',
  body: 'The body is also edited',
};
editPostById(2, editPostBody);
deletePostById(1);
