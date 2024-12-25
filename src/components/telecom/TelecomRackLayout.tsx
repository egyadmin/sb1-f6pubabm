import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Server, Shield } from 'lucide-react';

export default function TelecomRackLayout() {
  const { language } = useLanguage();

  const rackUnits = [
    {
      name: language === 'ar' ? 'نظام IP-PBX' : 'IP-PBX System',
      height: 2,
      details: '500 Extensions, Redundant Power'
    },
    {
      name: language === 'ar' ? 'بوابة الصوت' : 'Voice Gateway',
      height: 1,
      details: 'E1/PRI Interface'
    },
    {
      name: language === 'ar' ? 'لوحة توزيع الهاتف' : 'Voice Patch Panel',
      height: 2,
      details: '24x RJ45 Ports'
    },
    {
      name: language === 'ar' ? 'لوحة توزيع البيانات' : 'Data Patch Panel',
      height: 1,
      details: '48x Cat6A Ports'
    },
    {
      name: language === 'ar' ? 'لوحة الألياف البصرية' : 'Fiber Patch Panel',
      height: 1,
      details: '24x LC Duplex'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Server className="w-6 h-6 text-purple-600" />
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'تخطيط خزانة الاتصالات' : 'Telecom Rack Layout'}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          {rackUnits.map((unit, index) => (
            <div 
              key={index}
              className="border-2 border-gray-200 rounded-lg p-3"
              style={{ height: `${unit.height * 44}px` }}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{unit.name}</span>
                <span className="text-sm text-gray-500">{unit.details}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium mb-4">
            {language === 'ar' ? 'المواصفات الفنية' : 'Technical Specifications'}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>• Rack Height: 42U</li>
            <li>• Power: Redundant PDUs</li>
            <li>• Cooling: Forced Air</li>
            <li>• Cable Management: Vertical + Horizontal</li>
            <li>• Grounding: Dedicated Ground Bar</li>
          </ul>
        </div>
      </div>
    </div>
  );
}