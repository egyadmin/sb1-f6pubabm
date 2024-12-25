import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Box } from 'lucide-react';

export default function ManholeDetails() {
  const { language } = useLanguage();
  
  const manholes = [
    {
      id: 'mh1',
      name_ar: 'غرفة تفتيش ICT نوع 1',
      name_en: 'ICT Manhole Type-1',
      specs_ar: ['خرسانة مسلحة', 'مقاوم للماء', 'مع غطاء حديد'],
      specs_en: ['Reinforced concrete', 'Waterproof', 'With iron cover'],
      quantity: 27
    },
    {
      id: 'mh2',
      name_ar: 'غرفة تفتيش ICT نوع 2',
      name_en: 'ICT Manhole Type-2',
      specs_ar: ['خرسانة مسلحة', 'مقاوم للماء', 'مع غطاء حديد ثقيل'],
      specs_en: ['Reinforced concrete', 'Waterproof', 'With heavy-duty iron cover'],
      quantity: 1
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Box className="w-5 h-5 text-gray-600" />
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'تفاصيل غرف التفتيش' : 'Manhole Details'}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {manholes.map(manhole => (
          <div key={manhole.id} className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">
              {language === 'ar' ? manhole.name_ar : manhole.name_en}
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {(language === 'ar' ? manhole.specs_ar : manhole.specs_en).map((spec, index) => (
                <li key={index}>• {spec}</li>
              ))}
              <li className="font-medium mt-2">
                {language === 'ar' 
                  ? `الكمية: ${manhole.quantity}`
                  : `Quantity: ${manhole.quantity}`}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}