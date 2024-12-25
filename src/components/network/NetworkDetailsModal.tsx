import React from 'react';
import { X, Network, Server, Shield, Cable } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface NetworkDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NetworkDetailsModal({ isOpen, onClose }: NetworkDetailsModalProps) {
  const { language } = useLanguage();

  if (!isOpen) return null;

  const sections = [
    {
      title: language === 'ar' ? 'مواصفات القنوات' : 'Duct Specifications',
      icon: <Cable className="w-5 h-5 text-blue-500" />,
      details: [
        { label: 'Main Duct', value: 'HDPE 110mm' },
        { label: 'Subducts', value: '5x32mm & 7x29mm' },
        { label: 'Total Length', value: '18,730m' },
        { label: 'Depth', value: '1000mm below ground' }
      ]
    },
    {
      title: language === 'ar' ? 'غرف التفتيش' : 'Manhole System',
      icon: <Shield className="w-5 h-5 text-purple-500" />,
      details: [
        { label: 'Type-1 Quantity', value: '27 units' },
        { label: 'Type-2 Quantity', value: '1 unit' },
        { label: 'Construction', value: 'Reinforced Concrete' },
        { label: 'Cover Type', value: 'Heavy Duty Iron' }
      ]
    },
    {
      title: language === 'ar' ? 'الكابلات' : 'Cabling System',
      icon: <Cable className="w-5 h-5 text-green-500" />,
      details: [
        { label: 'Fiber Type', value: 'Single-mode OS2' },
        { label: 'Core Count', value: '24 cores per cable' },
        { label: 'Data Cable', value: 'Cat6A F/UTP' },
        { label: 'Voice Cable', value: 'Multi-pair UTP' }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <Network className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold">
              {language === 'ar' ? 'تفاصيل شبكة ICT' : 'ICT Network Details'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Technical Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                  {section.icon}
                  <h3 className="font-semibold">{section.title}</h3>
                </div>
                <div className="space-y-2">
                  {section.details.map((detail, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-gray-600">{detail.label}:</span>
                      <span className="font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <Server className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold">
                {language === 'ar' ? 'معلومات إضافية' : 'Additional Information'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">Standards Compliance</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• ISO/IEC 11801 Ed.3</li>
                  <li>• ANSI/TIA-568.3-D</li>
                  <li>• EN 50173-1:2018</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Testing & Certification</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• OTDR Testing for Fiber</li>
                  <li>• Cat6A Channel Testing</li>
                  <li>• Duct Pressure Testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}