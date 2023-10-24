const { fetchApiData } = require('./apiUtils');

const getProductsByRating = async (minRating) => {
  const response = await fetchApiData('api3', 'products');
  const data = response;

  const filteredProducts = data.filter(
    (product) => product.rating.rate >= minRating
  );

  console.log('Products with a rating equal to or above', minRating, ':');
  console.log(filteredProducts);
};

const createProduct = async (body) => {
  const config = {
    method: 'POST',
    body: JSON.stringify(body),
  };
  const response = await fetchApiData('api3', 'products', config);
  const data = response;
  console.log('Product created: ', data);
};

const editProductById = async (productId, updatedProductData) => {
  const config = {
    method: 'PATCH',
    body: JSON.stringify(updatedProductData),
  };
  const response = await fetchApiData('api3', `products/${productId}`, config);
  const data = response;
  console.log('Product updated: ', data);
};

const deleteProduct = async (productId) => {
  const config = {
    method: 'DELETE',
  };
  const response = await fetchApiData('api3', `products/${productId}`, config);
  if (response.status === 200) {
    console.log('Product deleted successfully.');
  } else {
    console.log('Product deletion failed.');
  }
};

//Function Call

getProductsByRating(4);

const newProductBody = {
  title: 'Some fake product you probably wont buy',
  price: 999,
  description: 'Literally a scam product lmfao',
  image: 'https://example-image.com',
  category: 'other',
};
createProduct(newProductBody);

const editProductBody = {
  title: 'Updated Product Title',
  price: 20.0,
  description: 'Updated description',
  image: 'https://updated-image.com',
  category: 'updated-category',
};
editProductById(1, editProductBody);

deleteProduct(2);
