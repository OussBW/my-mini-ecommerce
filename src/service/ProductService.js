import axios from "axios";

export const ProductService = {
  baseURL: "https://fakestoreapi.com",
  getProductsData() {
    return axios.get(`${this.baseURL}/products`);
  },
  getProductById(productId) {
    return axios.get(`${this.baseURL}/products/${productId}`);
  },
};
