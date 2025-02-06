import React from 'react';
import { ShoppingCart } from 'lucide-react';

const CartWidget = () => {
  return (
    <div className="relative">
      <ShoppingCart className="w-6 h-6" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
        0
      </span>
    </div>
  );
};

export default CartWidget;