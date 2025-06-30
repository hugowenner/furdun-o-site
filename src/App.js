// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import Nichos from './sections/Nichos';
// import TestimonialsSection from './sections/TestimonialsSection'; // Já REMOVIDO
import InstagramSection from './sections/InstagramSection'; // <--- CORREÇÃO AQUI
import CtaSection from './sections/CtaSection';
import Footer from './sections/Footer';

import {
  headerData,
  heroData,
  aboutData,
  servicesData,
  nichosData,
  // testimonialsData, // REMOVA ESTA LINHA TAMBÉM da desestruturação
  ctaData,
  footerData
} from './data/data';

export default function FurduncoLanding() {
  const [isVisible, setIsVisible] = useState(false);
  // REMOVA ESTA LINHA: const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // REMOVA OU COMENTE TODO O BLOCO DO setInterval/clearInterval
    // Pois ele dependia de testimonialsData e setCurrentTestimonial
    /*
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
    */
  }, []); // Array de dependências vazio para rodar apenas uma vez ao montar

  return (
    <div className="min-h-screen bg-gradient-to-br from-brown-50 via-white to-brown-50">
      <Header data={headerData} />
      <HeroSection data={heroData} isVisible={isVisible} />
      <AboutSection data={aboutData} />
      <ServicesSection data={servicesData} />
      <Nichos data={nichosData} />
      {/* REMOVA ESTA LINHA: <TestimonialsSection data={testimonialsData} currentTestimonial={currentTestimonial} setCurrentTestimonial={setCurrentTestimonial} /> */}
      <InstagramSection /> {/* Mantenha esta linha */}
      <CtaSection data={ctaData} />
      <Footer data={footerData} />
    </div>
  );
}