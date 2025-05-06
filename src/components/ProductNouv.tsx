import React from 'react';
import { Star } from 'lucide-react';



const products = [
  {
    id: 1,
    name: 'Moroccan Fish Spices',
    description: 'Un mélange subtil d’épices et d’herbes pour rehausser chaque plat de poisson avec une touche marocaine authentique.',
    rating: 4,
    price: 18,
    image: '../../public/images/fish.jpg',
  },
  {
    id: 2,
    name: 'Moroccan Harira Spices',
    description: 'Un mélange d’épices équilibré pour enrichir la célèbre soupe marocaine avec chaleur et profondeur.',
    rating: 5,
    price: 15,
    image: '../../public/images/harira.jpg',
  },
  {
    id: 3,
    name: 'Moroccan Kefta Spices',
    description: 'Un assaisonnement audacieux et parfumé, parfait pour vos boulettes ou grillades à la marocaine.',
    rating: 5,
    price: 22,
    image: '../../public/images/kefta.jpg',
  },
];

const NewArrivals = () => {

  const phoneNumber = '212603956969'; // Remplace par ton numéro
const message = encodeURIComponent(`Bonjour, je souhaite passer une commande`); // texte optionnel
const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

const handleClick = () => {
  window.open(whatsappLink, '_blank'); // ouvre dans un nouvel onglet
};

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nouveautés</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Nouveau
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
                
                <div className="flex items-center mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating ? 'text-amber-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{product.price}€</span>
                  <button className="bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-800 transition-colors">
                    Guide
                  </button>
                  <button onClick={() => {
                    const message = encodeURIComponent(`Bonjour, je suis intéressé par : ${product.name} (${product.price}€)`);
                    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
                    window.open(whatsappLink, '_blank');
                     }} className="bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-800 transition-colors">
                      Acheter
                      </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;