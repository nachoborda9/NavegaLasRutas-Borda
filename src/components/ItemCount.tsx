import React, { useState } from 'react';

interface ItemCountProps {
  stock: number;
  initial?: number;
  onAdd: (quantity: number) => void;
}

const ItemCount = ({ stock, initial = 1, onAdd }: ItemCountProps) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <button
          onClick={decrement}
          className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          disabled={count <= 1}
        >
          -
        </button>
        <span className="text-xl font-semibold">{count}</span>
        <button
          onClick={increment}
          className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          disabled={count >= stock}
        >
          +
        </button>
      </div>
      <button
        onClick={() => onAdd(count)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 w-full"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;