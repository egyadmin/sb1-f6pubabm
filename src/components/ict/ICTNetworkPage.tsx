import React from 'react';
import { Network } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import NetworkDiagram from './NetworkDiagram';
import DuctDetails from './DuctDetails';
import ManholeDetails from './ManholeDetails';
import CabinetDetails from './CabinetDetails';
import { ductData, manholeData, cabinetData } from '../../data/ictData';

export default function ICTNetworkPage() {
  const { language } = useLanguage();
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center gap-3 mb-8">
        <Network className="w-8 h-8 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">
          {language === 'ar' ? 'شبكة تكنولوجيا المعلومات والاتصالات' : 'ICT Network Implementation'}
        </h2>
      </div>
      
      <div className="grid gap-8">
        <NetworkDiagram />
        <DuctDetails ducts={ductData} />
        <ManholeDetails manholes={manholeData} />
        <CabinetDetails cabinets={cabinetData} />
      </div>
    </div>
  );
}