import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Server } from 'lucide-react';

export default function CabinetDetails() {
  const { language } = useLanguage();
  
  const cabinets = [
    {
      id: 'cab1',
      name_ar: 'خزانة معدات 42U',
      name_en: '42U Equipment Cabinet',
      components_ar: [
        'لوحة توزيع الألياف البصرية - 12 منفذ',
        'لوحة توزيع CAT6A - 24 منفذ',
        'محول شبكة صناعي - 12 منفذ POE+',
        'وحدة توزيع الطاقة - 8 مخارج'
      ],
      components_en: [
        'Fiber Optic Patch Panel - 12 Ports',
        'CAT6A Patch Panel - 24 Ports',
        'Industrial Switch - 12 POE+ Ports',
        'Power Distribution Unit - 8 Outlets'
      ],
      quantity: 1
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Server className="w-5 h-5 text-purple-600" />
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'تفاصيل خزائن المعدات' : 'Cabinet Details'}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {cabinets.map(cabinet => (
          <div key={cabinet.id} className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">
              {language === 'ar' ? cabinet.name_ar : cabinet.name_en}
            </h4>
            <div className="text-sm text-gray-600">
              <h5 className="font-medium mb-1">
                {language === 'ar' ? 'المكونات:' : 'Components:'}
              </h5>
              <ul className="space-y-1">
                {(language === 'ar' ? cabinet.components_ar : cabinet.components_en).map((comp, index) => (
                  <li key={index}>• {comp}</li>
                ))}
              </ul>
              <p className="font-medium mt-2">
                {language === 'ar' 
                  ? `الكمية: ${cabinet.quantity}`
                  : `Quantity: ${cabinet.quantity}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}