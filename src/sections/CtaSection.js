// src/sections/CtaSection.js
import React from 'react';
import { ArrowRight } from 'lucide-react'; //

const iconMap = {
  ArrowRight: ArrowRight, //
};

export default function CtaSection({ data }) {
  return (
    <section id={data.id} className="py-20 bg-gradient-to-r from-brown-700 to-brown-800"> {/* */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-slab"> {/* */}
          {data.title}
        </h2>
        <p className="text-xl text-brown-100 mb-8 max-w-2xl mx-auto font-lora"> {/* */}
          {data.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-brown-700 px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center space-x-2 font-lora"> {/* */}
            <span>{data.mainButton.text}</span>
            {React.createElement(iconMap[data.mainButton.icon], { className: "w-5 h-5" })}
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-brown-700 transition-all font-lora"> {/* */}
            {data.secondaryButton.text}
          </button>
        </div>
      </div>
    </section>
  );
}