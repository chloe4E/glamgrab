import type { Product } from "../Types/types";
const BASE_URL = "https://fakestoreapi.com/";

const getAllProducts: () => Promise<Product[]> = () => {
  return fetch(`${BASE_URL}products`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      throw error;
    });
};

export default getAllProducts;
