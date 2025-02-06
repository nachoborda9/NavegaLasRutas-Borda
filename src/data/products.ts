import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Laptop Pro X",
    description: "Portátil de última generación con procesador de alto rendimiento y pantalla 4K.",
    price: 899999.99,
    category: "laptops",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6",
    stock: 10
  },
  {
    id: 2,
    name: "Smartphone Galaxy Plus",
    description: "Teléfono inteligente con cámara de 108MP y pantalla AMOLED.",
    price: 449999.99,
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
    stock: 15
  },
  {
    id: 3,
    name: "Tablet Air",
    description: "Tablet ligera con pantalla Retina y soporte para lápiz digital.",
    price: 299999.99,
    category: "tablets",
    image: "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e",
    stock: 8
  },
  {
    id: 4,
    name: "Smartwatch Series 5",
    description: "Reloj inteligente con monitor cardíaco y GPS integrado.",
    price: 159999.99,
    category: "accesorios",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d",
    stock: 20
  }
];