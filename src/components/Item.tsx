import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ItemProps {
  product: Product;
}

const Item = ({ product }: ItemProps) => {
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  }).format(product.price);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-xl font-bold text-indigo-600 mb-4">{formattedPrice}</p>
        <Link
          to={`/item/${product.id}`}
          className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item