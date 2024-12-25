import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ImplementationDiagram() {
  const { language } = useLanguage();
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">
        {language === 'ar' ? 'مخطط التنفيذ' : 'Implementation Diagram'}
      </h2>
      
      <div className="relative w-full h-[600px] border-2 border-gray-200 rounded-lg">
        {/* Main Duct Route */}
        <svg className="absolute inset-0 w-full h-full">
          <path
            d="M100,300 H500"
            className="stroke-blue-500"
            strokeWidth="8"
            strokeDasharray="5,5"
            fill="none"
          />
          
          {/* Vertical Connections */}
          <path
            d="M200,300 V200 M300,300 V200 M400,300 V200"
            className="stroke-blue-400"
            strokeWidth="4"
            fill="none"
          />
          
          {/* Manholes */}
          <circle cx="200" cy="300" r="10" className="fill-gray-600" />
          <circle cx="300" cy="300" r="10" className="fill-gray-600" />
          <circle cx="400" cy="300" r="10" className="fill-gray-600" />
        </svg>
        
        {/* Labels */}
        <div className="absolute top-40 left-1/4 transform -translate-x-1/2 bg-white p-2 rounded shadow">
          {language === 'ar' ? 'غرفة تفتيش نوع 1' : 'Manhole Type-1'}
        </div>
        
        <div className="absolute bottom-20 w-full text-center text-sm text-gray-600">
          {language === 'ar' 
            ? 'قناة HDPE رئيسية مع قنوات فرعية'
            : 'Main HDPE Duct with Subducts'}
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded" />
          <span>{language === 'ar' ? 'قناة رئيسية' : 'Main Duct'}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-600 rounded-full" />
          <span>{language === 'ar' ? 'غرفة تفتيش' : 'Manhole'}</span>
        </div>
      </div>
    </div>
  );
}