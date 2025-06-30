// src/sections/HeroSection.js

import React from 'react';
import { ChevronDown, ShoppingCart, Users, Heart, Leaf, ArrowRight } from 'lucide-react'; // Certifique-se de que todas essas importações são usadas ou remova as desnecessárias

const iconMap = {
  ShoppingCart: ShoppingCart,
  Users: Users,
  Heart: Heart,
  Leaf: Leaf,
  ArrowRight: ArrowRight,
};

export default function HeroSection({ data, isVisible }) {
  return (
    <section id="home" className="pt-24 pb-16 px-6">
      <div className="container mx-auto text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* NOVO: Imagem da logo ANTES do mainTitle */}
          <img
            src="/assets/logo.png" // Caminho para sua logo na pasta public/assets
            alt="Logo Furdunço"
            className="mb-6 mx-auto h-24 md:h-32 w-auto" // Adicione margem inferior, centralize e ajuste o tamanho
          />

         

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-brown-700 via-brown-600 to-brown-800 bg-clip-text text-transparent leading-tight font-slab">
            {data.mainTitle}<br />
            <span className="text-3xl md:text-4xl">
              {data.subTitle}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-brown-700 mb-8 max-w-3xl mx-auto whitespace-pre-line font-lora">
            {data.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-brown-500 to-brown-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all flex items-center space-x-2 font-lora">
              {React.createElement(iconMap[data.exploreButton.icon], { className: "w-5 h-5" })}
              <span>{data.exploreButton.text}</span>
            </button>
            <button className="border-2 border-brown-500 text-brown-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-brown-50 transition-colors flex items-center space-x-2 font-lora">
              {React.createElement(iconMap[data.producerButton.icon], { className: "w-5 h-5" })}
              <span>{data.producerButton.text}</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {data.cards.map((item, idx) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={idx} className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ${isVisible ? 'animate-pulse' : ''}`}>
                <div className="w-16 h-16 bg-gradient-to-r from-brown-400 to-brown-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brown-800 mb-2 font-slab">{item.title}</h3>
                <p className="text-brown-700 font-lora">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <ChevronDown className="w-8 h-8 text-brown-500 animate-bounce" />
      </div>
    </section>
  );
}