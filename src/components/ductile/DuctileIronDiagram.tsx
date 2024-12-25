import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Pipe, CircleDot, Box } from 'lucide-react';

export default function DuctileIronDiagram() {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <CircleDot className="w-6 h-6 text-gray-600" />
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'مخطط شبكة الحديد الدكتايل' : 'Ductile Iron Network Layout'}
        </h3>
      </div>

      <div className="relative w-full h-[600px] bg-gray-50 rounded-lg overflow-hidden">
        {/* Main Pipeline */}
        <svg className="absolute inset-0 w-full h-full">
          {/* Main Line */}
          <path
            d="M100,300 H900"
            className="stroke-gray-600"
            strokeWidth="8"
            fill="none"
          />
          
          {/* Branch Lines */}
          <path
            d="M300,300 V150 M500,300 V150 M700,300 V150"
            className="stroke-gray-500"
            strokeWidth="6"
            fill="none"
          />

          {/* Valves */}
          <circle cx="300" cy="300" r="12" className="fill-blue-500" />
          <circle cx="500" cy="300" r="12" className="fill-blue-500" />
          <circle cx="700" cy="300" r="12" className="fill-blue-500" />

          {/* Manholes */}
          <rect x="280" y="130" width="40" height="40" className="fill-gray-400" />
          <rect x="480" y="130" width="40" height="40" className="fill-gray-400" />
          <rect x="680" y="130" width="40" height="40" className="fill-gray-400" />
        </svg>

        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow">
          <h4 className="font-medium mb-2">
            {language === 'ar' ? 'دليل المخطط' : 'Legend'}
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-gray-600"></div>
              <span>{language === 'ar' ? 'خط رئيسي' : 'Main Line'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-gray-500"></div>
              <span>{language === 'ar' ? 'خط فرعي' : 'Branch Line'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <span>{language === 'ar' ? 'محبس' : 'Valve'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-400"></div>
              <span>{language === 'ar' ? 'غرفة تفتيش' : 'Manhole'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}