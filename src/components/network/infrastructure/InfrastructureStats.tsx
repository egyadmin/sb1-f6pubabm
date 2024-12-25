import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Cable, Box, Network } from 'lucide-react';

export default function InfrastructureStats() {
  const { language } = useLanguage();

  const stats = [
    {
      icon: <Cable className="w-6 h-6 text-blue-600" />,
      title: language === 'ar' ? 'إجمالي طول القنوات' : 'Total Duct Length',
      value: '18,730',
      unit: 'm',
      details: language === 'ar' ? 'HDPE 110مم مع قنوات فرعية' : 'HDPE 110mm with subducts'
    },
    {
      icon: <Box className="w-6 h-6 text-gray-600" />,
      title: language === 'ar' ? 'غرف التفتيش' : 'Manholes',
      value: '28',
      unit: 'units',
      details: language === 'ar' ? 'نوع 1 و نوع 2' : 'Type-1 and Type-2'
    },
    {
      icon: <Network className="w-6 h-6 text-green-600" />,
      title: language === 'ar' ? 'نقاط الاتصال' : 'Connection Points',
      value: '42',
      unit: 'points',
      details: language === 'ar' ? 'موزعة على المباني' : 'Distributed across buildings'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-gray-50 rounded-lg">{stat.icon}</div>
            <div>
              <h3 className="font-medium text-gray-900">{stat.title}</h3>
              <p className="text-sm text-gray-500">{stat.details}</p>
            </div>
          </div>
          <div className="mt-2">
            <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
            <span className="ml-2 text-gray-600">{stat.unit}</span>
          </div>
        </div>
      ))}
    </div>
  );
}