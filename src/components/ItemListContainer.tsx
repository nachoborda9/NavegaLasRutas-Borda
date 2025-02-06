import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types';
import { getProducts, getProductsByCategory } from '../services/productService';
import ItemList from './ItemList';

interface ItemListContainerProps {
  greeting: string;
}

const ItemListContainer = ({ greeting }: ItemListContainerProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const data = categoryId
          ? await getProductsByCategory(categoryId)
          : await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return (
      <div className="container mx-auto mt-10 p-6">
        <div className="text-center">Cargando productos...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">{greeting}</h2>
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <div className="text-center text-gray-600">
          No se encontraron productos en esta categoría
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;