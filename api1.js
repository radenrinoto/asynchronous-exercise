const { fetchApiData } = require('./apiUtils');

const createPost = async (title, body) => {
  const config = {
    method: 'POST',
    body: JSON.stringify({ title, body }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  const createdPost = await fetchApiData('api1', 'posts', config);
  console.log('Created Post: ', createdPost);
};

const editPostById = async (postId, body) => {
  const config = {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  const editedPost = await fetchApiData('api1', `posts/${postId}`, config);
  console.log('Edited Post: ', editedPost);
};

const deletePostById = async (postId) => {
  const config = { method: 'DELETE' };
  const deletedPost = await fetchApiData('api1', `posts/${postId}`, config);
  // console.log(`Post Deleted: ${deletedPost} `);
  console.log(`Post ${postId} deleted successfully.`);
};

createPost('This is a new title', 'This is a new body');
const editPostBody = {
  title: 'This title is edited',
  body: 'The body is also edited',
};
editPostById(2, editPostBody);
deletePostById(1);
