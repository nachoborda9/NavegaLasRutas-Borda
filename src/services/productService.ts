import { Product } from '../types';
import { products } from '../data/products';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getProducts = async (): Promise<Product[]> => {
  await delay(1000);
  return products;
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  await delay(1000);
  return products.filter(product => product.category === category);
};

export const getProductById = async (id: number): Promise<Product | undefined> => {
  await delay(1000);
  return products.find(product => product.id === id);
};