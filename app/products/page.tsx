import React from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

const ProductSection = ({ title, products }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-xl font-bold text-green-600">{product.price} €</p>
            <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300">
              Ajouter au panier
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Products = () => {
  const afriqueProducts = [
    {
      name: "Pagne Wax",
      description: "Tissu traditionnel africain aux motifs colorés",
      price: 39.99,
      image: "/images/pagne-wax.jpg"
    },
    {
      name: "Huile de Karité",
      description: "Huile naturelle hydratante",
      price: 24.99,
      image: "/images/karite.jpg"
    },
    {
      name: "Épices Africaines",
      description: "Mélange d'épices traditionnelles",
      price: 12.99,
      image: "/images/epices.jpg"
    }
  ];

  const antillesProducts = [
    {
      name: "Rhum Arrangé",
      description: "Rhum traditionnel des Antilles",
      price: 34.99,
      image: "/images/rhum.jpg"
    },
    {
      name: "Vanille de Guadeloupe",
      description: "Gousses de vanille premium",
      price: 19.99,
      image: "/images/vanille.jpg"
    },
    {
      name: "Confiture de Goyave",
      description: "Confiture artisanale",
      price: 8.99,
      image: "/images/goyave.jpg"
    }
  ];

  const trendingProducts = [
    {
      name: "Bissap Bio",
      description: "Boisson rafraîchissante à l'hibiscus",
      price: 15.99,
      image: "/images/bissap.jpg"
    },
    {
      name: "Huile de Coco",
      description: "Huile de coco pure bio",
      price: 17.99,
      image: "/images/coco.jpg"
    },
    {
      name: "Café Arabica",
      description: "Café premium d'Éthiopie",
      price: 22.99,
      image: "/images/cafe.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Nos Produits</h1>
        
        <ProductSection title="Produits du Moment" products={trendingProducts} />
        <ProductSection title="Produits d'Afrique" products={afriqueProducts} />
        <ProductSection title="Spécialités des Antilles" products={antillesProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default Products;


