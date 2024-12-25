import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FileText, Phone, Network, Server } from 'lucide-react';

export default function TelecomSpecs() {
  const { language } = useLanguage();

  const specs = [
    {
      title: language === 'ar' ? 'نظام الهاتف' : 'Telephone System',
      icon: <Phone className="w-6 h-6 text-green-600" />,
      details: [
        'IP-PBX System with 500 Extensions',
        'Voice Gateway Integration',
        'Voicemail System',
        'Call Recording',
        'IVR System'
      ]
    },
    {
      title: language === 'ar' ? 'البنية التحتية' : 'Infrastructure',
      icon: <Network className="w-6 h-6 text-blue-600" />,
      details: [
        'Cat6A Cabling for Data Points',
        'Multi-pair Voice Cables',
        'Fiber Optic Backbone',
        'Cable Management System',
        'Grounding System'
      ]
    },
    {
      title: language === 'ar' ? 'غرفة الاتصالات' : 'Telecom Room',
      icon: <Server className="w-6 h-6 text-purple-600" />,
      details: [
        'Main Distribution Frame',
        'Voice Patch Panels',
        'Data Patch Panels',
        'UPS System',
        'Environmental Monitoring'
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="w-6 h-6 text-gray-600" />
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'المواصفات الفنية' : 'Technical Specifications'}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specs.map((spec, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              {spec.icon}
              <h4 className="font-medium">{spec.title}</h4>
            </div>
            <ul className="space-y-2">
              {spec.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}