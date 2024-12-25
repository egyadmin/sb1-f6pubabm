import React from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';

export default function PanelLegend() {
  const { language } = useLanguage();

  const legendItems = [
    {
      type: 'fiber',
      color: 'bg-orange-500',
      label: language === 'ar' ? 'منافذ الألياف البصرية' : 'Fiber Ports'
    },
    {
      type: 'data',
      color: 'bg-blue-500',
      label: language === 'ar' ? 'منافذ البيانات' : 'Data Ports'
    },
    {
      type: 'voice',
      color: 'bg-green-500',
      label: language === 'ar' ? 'منافذ الصوت' : 'Voice Ports'
    }
  ];

  return (
    <div className="flex items-center justify-center gap-6">
      {legendItems.map((item) => (
        <div key={item.type} className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${item.color}`} />
          <span className="text-xs text-gray-300">{item.label}</span>
        </div>
      ))}
    </div>
  );
}