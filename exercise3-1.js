const BASE_URL = "https://fakestoreapi.com/";
const getProductsByMinimumPrice = async (priceMinimum) => {
  try {
    const response = await fetch(`${BASE_URL}products`);
    const respJson = await response.json();
    console.log(
      respJson
        .filter(({ price }) => price >= priceMinimum)
        .map(({ title, price, category, id }) => ({
          title,
          price: `$ ${price}`,
          category,
          id,
        }))
    );
  } catch (error) {
    console.log(error.message);
  }
};
const getProductDescriptionById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}products/${id}`);
    const respJson = await response.json();
    console.log(respJson.description.split(","));
    //pisahkan description dengan koma
    //output berupa array
  } catch (error) {
    console.log(error.message);
  }
};
const getProductsByMinimumRating = async (rate) => {
  try {
    const response = await fetch(`${BASE_URL}products`);
    const respJson = await response.json();
    const data = respJson.filter((val) => val.rating.rate >= rate);
    console.log(data);
  } catch (error) {}
};
const addProduct = async (title, price, description, imageURL, category) => {
  try {
    const response = await fetch(`${BASE_URL}products`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        price: price,
        description: description,
        image: imageURL,
        category: category,
      }),
    });
    const respJson = await response.json();
    console.log(respJson);
  } catch (error) {
    console.log(error.message);
  }
};
const updateProductById = async (
  id,
  title,
  price,
  description,
  imageURL,
  category
) => {
  try {
    const response = await fetch(`${BASE_URL}products/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        price: price,
        description: description,
        image: imageURL,
        category: category,
      }),
    });
    const respJson = await response.json();
    console.log(respJson);
  } catch (error) {
    console.log(error.message);
  }
};
const deleteProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}products/${id}`, {
      method: "DELETE",
    });
    response.status === 200 &&
      console.log(`berhasil delete product dengan id ${id}`);
  } catch (error) {
    console.log(error.message);
  }
};
// getProductsByMinimumPrice(599);

getProductDescriptionById(2);

// getProductsByMinimumRating(4.8);

// addProduct("Add Product", 14.6, "Decription Product", "", "Product");

// updateProductById(
//   19,
//   "Update Product",
//   14.6,
//   "Decription Product",
//   "",
//   "Product"
// );

// getProductById(1);

// deleteProductById(21);
