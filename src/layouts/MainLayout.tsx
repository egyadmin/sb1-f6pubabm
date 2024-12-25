import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { QuantitiesButton, QuantitiesModal } from '../components/quantities';
import InstallationGuideContainer from '../components/installation/InstallationGuideContainer';
import MobileLayout from '../components/layouts/MobileLayout';

export default function MainLayout() {
  const [isQuantitiesModalOpen, setIsQuantitiesModalOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col safe-area-inset">
      <Header />
      {!isMobile && <Navigation />}
      <main className="flex-grow smooth-scroll pb-20 sm:pb-0">
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-8 w-full max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
      
      {/* Floating Buttons & Modals */}
      <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 flex flex-col gap-4 z-50">
        <InstallationGuideContainer />
        <QuantitiesButton onClick={() => setIsQuantitiesModalOpen(true)} />
      </div>
      
      <QuantitiesModal 
        isOpen={isQuantitiesModalOpen}
        onClose={() => setIsQuantitiesModalOpen(false)}
      />

      {/* Mobile Navigation */}
      {isMobile && <MobileLayout />}
    </div>
  );
}