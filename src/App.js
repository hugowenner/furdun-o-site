// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import Nichos from './sections/Nichos';
import CtaSection from './sections/CtaSection';
import InstagramSection from './sections/InstagramSection';
import Footer from './sections/Footer';

import {
  headerData,
  heroData,
  aboutData,
  servicesData,
  nichosData,
  ctaData,
  footerData
} from './data/data';

export default function FurduncoLanding() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brown-50 via-white to-brown-50">
      <Header data={headerData} />
      <HeroSection data={heroData} isVisible={isVisible} />
      <AboutSection data={aboutData} />
      <ServicesSection data={servicesData} />
      <Nichos data={nichosData} />
      {/* A ordem foi invertida aqui: CtaSection agora vem antes de InstagramSection */}
      <CtaSection data={ctaData} />
      <InstagramSection />
      <Footer data={footerData} />
    </div>
  );
}
