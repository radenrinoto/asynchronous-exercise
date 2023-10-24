// dummy json api
const BASE_URL = 'https://dummyjson.com'

const getProducts = async ({ limit, pageNumber }) => {
  try {
    const response = await fetch(
      `${BASE_URL}/products?limit=${limit}&skip=${pageNumber}`
    )
    const result = await response.json()
    console.log(result)
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}
getProducts({ limit: 2, pageNumber: 1 })

const createProduct = async ({
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images,
}) => {
  try {
    const result = await fetch(`${BASE_URL}/products/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        images,
      }),
    })
    const response = await result.json()
    console.log(response)
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

createProduct({
  title: 'product test 1',
  description: 'test description',
  discountPercentage: 15.58,
  rating: 4.57,
  stock: 146,
  brand: 'Big color',
  category: 'skincare',
  thumbnail: 'https://i.dummyjson.com/data/products/21/thumbnail.png',
  images: [
    'https://i.dummyjson.com/data/products/22/1.jpg',
    'https://i.dummyjson.com/data/products/22/2.jpg',
    'https://i.dummyjson.com/data/products/22/3.jpg',
  ],
})

const updateTitleProduct = async ({ productId, title }) => {
  try {
    if (!productId || !title)
      return console.log({ message: 'Product or title is missing' })
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
      }),
    })
    const result = await response.json()
    if (result.message) return console.log(result)
    console.log({
      message: `Updated title product with id ${productId} Successfully`,
    })
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}
//expected output:
// {
//   id: 1,
//   title: 'iPhone Galaxy +1',
//   price: 549,
//   stock: 94,
//   rating: 4.69,
//   images: [
//     'https://i.dummyjson.com/data/products/1/1.jpg',
//     'https://i.dummyjson.com/data/products/1/2.jpg',
//     'https://i.dummyjson.com/data/products/1/3.jpg',
//     'https://i.dummyjson.com/data/products/1/4.jpg',
//     'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
//   ],
//   thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//   description: 'An apple mobile which is nothing like apple',
//   brand: 'Apple',
//   category: 'smartphones'
// }

updateTitleProduct({ productId: 4, title: 'iPhone Galaxy +1' })

const deleteProduct = async productId => {
  try {
    if (!productId) return console.log({ message: 'Product id is required' })
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'DELETE',
    })
    const result = await response.json()
    if (!result.isDelate) return console.log(result)
    console.log({ message: 'deleted successfully' })
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}
//expected output:
// {
//   "id": 1,
//   "title": "iPhone 9",
//   "description": "An apple mobile which is nothing like apple",
//   "price": 549,
//   "discountPercentage": 12.96,
//   "rating": 4.69,
//   "stock": 94,
//   "brand": "Apple",
//   "category": "smartphones",
//   "thumbnail": "...",
//   "images": ["...", "...", "..."],
//   "isDeleted": true,
//   "deletedOn": /* ISOTime */
// }
deleteProduct(12)
