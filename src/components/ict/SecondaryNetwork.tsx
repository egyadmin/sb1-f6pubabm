import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function SecondaryNetwork() {
  const { language } = useLanguage();

  const secondaryNetworkData = {
    ducts: {
      title: language === 'ar' ? 'قنوات 32مم HDPE' : '32mm HDPE Ducts',
      details: language === 'ar' ? [
        'قطر 32مم',
        'مقاوم للتآكل',
        'متوافق مع المعايير الدولية',
        'السعر: 166.44 ريال/متر'
      ] : [
        '32mm diameter',
        'Corrosion resistant',
        'International standards compliant',
        'Rate: 166.44 SAR/m'
      ]
    },
    accessories: {
      title: language === 'ar' ? 'ملحقات الشبكة' : 'Network Accessories',
      items: language === 'ar' ? [
        'موصلات HDPE',
        'مواد منع التسرب',
        'أغطية حماية',
        'مواد تثبيت'
      ] : [
        'HDPE connectors',
        'Sealing materials',
        'Protection covers',
        'Fixing materials'
      ]
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border rounded-lg p-6 bg-gray-50">
        <h3 className="text-lg font-semibold mb-4">{secondaryNetworkData.ducts.title}</h3>
        <ul className="space-y-2">
          {secondaryNetworkData.ducts.details.map((detail, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="border rounded-lg p-6 bg-gray-50">
        <h3 className="text-lg font-semibold mb-4">{secondaryNetworkData.accessories.title}</h3>
        <ul className="space-y-2">
          {secondaryNetworkData.accessories.items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}