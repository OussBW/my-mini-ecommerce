import axios from "axios";
export const ProductService = {
  getProductsData() {
    return axios.get("https://fakestoreapi.com/products");
  },
  getProductById(productId) {
    return axios.get(`https://fakestoreapi.com/products/${productId}`);
  },
};
