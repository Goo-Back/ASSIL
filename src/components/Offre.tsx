import Navbar from "./Navbar"
import Footer from "./Footer"
import { Check } from 'lucide-react'
export default function Offre() {
  const phoneNumber = '212603956969'; // Remplace par ton numéro
  const message = encodeURIComponent(`Bonjour, je souhaite passer une commande`); // texte optionnel
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClick = () => {
    window.open(whatsappLink, '_blank'); // ouvre dans un nouvel onglet
  };

  const plans = [
    {
      name: 'Découverte',
      price: '129.000',
      description: 'Plan parfait pour commencer',
      features: [
        'Selection mensuelle d\'épices',
        'Recettes exclusives',
        'Support WhatsApp',
        'Centre d\'appel dédié',
        'Formation en ligne'
      ]
    },
    {
      name: 'Gourmet',
      price: '229.000',
      description: 'Choix le plus populaire',
      features: [
        'Tout du plan Découverte',
        'Épices premium',
        'Ateliers culinaires',
        'Livraison prioritaire',
        'Cadeaux exclusifs'
      ]
    },
    {
      name: 'Expert',
      price: '329.000',
      description: 'Pour les cuisiniers professionnels',
      features: [
        'Tout du plan Gourmet',
        'Mélanges personnalisés',
        'Consultation privée',
        'Accès événements VIP',
        'Support 24/7'
      ]
    }
  ]
    return (
        <>
        <div className="bg-gradient-to-r from-red-50 to-red-100 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Choisissez l'Abonnement Qui Vous Correspond !
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Profitez de nos abonnements mensuels et annuels pour découvrir les saveurs authentiques des épices marocaines. 
              Recevez chaque mois des épices sélectionnées avec soin, des recettes exclusives et des avantages uniques. 
              Optez pour la flexibilité avec l'offre mensuelle ou économisez avec l'abonnement annuel !
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-12">PLANS</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                  <div 
                    key={plan.name} 
                    className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 transform hover:-translate-y-1"
                  >
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-red-600 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      <div className="text-4xl font-bold mb-6">
                        DH {plan.price}
                        <span className="text-gray-500 text-lg">/month</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Caractéristiques que vous obtenez :</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-600">
                            <Check className="h-5 w-5 text-green-500 mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button 
                    onClick={() => {
                      const message = encodeURIComponent(`Bonjour, je suis intéressé par : ${plan.name} (${plan.price}€)`);
                      const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
                      window.open(whatsappLink, '_blank');
                       }} 
                    className="w-full mt-8 bg-red-600 text-white py-3 rounded-full hover:bg-red-700 transition-colors duration-200">
                      Essayer
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Notre Passion pour les Épices Marocaines</h2>
            <p className="text-gray-600 mb-4">
              Chez ASSIL, nous sommes passionnés par l'art des épices marocaines. Notre mission est de vous faire découvrir 
              l'authenticité et la richesse des saveurs du Maroc à travers une sélection minutieuse d'épices de première qualité.
            </p>
            <p className="text-gray-600 mb-6">
              Chaque mois, nos experts parcourent les marchés traditionnels pour vous proposer les meilleures épices, 
              accompagnées de recettes exclusives et de conseils d'utilisation.
            </p>
            <a href="">
              <button className="bg-red-600 text-white py-3 px-6 rounded-full hover:bg-red-700 transition-colors duration-200">
              En savoir plus
            </button>
            </a>
          </div>
          <div className="relative h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Épices marocaines"
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
        </>
      
    )
  }