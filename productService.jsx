import products from "../data/products.json";

export const getProductById = (id) => {
  return products.find((p) => p.id === Number(id));
};