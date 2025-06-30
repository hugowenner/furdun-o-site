// src/sections/ServicesSection.js
import React from 'react';
import { ShoppingCart, Users, Award, Clock } from 'lucide-react'; //

const iconMap = {
  ShoppingCart: ShoppingCart, //
  Users: Users, //
  Award: Award, //
  Clock: Clock, //
};

export default function ServicesSection({ data }) {
  return (
    <section id={data.id} className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brown-800 mb-4 font-slab">{data.title}</h2> {/* */}
          <p className="text-xl text-brown-700 max-w-3xl mx-auto font-lora">{data.description}</p> {/* */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div key={idx} className="bg-gradient-to-br from-white to-brown-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center"> {/* */}
                <div className="w-16 h-16 bg-gradient-to-r from-brown-400 to-brown-500 rounded-2xl flex items-center justify-center mx-auto mb-4"> {/* */}
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brown-800 mb-2 font-slab">{feature.text}</h3> {/* */}
                <p className="text-brown-700 font-lora">{feature.subtext}</p> {/* */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}