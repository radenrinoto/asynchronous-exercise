const getProductsByRating = async (minRating) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    const filteredProducts = data.filter(
      (product) => product.rating.rate >= minRating
    );

    console.log('Products with rating equal to or above', minRating, ':');
    console.log(filteredProducts);
  } catch (error) {
    console.error(`Failed to fetch products: ${error.message}`);
  }
};

const createProduct = async (body) => {
  try {
    const config = {
      method: 'POST',
      body: JSON.stringify(body),
    };
    const response = await fetch('https://fakestoreapi.com/products', config);
    const data = await response.json();
    console.log('Product created: ', data);
  } catch (error) {
    console.error(`An error occurred while creating product: ${error.message}`);
  }
};

const editProductById = async (productId, updatedProductData) => {
  try {
    const config = {
      method: 'PATCH',
      body: JSON.stringify(updatedProductData),
    };
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`,
      config
    );
    const data = await response.json();
    console.log('Product updated: ', data);
  } catch (error) {
    console.error(`An error occurred while updating product: ${error.message}`);
  }
};

const deleteProduct = async (productId) => {
  try {
    const config = {
      method: 'DELETE',
    };
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`,
      config
    );
    if (response.status === 200) {
      console.log('Product deleted successfully.');
    } else {
      console.log('Product deletion failed.');
    }
  } catch (error) {
    console.error(`An error occurred while deleting product: ${error.message}`);
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
