// src/sections/Header.js
import React from 'react';
// Remova a importação do Leaf, pois não será mais usado
// import { Leaf } from 'lucide-react';

export default function Header({ data }) {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Bloco da Logo: IMAGEM + texto "Furdunço" */}
        <div className="flex items-center space-x-2">
          {/* Imagem da Logo em PNG */}
          <img
            src="/assets/logo.png" // <--- ALtere este caminho para o nome real do seu arquivo PNG
            alt="Logo Furdunço Colaborativa" // Texto alternativo para acessibilidade
            className="h-10 w-auto" // Ajuste 'h-10' (altura) e 'w-auto' (largura automática) conforme o tamanho desejado da sua logo
          />
          {/* Texto "Furdunço" */}
          <span className="text-2xl font-bold bg-gradient-to-r from-brown-700 to-brown-900 bg-clip-text text-transparent">
            {data.logoText}
          </span>
        </div>

        {/* Navegação Principal */}
        <nav className="hidden md:flex space-x-8">
          {data.navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="text-gray-700 hover:text-brown-600 transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botão de Ação */}
        <button className="bg-gradient-to-r from-brown-500 to-brown-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
          {data.buttonText}
        </button>
      </div>
    </header>
  );
}