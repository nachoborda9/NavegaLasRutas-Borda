import React from 'react';
import { Product } from '../types';
import ItemCount from './ItemCount';

interface ItemDetailProps {
  product: Product;
}

const ItemDetail = ({ product }: ItemDetailProps) => {
  const handleAddToCart = (quantity: number) => {
    console.log(`Agregando ${quantity} unidades al carrito`);
    // Aquí se implementará la lógica del carrito en futuras entregas
  };

  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  }).format(product.price);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-cover md:h-full md:w-96"
          />
        </div>
        <div className="p-8">
          <div className="text-sm text-indigo-600 font-semibold uppercase tracking-wide">
            {product.category}
          </div>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">{product.name}</h2>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <div className="mt-4">
            <span className="text-3xl font-bold text-indigo-600">{formattedPrice}</span>
          </div>
          <div className="mt-6">
            <p className="text-gray-600 mb-4">Stock disponible: {product.stock}</p>
            <ItemCount stock={product.stock} onAdd={handleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail