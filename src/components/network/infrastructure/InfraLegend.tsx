import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Box, Building } from 'lucide-react';

export default function InfraLegend() {
  const { language } = useLanguage();

  const legendItems = [
    {
      icon: <Building className="w-4 h-4 text-blue-600" />,
      label: language === 'ar' ? 'المباني' : 'Buildings'
    },
    {
      icon: <Box className="w-4 h-4 text-gray-700" />,
      label: language === 'ar' ? 'غرف التفتيش' : 'Manholes'
    },
    {
      color: 'bg-blue-500',
      label: language === 'ar' ? 'قناة رئيسية HDPE 110mm' : 'Main HDPE 110mm Duct'
    },
    {
      color: 'bg-green-400',
      label: language === 'ar' ? 'قناة فرعية HDPE 32mm' : 'Secondary HDPE 32mm Duct'
    }
  ];

  return (
    <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border">
      <h4 className="font-medium mb-3">
        {language === 'ar' ? 'دليل المخطط' : 'Legend'}
      </h4>
      <div className="space-y-2">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {item.icon ? (
              item.icon
            ) : (
              <div className={`w-4 h-1 ${item.color} rounded`} />
            )}
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}