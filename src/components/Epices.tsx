import Navbar from "./Navbar"
import Footer from "./Footer"
import { StarIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Epices() {
  
  const phoneNumber = '212603956969'; // Remplace par ton numéro
  const message = encodeURIComponent(`Bonjour, je souhaite passer une commande`); // texte optionnel
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClick = () => {
    window.open(whatsappLink, '_blank'); // ouvre dans un nouvel onglet
  };
const spices = [
  {
    id: 1,
    name: "Moroccan Chicken Spices",
    description: "Des saveurs riches et chaudes pour transformer votre poulet rôti en un festin traditionnel.",
    price: 15,
    oldPrice: 25,
    rating: 5,
    image: '/images/chicken.jpg',
    popular: false,
    pdf:'/shawarma.pdf',
  },
  {
    id: 2,
    name: "Moroccan Harira Spices",
    description: "Un mélange d’épices équilibré pour enrichir la célèbre soupe marocaine avec chaleur et profondeur.",
    price: 10,
    oldPrice: 15,
    rating: 5,
    image: '/images/harira.jpg',
    popular: false,
    pdf:'/harira.pdf',
  },
  {
    id: 3,
    name: "Moroccan Kefta Spices",
    description: "Un assaisonnement audacieux et parfumé, parfait pour vos boulettes ou grillades à la marocaine.",
    price: 15,
    oldPrice: 20,
    rating: 4,
    image: '/images/kefta.jpg',
    popular: false,
    pdf:'/kefta.pdf',
  },
  {
    id: 4,
    name: "Moroccan Shawarma Spices",
    description: "Une fusion d’épices orientales et marocaines pour un chawarma savoureux et irrésistible.",
    price: 15,
    oldPrice: 30,
    rating: 4,
    image: '/images/shawarma.jpg',
    popular: false,
    pdf:'/shawarma.pdf',
  },
  {
    id: 5,
    name: "Moroccan Fish Spices",
    description: "Un mélange subtil d’épices et d’herbes pour rehausser chaque plat de poisson avec une touche marocaine authentique.",
    price: 10,
    oldPrice: 15,
    rating: 5,
    image: '/images/fish.jpg',
    popular: false,
    pdf:'/fish.pdf'
  },
  {
    id: 6,
    name: "Moroccan Harira Spices",
    description: "Un mélange d’épices équilibré pour enrichir la célèbre soupe marocaine avec chaleur et profondeur.",
    price: 10,
    oldPrice: 15,
    rating: 5,
    image: '/images/harira.jpg',
    popular: false,
    pdf:'/harira.pdf',
  },
  {
    id: 7,
    name: "Moroccan Kefta Spices",
    description: "Un assaisonnement audacieux et parfumé, parfait pour vos boulettes ou grillades à la marocaine.",
    price: 15,
    oldPrice: 20,
    rating: 4,
    image: '/images/kefta.jpg',
    popular: false,
    pdf:'/kefta.pdf',
  },
  {
    id: 8,
    name: "Moroccan Shawarma Spices",
    description: "Une fusion d’épices orientales et marocaines pour un chawarma savoureux et irrésistible.",
    price: 15,
    oldPrice: 30,
    rating: 5,
    image: '/images/shawarma.jpg',
    popular: false,
    pdf:'/shawarma.pdf',
  },
  {
    id: 9,
    name: "Moroccan Chicken Spices",
    description: "Des saveurs riches et chaudes pour transformer votre poulet rôti en un festin traditionnel.",
    price: 15,
    oldPrice: 25,
    rating: 5,
    image: '/images/chicken.jpg',
    popular: false,
    pdf:'/shawarma.pdf',
  }
]


const Spices = [
  {
    id: 1,
    name: "Moroccan Chicken Spices",
    description: "Des saveurs riches et chaudes pour transformer votre poulet rôti en un festin traditionnel.",
    price: 45,
    oldPrice: 55,
    rating: 5,
    image: '/QuantiteG/chicken.jpg',
    popular: false,
    pdf:'/shawarma.pdf',
  },
  {
    id: 2,
    name: "Moroccan Harira Spices",
    description: "Un mélange d’épices équilibré pour enrichir la célèbre soupe marocaine avec chaleur et profondeur.",
    price: 40,
    oldPrice: 45,
    rating: 5,
    image: '../../public/images/harira.jpg',
    popular: false,
    pdf:'/harira.pdf',
  },
  {
    id: 3,
    name: "Moroccan Kefta Spices",
    description: "Un assaisonnement audacieux et parfumé, parfait pour vos boulettes ou grillades à la marocaine.",
    price: 45,
    oldPrice: 55,
    rating: 4,
    image: '/QuantiteG/kefta.jpg',
    popular: false,
    pdf:'/kefta.pdf',
  },
  {
    id: 4,
    name: "Moroccan Shawarma Spices",
    description: "Une fusion d’épices orientales et marocaines pour un chawarma savoureux et irrésistible.",
    price: 45,
    oldPrice: 60,
    rating: 4,
    image: '/QuantiteG/shawarma.jpg',
    popular: false,
    pdf:'/shawarma.pdf',
  },
  {
    id: 5,
    name: "Moroccan Fish Spices",
    description: "Un mélange subtil d’épices et d’herbes pour rehausser chaque plat de poisson avec une touche marocaine authentique.",
    price: 40,
    oldPrice: 45,
    rating: 5,
    image: '/QuantiteG/fish.jpg',
    popular: false,
    pdf:'/fish.pdf'
  },
  {
    id: 6,
    name: "Moroccan Harira Spices",
    description: "Un mélange d’épices équilibré pour enrichir la célèbre soupe marocaine avec chaleur et profondeur.",
    price: 40,
    oldPrice: 55,
    rating: 5,
    image: '../../public/images/harira.jpg',
    popular: false,
    pdf:'/harira.pdf',
  },
  {
    id: 7,
    name: "Moroccan Kefta Spices",
    description: "Un assaisonnement audacieux et parfumé, parfait pour vos boulettes ou grillades à la marocaine.",
    price: 40,
    oldPrice: 55,
    rating: 4,
    image: '/QuantiteG/kefta.jpg',
    popular: false,
    pdf:'/kefta.pdf',
  },
  {
    id: 8,
    name: "Moroccan Shawarma Spices",
    description: "Une fusion d’épices orientales et marocaines pour un chawarma savoureux et irrésistible.",
    price: 45,
    oldPrice: 60,
    rating: 5,
    image: '/QuantiteG/shawarma.jpg',
    popular: false,
    pdf:'/shawarma.pdf',
  },
  {
    id: 9,
    name: "Moroccan Chicken Spices",
    description: "Des saveurs riches et chaudes pour transformer votre poulet rôti en un festin traditionnel.",
    price: 45,
    oldPrice: 55,
    rating: 5,
    image: '/QuantiteG/chicken.jpg',
    popular: false,
    pdf:'/shawarma.pdf',
  }
]

const services = [
  {
    title: "Qualité Premium",
    description: "Nous sélectionnons uniquement les meilleures épices du Maroc",
    icon: "🌟",
  },
  {
    title: "Livraison Rapide",
    description: "Expédition sous 24h pour toutes les commandes",
    icon: "🚚",
  },
  {
    title: "Service Client",
    description: "Une équipe dédiée à votre écoute 7j/7",
    icon: "💬",
  },
]

    return (
        <>
        {/* Main Content */}
        <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1920px] mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Quantites : 30g</h2>
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spices.map((spice) => (
            <div key={spice.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img src={spice.image} alt={spice.name} className="w-full h-64 object-cover" />
                {spice.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    Populaire
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{spice.name}</h3>
                <p className="text-gray-600 mt-2">{spice.description}</p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < spice.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">{spice.price}DH</span>
                    {spice.oldPrice && (
                      <span className="text-gray-400 line-through">{spice.oldPrice}dh</span>
                    )}
                  </div>
                  <a href={spice.pdf} target="_blank">
                  <button className="bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-800 transition-colors">
                    Guide
                  </button>
                  </a>
                  <button onClick={() => {
                    const message = encodeURIComponent(`Bonjour, je suis intéressé par : ${spice.name} (${spice.price}€)`);
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



        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Quantites : 150g</h2>
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Spices.map((spice) => (
            <div key={spice.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img src={spice.image} alt={spice.name} className="w-full h-64 object-cover" />
                {spice.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    Populaire
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{spice.name}</h3>
                <p className="text-gray-600 mt-2">{spice.description}</p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < spice.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">{spice.price}DH</span>
                    {spice.oldPrice && (
                      <span className="text-gray-400 line-through">{spice.oldPrice}dh</span>
                    )}
                  </div>
                  <a href={spice.pdf} target="_blank">
                  <button className="bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-800 transition-colors">
                    Guide
                  </button>
                  </a>
                  <button onClick={() => {
                    const message = encodeURIComponent(`Bonjour, je suis intéressé par : ${spice.name} (${spice.price}€)`);
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



        {/* Services Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
        </>
      
    )
  }