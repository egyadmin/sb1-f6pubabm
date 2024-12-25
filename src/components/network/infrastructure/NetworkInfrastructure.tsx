import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Network } from 'lucide-react';
import InfrastructureStats from './InfrastructureStats';
import PatchPanel from './PatchPanel';
import DuctSystem from './DuctSystem';
import ManholeSystem from './ManholeSystem';
import ConnectionPoints from './ConnectionPoints';

export default function NetworkInfrastructure() {
  const { language } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Infrastructure Statistics */}
      <InfrastructureStats />

      {/* Main Infrastructure Diagram */}
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <Network className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold">
            {language === 'ar' ? 'مخطط البنية التحتية' : 'Infrastructure Layout'}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Patch Panel Section */}
          <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg p-6">
            <h4 className="text-white font-medium mb-4">
              {language === 'ar' ? 'لوحة التوصيل الرئيسية' : 'Main Patch Panel'}
            </h4>
            <PatchPanel />
          </div>

          {/* Infrastructure Layout */}
          <div className="relative h-[600px] bg-gray-50/90 backdrop-blur-sm rounded-lg overflow-hidden">
            <DuctSystem />
            <ManholeSystem />
            <ConnectionPoints />
          </div>
        </div>
      </div>
    </div>
  );
}