import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Cable } from 'lucide-react';

export default function DuctDetails() {
  const { language } = useLanguage();
  
  const ducts = [
    {
      id: 'duct1',
      name_ar: 'قناة HDPE 110مم مع 5 قنوات فرعية',
      name_en: '110mm HDPE with 5 subducts',
      specs_ar: ['قطر 110مم', '5 قنوات فرعية 32مم', 'مقاوم للتآكل'],
      specs_en: ['110mm diameter', '5x32mm subducts', 'Corrosion resistant'],
      quantity: 14460,
      unit: 'm'
    },
    {
      id: 'duct2',
      name_ar: 'قناة HDPE 110مم مع 7 قنوات فرعية',
      name_en: '110mm HDPE with 7 subducts',
      specs_ar: ['قطر 110مم', '7 قنوات فرعية 29مم', 'مقاوم للتآكل'],
      specs_en: ['110mm diameter', '7x29mm subducts', 'Corrosion resistant'],
      quantity: 4270,
      unit: 'm'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Cable className="w-5 h-5 text-blue-600" />
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'تفاصيل القنوات' : 'Duct Details'}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ducts.map(duct => (
          <div key={duct.id} className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">
              {language === 'ar' ? duct.name_ar : duct.name_en}
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {(language === 'ar' ? duct.specs_ar : duct.specs_en).map((spec, index) => (
                <li key={index}>• {spec}</li>
              ))}
              <li className="font-medium mt-2">
                {language === 'ar' 
                  ? `الكمية: ${duct.quantity} ${duct.unit}`
                  : `Quantity: ${duct.quantity} ${duct.unit}`}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}