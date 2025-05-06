import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">ASSIL</h3>
            <p className="text-sm">
              Découvrez l'authenticité des épices marocaines avec ASSIL. 
              Notre passion est de vous offrir les meilleures saveurs du Maroc.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#epices" className="hover:text-red-500 transition-colors">Nos Épices</a>
              </li>
              <li>
                <a href="#offres" className="hover:text-red-500 transition-colors">Offres Spéciales</a>
              </li>
              <li>
                <a href="#formation" className="hover:text-red-500 transition-colors">Formation</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-red-500" />
                <span>123 Rue des Épices, Marrakech</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-red-500" />
                <span>+212 603-956969</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-red-500" />
                <span>assilspices@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            <p className="text-sm">
              Inscrivez-vous pour recevoir nos dernières offres et nouveautés.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="w-full bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ASSIL. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;