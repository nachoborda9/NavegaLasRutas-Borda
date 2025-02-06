import React from 'react';
import { Product } from '../types';
import Item from './Item';

interface ItemListProps {
  products: Product[];
}

const ItemList = ({ products }: ItemListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;