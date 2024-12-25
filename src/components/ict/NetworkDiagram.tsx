import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function NetworkDiagram() {
  const { language } = useLanguage();
  
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">
        {language === 'ar' ? 'مخطط الشبكة' : 'Network Layout'}
      </h3>
      
      <div className="relative w-full h-[500px] border-2 border-gray-200 rounded-lg bg-gray-50">
        {/* Primary Network */}
        <svg className="absolute inset-0 w-full h-full">
          {/* Main Ducts */}
          <path
            d="M100,250 H700"
            className="stroke-blue-500"
            strokeWidth="8"
            strokeDasharray="5,5"
            fill="none"
          />
          
          {/* Secondary Ducts */}
          <path
            d="M200,250 V150 M400,250 V150 M600,250 V150"
            className="stroke-blue-400"
            strokeWidth="4"
            fill="none"
          />
          
          {/* Manholes */}
          <circle cx="200" cy="250" r="10" className="fill-gray-600" />
          <circle cx="400" cy="250" r="10" className="fill-gray-600" />
          <circle cx="600" cy="250" r="10" className="fill-gray-600" />
          
          {/* Buildings */}
          <rect x="150" y="50" width="100" height="60" className="fill-white stroke-gray-400" />
          <rect x="350" y="50" width="100" height="60" className="fill-white stroke-gray-400" />
          <rect x="550" y="50" width="100" height="60" className="fill-white stroke-gray-400" />
        </svg>
        
        {/* Labels */}
        <div className="absolute top-[60px] left-[200px] transform -translate-x-1/2 bg-white p-2 rounded shadow text-sm">
          Building 1
        </div>
        <div className="absolute top-[60px] left-[400px] transform -translate-x-1/2 bg-white p-2 rounded shadow text-sm">
          Building 2
        </div>
        <div className="absolute top-[60px] left-[600px] transform -translate-x-1/2 bg-white p-2 rounded shadow text-sm">
          Building 3
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded" />
          <span>{language === 'ar' ? 'قناة رئيسية' : 'Main Duct'}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-400 rounded" />
          <span>{language === 'ar' ? 'قناة فرعية' : 'Secondary Duct'}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-600 rounded-full" />
          <span>{language === 'ar' ? 'غرفة تفتيش' : 'Manhole'}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border border-gray-400 bg-white" />
          <span>{language === 'ar' ? 'مبنى' : 'Building'}</span>
        </div>
      </div>
    </div>
  );
}