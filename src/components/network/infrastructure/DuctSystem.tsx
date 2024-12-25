import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';

export default function DuctSystem() {
  const { language } = useLanguage();

  return (
    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
      {/* Main Backbone Ducts */}
      <g className="duct-system">
        {/* Primary HDPE Ducts */}
        <path
          d="M200,400 H800"
          className="stroke-blue-500"
          strokeWidth="8"
          strokeDasharray="10,5"
          fill="none"
        />
        
        {/* Secondary HDPE Ducts */}
        <path
          d="M300,200 V600 M500,200 V600 M700,200 V600"
          className="stroke-blue-400"
          strokeWidth="6"
          strokeDasharray="8,4"
          fill="none"
        />

        {/* Building Connections */}
        <path
          d="M300,200 H200 M300,600 H200 M500,200 H400 M500,600 H400 M700,200 H600 M700,600 H600"
          className="stroke-green-400"
          strokeWidth="4"
          fill="none"
        />

        {/* Duct Labels */}
        <g className="text-xs">
          <text x="450" y="380" className="fill-blue-600 text-center">
            {language === 'ar' ? 'قناة HDPE رئيسية 110مم' : 'Main HDPE 110mm Duct'}
          </text>
          <text x="450" y="395" className="fill-blue-400 text-center">
            {language === 'ar' ? '5 قنوات فرعية' : '5 Subducts'}
          </text>
        </g>
      </g>
    </svg>
  );
}