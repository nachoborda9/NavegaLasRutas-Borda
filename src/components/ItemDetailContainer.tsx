import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { getProductById } from '../services/productService';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) throw new Error('ID no proporcionado');
        const data = await getProductById(parseInt(id));
        if (!data) {
          navigate('/404');
          return;
        }
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
        navigate('/404');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="container mx-auto mt-10 p-6">
        <div className="text-center">Cargando producto...</div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="container mx-auto mt-10 p-6">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;