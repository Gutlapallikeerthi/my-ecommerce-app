// src/productUtils.js

import products from './products'; // Import the product data

// Function to get all products
export const getAllProducts = () => {
  return products;
};

// Function to get a single product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};
