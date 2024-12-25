import React from 'react';
import { Network } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import NetworkStats from '../components/ict/NetworkStats';
import NetworkDiagramDetail from '../components/ict/NetworkDiagramDetail';
import PrimaryNetwork from '../components/ict/PrimaryNetwork';
import SecondaryNetwork from '../components/ict/SecondaryNetwork';
import ICTCabinet from '../components/ict/ICTCabinet';
import InstallationGuide from '../components/ict/InstallationGuide';
import DuctileIronSection from '../components/ductile/DuctileIronSection';

export default function ICTNetworkPage() {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Network className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">
            {language === 'ar' ? 'شبكة تكنولوجيا المعلومات والاتصالات' : 'ICT Network Implementation'}
          </h1>
        </div>

        <div className="grid gap-8">
          <NetworkStats />
          <NetworkDiagramDetail />
          <PrimaryNetwork />
          <ICTCabinet />
          <SecondaryNetwork />
          <DuctileIronSection />
          <InstallationGuide />
        </div>
      </div>
    </div>
  );
}