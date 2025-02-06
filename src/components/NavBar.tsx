import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { Store } from 'lucide-react';

const categories = [
  { id: 'laptops', name: 'Laptops' },
  { id: 'smartphones', name: 'Smartphones' },
  { id: 'tablets', name: 'Tablets' },
  { id: 'accesorios', name: 'Accesorios' }
];

const NavBar = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
          <Store className="w-8 h-8" />
          <span className="text-xl font-bold">Mi Tienda</span>
        </Link>
        
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link to="/" className="hover:text-indigo-200 transition-colors">
            Inicio
          </Link>
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="hover:text-indigo-200 transition-colors"
            >
              {category.name}
            </Link>
          ))}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;