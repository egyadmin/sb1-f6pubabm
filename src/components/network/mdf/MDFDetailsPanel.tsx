import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { X, Server, Phone, Network, Cable, Database, Shield } from 'lucide-react';

interface MDFDetailsPanelProps {
  onClose: () => void;
}

export default function MDFDetailsPanel({ onClose }: MDFDetailsPanelProps) {
  const { language } = useLanguage();

  const sections = [
    {
      title: language === 'ar' ? 'نظام الاتصالات' : 'Communication System',
      icon: <Phone className="w-5 h-5 text-orange-500" />,
      details: [
        'IP-PBX System with 500 Extensions',
        'Voice Gateway with E1/PRI',
        'Voicemail System',
        'Call Recording System'
      ]
    },
    {
      title: language === 'ar' ? 'أنظمة الشبكات' : 'Network Systems',
      icon: <Network className="w-5 h-5 text-blue-500" />,
      details: [
        'Core Switch with 10G Uplinks',
        'Distribution Switches',
        'Network Management System',
        'QoS and Security Policies'
      ]
    },
    {
      title: language === 'ar' ? 'البنية التحتية' : 'Infrastructure',
      icon: <Cable className="w-5 h-5 text-purple-500" />,
      details: [
        'Fiber Optic Termination',
        'Voice Distribution Frames',
        'Cable Management System',
        'Environmental Monitoring'
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Server className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold">
            {language === 'ar' ? 'تفاصيل غرفة التوزيع الرئيسية' : 'Main Distribution Frame Details'}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              {section.icon}
              <h4 className="font-medium">{section.title}</h4>
            </div>
            <ul className="space-y-2">
              {section.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Technical Specifications */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-600" />
            {language === 'ar' ? 'المواصفات الفنية' : 'Technical Specifications'}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>• Rack Height: 42U Standard</li>
            <li>• Power: Redundant UPS System</li>
            <li>• Cooling: Precision AC</li>
            <li>• Access Control: Biometric</li>
          </ul>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            {language === 'ar' ? 'أنظمة الحماية' : 'Protection Systems'}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>• Fire Suppression System</li>
            <li>• Environmental Monitoring</li>
            <li>• CCTV Surveillance</li>
            <li>• Early Warning System</li>
          </ul>
        </div>
      </div>
    </div>
  );
}