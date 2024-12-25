import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function PrimaryNetwork() {
  const { language } = useLanguage();
  
  const primaryNetworkData = [
    {
      title: language === 'ar' ? 'قناة HDPE 110مم مع 5 قنوات فرعية' : '110mm HDPE with 5x32mm subducts',
      specs: language === 'ar' ? [
        'قطر رئيسي 110مم',
        '5 قنوات فرعية 32مم',
        'الطول: 14,460 متر',
        'السعر: 99.18 ريال/متر'
      ] : [
        'Main diameter: 110mm',
        '5x32mm subducts',
        'Length: 14,460m',
        'Rate: 99.18 SAR/m'
      ]
    },
    {
      title: language === 'ar' ? 'قناة HDPE 110مم مع 7 قنوات فرعية' : '110mm HDPE with 7x29mm subducts',
      specs: language === 'ar' ? [
        'قطر رئيسي 110مم',
        '7 قنوات فرعية 29مم',
        'الطول: 4,270 متر',
        'السعر: 133.67 ريال/متر'
      ] : [
        'Main diameter: 110mm',
        '7x29mm subducts',
        'Length: 4,270m',
        'Rate: 133.67 SAR/m'
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {primaryNetworkData.map((item, index) => (
        <div key={index} className="border rounded-lg p-6 bg-gray-50">
          <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
          <ul className="space-y-2">
            {item.specs.map((spec, specIndex) => (
              <li key={specIndex} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}