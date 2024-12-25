import React from 'react';
import { CircleDot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import DuctileIronSection from '../components/ductile/DuctileIronSection';
import DuctileIronDiagram from '../components/ductile/DuctileIronDiagram';
import InstallationSteps from '../components/ductile/InstallationSteps';

export default function DuctileIronPage() {
  const { language } = useLanguage();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-3 mb-8">
        <CircleDot className="w-8 h-8 text-gray-600" />
        <h1 className="text-3xl font-bold text-gray-800">
          {language === 'ar' ? 'أعمال الحديد الدكتايل' : 'Ductile Iron Works'}
        </h1>
      </div>

      <div className="space-y-8">
        <DuctileIronDiagram />
        <DuctileIronSection />
        <InstallationSteps />
      </div>
    </div>
  );
}