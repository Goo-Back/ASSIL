import Navbar from "./Navbar"
import Footer from "./Footer"
import ProductTop from "./ProductTop"
import ProductNouv from "./ProductNouv"
import React, { useState, useEffect } from 'react';
import {Facebook, Instagram, Twitter, MapPin, Phone, Mail, Star} from 'lucide-react';
export default function Home() {
    return (
        <>
        <section className="relative pt-20 pb-32 bg-gradient-to-r from-red-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-red-700 bg-opacity-10 px-4 py-2 rounded-full">
              <span className="text-red-700 font-medium">Bienvenue à Assil</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Découvrez l'Authenticité des Épices Marocaines
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl">
              Découvrez la richesse des épices marocaines, un mélange de saveurs authentiques et d'arômes envoûtants. 
              Du curcuma au cumin, chaque épice reflète un savoir-faire ancestral.
            </p>
            
            <button className="bg-red-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-800 transition-colors">
              Explorer
            </button>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-amber-500/20 rounded-[2.5rem] transform rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Moroccan Spices"
                className="relative rounded-[2rem] w-full shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* TOP VENTS */}
    <ProductTop></ProductTop>
    <ProductNouv></ProductNouv>
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">À Propos de Nous</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Bienvenue chez ASSIL, votre référence en matière d'épices marocaines authentiques. 
                Fondée avec passion, notre mission est de faire découvrir la richesse des saveurs 
                du Maroc à travers une sélection d'épices 100% naturelles et de qualité supérieure.
              </p>
              <p>
                Chez ASSIL, nous mettons un point d'honneur à préserver les traditions culinaires 
                marocaines en collaborant avec des producteurs locaux. Chaque épice que nous proposons 
                est soigneusement choisie pour son arôme unique et son authenticité.
              </p>
              <p>
                Plongez dans un univers de saveurs exquises et laissez-vous séduire par la magie 
                des épices marocaines. Avec ASSIL, chaque repas devient un voyage sensoriel inoubliable.
              </p>
            </div>
            <button className="bg-red-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-800 transition-colors">
              Explorer
            </button>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="ASSIL spices presentation"
              className="w-full h-80 object-cover rounded-lg col-span-2"
            />
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Moroccan spices display"
              className="w-full h-40 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Spice variety showcase"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
        </>
      
    )
  }