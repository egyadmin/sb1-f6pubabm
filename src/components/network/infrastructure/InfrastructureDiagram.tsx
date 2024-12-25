import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Network } from 'lucide-react';
import BuildingLayout from './BuildingLayout';
import ManholeSystem from './ManholeSystem';
import DuctingSystem from './DuctingSystem';
import InfraLegend from './InfraLegend';

export default function InfrastructureDiagram() {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Network className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'مخطط البنية التحتية التفصيلي' : 'Detailed Infrastructure Layout'}
        </h3>
      </div>

      <div className="relative w-full h-[800px] bg-gray-50 rounded-lg overflow-hidden">
        <BuildingLayout />
        <ManholeSystem />
        <DuctingSystem />
        <InfraLegend />
      </div>
    </div>
  );
}