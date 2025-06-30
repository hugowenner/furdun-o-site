// src/sections/AboutSection.js
import React from 'react';
// Ícones e iconMap removidos/comentados pois não são mais usados nesta seção com o novo texto.
// Nenhuma importação de lucide-react aqui, pois não há ícones visuais nesta seção.

export default function AboutSection({ data }) {
  return (
    <section id={data.id} className="py-16 bg-gradient-to-r from-brown-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-brown-800 mb-6 font-slab">
              {data.title}
            </h2>
            <p className="text-xl text-brown-700 mb-6 leading-relaxed font-lora">
              {data.description}
            </p>
            {data.descriptionPart2 && (
              <p className="text-xl text-brown-700 mb-6 leading-relaxed font-lora">
                {data.descriptionPart2}
              </p>
            )}
            {/* O bloco de 'features' foi removido ou comentado, então não está mais usando 'iconMap' */}
          </div>
          <div className="relative">
            {data.imageSrc ? (
              <img
                src={data.imageSrc}
                alt={data.title}
                className="w-full h-96 object-cover rounded-3xl transform transition-transform duration-300 hover:scale-105 hover:rotate-3" // Adicionado hover effects
              />
            ) : (
              <div className="w-full h-96 bg-gradient-to-br from-brown-200 to-brown-300 rounded-3xl flex items-center justify-center text-8xl transform transition-transform duration-300 hover:scale-105 hover:rotate-3"> {/* Adicionado hover effects */}
                🌱 {/* Fallback caso a imagem não esteja definida */}
              </div>
            )}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brown-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brown-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}