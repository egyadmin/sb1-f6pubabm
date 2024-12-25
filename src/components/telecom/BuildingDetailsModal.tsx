import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { X, Building, Network, Phone, Wifi, Shield, Cable } from 'lucide-react';

interface BuildingDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  building: {
    id: number;
    name: string;
    ips: {
      voice: string;
      data: string;
    };
  } | null;
}

export default function BuildingDetailsModal({ isOpen, onClose, building }: BuildingDetailsModalProps) {
  const { language } = useLanguage();

  if (!isOpen || !building) return null;

  const sections = [
    {
      title: language === 'ar' ? 'نظام الاتصالات' : 'Communication System',
      icon: <Phone className="w-5 h-5 text-orange-500" />,
      details: [
        { label: language === 'ar' ? 'عدد الخطوط' : 'Extensions', value: '50' },
        { label: language === 'ar' ? 'شبكة الصوت' : 'Voice Network', value: building.ips.voice },
        { label: language === 'ar' ? 'نوع الهواتف' : 'Phone Type', value: 'IP Phones' },
        { label: language === 'ar' ? 'خدمات إضافية' : 'Services', value: 'Voicemail, Conference' }
      ]
    },
    {
      title: language === 'ar' ? 'شبكة البيانات' : 'Data Network',
      icon: <Network className="w-5 h-5 text-blue-500" />,
      details: [
        { label: language === 'ar' ? 'شبكة البيانات' : 'Data Network', value: building.ips.data },
        { label: language === 'ar' ? 'نقاط الشبكة' : 'Data Points', value: '48 Points' },
        { label: language === 'ar' ? 'السرعة' : 'Speed', value: '1/10 Gbps' },
        { label: language === 'ar' ? 'نوع الكابلات' : 'Cable Type', value: 'Cat6A F/UTP' }
      ]
    },
    {
      title: language === 'ar' ? 'الأنظمة الأمنية' : 'Security Systems',
      icon: <Shield className="w-5 h-5 text-red-500" />,
      details: [
        { label: language === 'ar' ? 'كاميرات المراقبة' : 'CCTV', value: '8 Cameras' },
        { label: language === 'ar' ? 'نقاط الدخول' : 'Access Points', value: '4 Doors' },
        { label: language === 'ar' ? 'إنذار الحريق' : 'Fire Alarm', value: 'Addressable' },
        { label: language === 'ar' ? 'المراقبة' : 'Monitoring', value: '24/7 Central' }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl shadow-2xl w-full max-w-4xl text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-blue-500/30">
          <div className="flex items-center gap-3">
            <Building className="w-6 h-6 text-blue-400" />
            <div>
              <h2 className="text-xl font-bold text-blue-100">{building.name}</h2>
              <p className="text-sm text-blue-300">Building ID: {building.id}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-blue-800/50 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-blue-300" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Main Systems */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-blue-950/50 rounded-lg p-4 border border-blue-500/30 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  {section.icon}
                  <h3 className="font-semibold text-blue-200">{section.title}</h3>
                </div>
                <div className="space-y-2">
                  {section.details.map((detail, idx) => (
                    <div key={idx} className="text-sm">
                      <span className="text-blue-400">{detail.label}:</span>
                      <span className="ml-2 text-blue-100">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Infrastructure Details */}
          <div className="bg-blue-950/30 rounded-lg p-4 border border-blue-500/30">
            <h3 className="font-semibold text-blue-200 mb-4 flex items-center gap-2">
              <Cable className="w-5 h-5 text-blue-400" />
              {language === 'ar' ? 'تفاصيل البنية التحتية' : 'Infrastructure Details'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="text-blue-300">Cabling System</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Cat6A for Data Points</li>
                  <li>• Multi-pair Voice Cable</li>
                  <li>• Fiber Optic Backbone</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-blue-300">Network Equipment</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Access Switches</li>
                  <li>• Wireless APs</li>
                  <li>• UPS System</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-blue-300">Pathways</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Cable Trays</li>
                  <li>• Conduit System</li>
                  <li>• Floor Boxes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}