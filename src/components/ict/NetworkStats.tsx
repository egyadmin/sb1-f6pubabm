import React from 'react';
import { Cable, Box, Router } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function NetworkStats() {
  const { language } = useLanguage();
  
  const stats = [
    {
      icon: <Cable className="w-8 h-8 text-blue-600" />,
      title: language === 'ar' ? 'إجمالي طول القنوات' : 'Total Duct Length',
      value: '18,730',
      unit: 'm',
      change: '+14%'
    },
    {
      icon: <Box className="w-8 h-8 text-purple-600" />,
      title: language === 'ar' ? 'غرف التفتيش' : 'Manholes',
      value: '28',
      unit: 'units',
      change: '+2'
    },
    {
      icon: <Router className="w-8 h-8 text-green-600" />,
      title: language === 'ar' ? 'نقاط الاتصال' : 'Connection Points',
      value: '42',
      unit: 'points',
      change: '+8'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-gray-50 rounded-lg">{stat.icon}</div>
            <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">{stat.title}</h3>
          <p className="mt-2 flex items-baseline">
            <span className="text-3xl font-semibold text-gray-900">{stat.value}</span>
            <span className="ml-2 text-sm text-gray-500">{stat.unit}</span>
          </p>
        </div>
      ))}
    </div>
  );
}