import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { X, Server, Phone, Network, Cable, Shield, Wifi, Database } from 'lucide-react';

interface MDFDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MDFDetailsModal({ isOpen, onClose }: MDFDetailsModalProps) {
  const { language } = useLanguage();

  if (!isOpen) return null;

  const sections = [
    {
      title: language === 'ar' ? 'نظام الصوت' : 'Voice System',
      icon: <Phone className="w-5 h-5 text-orange-500" />,
      details: [
        { label: language === 'ar' ? 'السعة' : 'Capacity', value: '500 Extensions' },
        { label: language === 'ar' ? 'البوابة' : 'Gateway', value: 'E1/PRI Interface' },
        { label: language === 'ar' ? 'نظام البريد الصوتي' : 'Voicemail', value: 'Integrated' },
        { label: language === 'ar' ? 'تسجيل المكالمات' : 'Call Recording', value: '30 Days Storage' }
      ]
    },
    {
      title: language === 'ar' ? 'الشبكة الرئيسية' : 'Core Network',
      icon: <Network className="w-5 h-5 text-blue-500" />,
      details: [
        { label: language === 'ar' ? 'المحول الرئيسي' : 'Core Switch', value: 'L3 with 10G Uplinks' },
        { label: language === 'ar' ? 'الشبكات الافتراضية' : 'VLANs', value: 'Voice, Data, Management' },
        { label: language === 'ar' ? 'البروتوكولات' : 'Protocols', value: 'OSPF, RSTP, LACP' },
        { label: language === 'ar' ? 'الأمان' : 'Security', value: '802.1X, ACLs, Storm Control' }
      ]
    },
    {
      title: language === 'ar' ? 'نظام التوزيع' : 'Distribution System',
      icon: <Database className="w-5 h-5 text-purple-500" />,
      details: [
        { label: language === 'ar' ? 'لوحات الصوت' : 'Voice Panels', value: '24x RJ45 Cat6A' },
        { label: language === 'ar' ? 'لوحات البيانات' : 'Data Panels', value: '48x RJ45 Cat6A' },
        { label: language === 'ar' ? 'الألياف البصرية' : 'Fiber Panel', value: '24x LC Duplex OS2' },
        { label: language === 'ar' ? 'إدارة الكابلات' : 'Cable Management', value: 'Vertical + Horizontal' }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl shadow-2xl w-full max-w-4xl text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-blue-500/30">
          <div className="flex items-center gap-3">
            <Server className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-bold text-blue-100">
              {language === 'ar' ? 'تفاصيل غرفة التوزيع الرئيسية' : 'Main Distribution Frame Details'}
            </h2>
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
          {/* Main Sections */}
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

          {/* Technical Specifications */}
          <div className="bg-blue-950/30 rounded-lg p-4 border border-blue-500/30">
            <h3 className="font-semibold text-blue-200 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              {language === 'ar' ? 'المواصفات الفنية' : 'Technical Specifications'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="text-blue-300">Power System</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Redundant Power Supply</li>
                  <li>• UPS Backup: 30 Minutes</li>
                  <li>• Power Monitoring</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-blue-300">Environmental</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Temperature: 18-27°C</li>
                  <li>• Humidity: 45-55%</li>
                  <li>• Fire Suppression</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-blue-300">Security</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Access Control</li>
                  <li>• CCTV Monitoring</li>
                  <li>• Environmental Sensors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}