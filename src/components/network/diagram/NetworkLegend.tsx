import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';

export default function NetworkLegend() {
  const { language } = useLanguage();
  
  return (
    <div className="absolute bottom-4 right-4 bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
      <h4 className="text-blue-100 font-medium mb-2">
        {language === 'ar' ? 'دليل الشبكة' : 'Network Legend'}
      </h4>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-blue-500/50"></div>
          <span className="text-blue-200">
            {language === 'ar' ? 'اتصال الألياف' : 'Fiber Connection'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-orange-500/30"></div>
          <span className="text-blue-200">
            {language === 'ar' ? 'اتصال نحاسي' : 'Copper Connection'}
          </span>
        </div>
      </div>
    </div>
  );
}