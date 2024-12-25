import React from 'react';
import { Server, Wifi, Cable } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ICTCabinet() {
  const { language } = useLanguage();

  const cabinetData = {
    mainCabinet: {
      title: language === 'ar' ? 'خزانة المعدات الرئيسية 42U' : '42U Main Equipment Cabinet',
      price: 47256.00,
      components: language === 'ar' ? [
        'لوحة توزيع الألياف البصرية - 12 منفذ',
        'لوحة توزيع CAT6A - 24 منفذ',
        'محول شبكة صناعي - 12 منفذ POE+',
        'وحدة توزيع الطاقة - 8 مخارج'
      ] : [
        'Fiber Optic Patch Panel - 12 Ports',
        'CAT6A Patch Panel - 24 Ports',
        'Industrial Switch - 12 POE+ Ports',
        'Power Distribution Unit - 8 Outlets'
      ]
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="border rounded-lg p-6 bg-gray-50">
        <div className="flex items-center gap-3 mb-4">
          <Server className="w-6 h-6 text-purple-600" />
          <h3 className="text-lg font-semibold">{cabinetData.mainCabinet.title}</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">
              {language === 'ar' ? 'المكونات الرئيسية' : 'Main Components'}
            </h4>
            <ul className="space-y-2">
              {cabinetData.mainCabinet.components.map((component, index) => (
                <li key={index} className="flex items-center gap-2">
                  {index % 2 === 0 ? 
                    <Cable className="w-4 h-4 text-blue-500" /> : 
                    <Wifi className="w-4 h-4 text-green-500" />
                  }
                  <span>{component}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-3">
              {language === 'ar' ? 'التفاصيل الفنية' : 'Technical Details'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>{language === 'ar' ? 'ارتفاع: 42U قياسي' : 'Height: Standard 42U'}</li>
              <li>{language === 'ar' ? 'عرض: 600مم' : 'Width: 600mm'}</li>
              <li>{language === 'ar' ? 'عمق: 1000مم' : 'Depth: 1000mm'}</li>
              <li>{language === 'ar' ? 'السعر: ' : 'Price: '}{cabinetData.mainCabinet.price.toLocaleString()} {language === 'ar' ? 'ريال' : 'SAR'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}