import Navbar from "./Navbar"
import Footer from "./Footer"
import React, { useState, useEffect } from 'react';
import {Facebook, Instagram, Twitter, MapPin, Phone, Mail} from 'lucide-react';
export default function Contact() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
    return (
        <>
        {/* Contact Section */}
      <main className="flex-grow bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold text-gray-900">Contactez-nous</h2>
            <p className="mt-4 text-lg text-gray-600">Nous sommes là pour vous aider et répondre à vos questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`bg-white rounded-lg shadow-lg p-8 transform transition-all duration-500 hover:shadow-xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full h-12 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 bg-transparent transition-colors duration-300"
                    placeholder="Nom complet"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
                    peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-red-600"
                  >
                    Nom complet
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full h-12 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 bg-transparent transition-colors duration-300"
                    placeholder="Email"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
                    peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-red-600"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="peer w-full h-12 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 bg-transparent transition-colors duration-300"
                    placeholder="Sujet"
                    required
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
                    peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-red-600"
                  >
                    Sujet
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 bg-transparent transition-colors duration-300 resize-none"
                    placeholder="Message"
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all duration-300
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
                    peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-red-600"
                  >
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-lg transform transition-all duration-300 hover:bg-red-700 hover:shadow-lg active:scale-98 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className={`bg-white rounded-lg shadow-lg p-8 contact-card ${isVisible ? 'animate-slideIn' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <MapPin className="h-6 w-6 text-red-700 mt-1 transform transition-transform group-hover:scale-110" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Notre adresse</h3>
                    <p className="mt-1 text-gray-600">123 Rue des Épices, Marrakech</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <Phone className="h-6 w-6 text-red-700 mt-1 transform transition-transform group-hover:scale-110" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
                    <p className="mt-1 text-gray-600">+212 603-956969</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <Mail className="h-6 w-6 text-red-700 mt-1 transform transition-transform group-hover:scale-110" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">assilspices@gmail.com</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="social-icon text-gray-600 hover:text-red-700">
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="social-icon text-gray-600 hover:text-red-700">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="social-icon text-gray-600 hover:text-red-700">
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
        </>
      
    )
  }