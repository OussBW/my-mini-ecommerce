import axios from "axios";

export const ProductService = {
  baseURL: "https://fakestoreapi.com",
  getProductsData() {
    return axios.get(`${this.baseURL}/products`);
  },
  getProductById(productId: string) {
    return axios.get(`${this.baseURL}/products/${productId}`);
  },
};
