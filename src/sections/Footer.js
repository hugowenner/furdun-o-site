// src/sections/Footer.js
import React from 'react';
import { Leaf, Instagram } from 'lucide-react'; // Removi importações de Facebook, Twitter, Linkedin para evitar warnings se não forem usadas

const iconMap = {
  Instagram: Instagram,
  // Se você tiver ícones personalizados para 'f', '@', 'in', importe-os e mapeie-os aqui.
  // Exemplo: 'f': NomeDoComponenteFacebook,
};

export default function Footer({ data }) {
  return (
    <footer className="bg-brown-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-brown-500 to-brown-600 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-slab">{data.logoText}</span>
            </div>
            <p className="text-brown-400 whitespace-pre-line font-lora">{data.description}</p>
            {data.socialButton && (
              <button className="bg-brown-600 text-white px-4 py-2 rounded-full text-sm mt-4 hover:bg-brown-700 transition-colors flex items-center space-x-2 font-lora">
                {/* Aqui presumimos que data.socialButton.icon é 'Instagram' e está no iconMap */}
                {React.createElement(iconMap[data.socialButton.icon], { className: "w-4 h-4" })}
                <span>{data.socialButton.text}</span>
              </button>
            )}
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-slab">Navegação</h4>
            <ul className="space-y-2 text-brown-400">
              {data.navigation.map((link, idx) => (
                <li key={idx}><a href={link.href} className="hover:text-brown-400 transition-colors font-lora">{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-slab">Suporte</h4>
            <ul className="space-y-2 text-brown-400">
              {data.support.map((link, idx) => (
                <li key={idx}><a href={link.href} className="hover:text-brown-400 transition-colors font-lora">{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-slab">Contato</h4>
            {data.contact.email && <p className="text-brown-400 mb-2 font-lora">📧 {data.contact.email}</p>}
            {data.contact.phone && <p className="text-brown-400 mb-4 font-lora">📱 {data.contact.phone}</p>}
            {data.address && <p className="text-brown-400 mb-4 font-lora">📍 {data.address}</p>}
            {data.contact.social && (
              <div className="flex space-x-4">
                {data.contact.social.map((social, idx) => {
                  const SocialIcon = iconMap[social.icon];
                  return (
                    <div key={idx} className="w-8 h-8 bg-brown-600 rounded-full flex items-center justify-center hover:bg-brown-700 transition-colors cursor-pointer">
                      {/* Removido o comentário de bloco que causava o erro de parsing */}
                      {SocialIcon ? <SocialIcon className="w-5 h-5 text-white" /> : <span className="text-sm text-white">{social.icon}</span>}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-brown-700 mt-8 pt-8 text-center text-brown-400">
          <p className="font-lora">{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
}