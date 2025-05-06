import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900">ASSIL</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/Home" className="text-gray-900 hover:text-red-700 px-3 py-2 text-sm font-medium">ACCUEIL</Link>
            <Link to="/Epices" className="text-gray-900 hover:text-red-700 px-3 py-2 text-sm font-medium">EPICES</Link>
            <Link to="/Offre" className="text-gray-900 hover:text-red-700 px-3 py-2 text-sm font-medium">OFFRES</Link>
            <Link to="/Formation" className="text-gray-900 hover:text-red-700 px-3 py-2 text-sm font-medium">FORMATION</Link>
            <Link to="/Contact" className="text-gray-900 hover:text-red-700 px-3 py-2 text-sm font-medium">CONTACT</Link>
          </nav>

          {/* Desktop search and order */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Chercher..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors">
              Commander
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/Home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-red-700 hover:bg-red-50">ACCUEIL</Link>
            <Link to="/Epices" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-red-700 hover:bg-red-50">EPICES</Link>
            <Link to="/Offre" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-red-700 hover:bg-red-50">OFFRES</Link>
            <Link to="/Page404" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-red-700 hover:bg-red-50">FORMATION</Link>
            <Link to="/Contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-red-700 hover:bg-red-50">CONTACT</Link>     
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Chercher..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="w-full bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors">
                Commander
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;