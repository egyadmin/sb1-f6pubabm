import React from 'react';
import { Radio } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import TelecomDiagram from '../components/telecom/TelecomDiagram';
import TelecomSpecs from '../components/telecom/TelecomSpecs';
import TelecomStats from '../components/telecom/TelecomStats';
import TelecomCabling from '../components/telecom/TelecomCabling';
import TelecomRackLayout from '../components/telecom/TelecomRackLayout';
import TelecomBOQ from '../components/telecom/TelecomBOQ';

export default function TelecommunicationPage() {
  const { language } = useLanguage();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Radio className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">
          {language === 'ar' ? 'نظام الاتصالات' : 'Telecommunication System'}
        </h1>
      </div>
      
      <div className="space-y-8">
        <TelecomStats />
        <TelecomDiagram />
        <TelecomBOQ />
        <TelecomCabling />
        <TelecomRackLayout />
        <TelecomSpecs />
      </div>
    </div>
  );
}