import axios from "axios";

const baseUrl = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  const products = await axios.get(`${baseUrl}/products`);
  return products.data;
};
