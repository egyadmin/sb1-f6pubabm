import React, { useState } from 'react';
import { Server, Shield, Camera, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ControlRoomModal from './network/ControlRoomModal';

export default function EnhancedSystemDiagram() {
  const { language } = useLanguage();
  const [showControlRoom, setShowControlRoom] = useState(false);
  const isRTL = language === 'ar';

  const systems = [
    {
      icon: <Shield className="w-6 h-6 text-red-600" />,
      title: language === 'ar' ? 'نظام إنذار الحريق' : 'Fire Alarm System',
      color: 'border-red-500',
      components: language === 'ar' ? [
        'كواشف الدخان والحرارة',
        'نقاط الإنذار اليدوية',
        'أجهزة الإنذار الصوتي'
      ] : [
        'Smoke & Heat Detectors',
        'Manual Call Points',
        'Sounders & Strobes'
      ]
    },
    {
      icon: <Camera className="w-6 h-6 text-blue-600" />,
      title: language === 'ar' ? 'نظام المراقبة' : 'CCTV System',
      color: 'border-blue-500',
      components: language === 'ar' ? [
        'كاميرات المراقبة',
        'جهاز التسجيل NVR',
        'شاشات العرض'
      ] : [
        'CCTV Cameras',
        'NVR Recording Unit',
        'Display Monitors'
      ]
    },
    {
      icon: <Lock className="w-6 h-6 text-green-600" />,
      title: language === 'ar' ? 'نظام التحكم بالدخول' : 'Access Control',
      color: 'border-green-500',
      components: language === 'ar' ? [
        'قارئات البطاقات',
        'وحدات التحكم',
        'أقفال إلكترونية'
      ] : [
        'Card Readers',
        'Control Units',
        'Electronic Locks'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {systems.map((system, index) => (
          <div 
            key={index}
            className={`bg-white rounded-lg p-6 border-l-4 ${system.color} shadow-sm hover:shadow-md transition-all duration-300`}
          >
            <div className="flex items-center gap-3 mb-4">
              {system.icon}
              <h3 className="font-semibold text-lg">{system.title}</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              {system.components.map((component, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span>{component}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Central Control Room */}
      <div className="relative bg-gray-50 rounded-xl p-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            onClick={() => setShowControlRoom(true)}
            className="w-48 h-48 border-4 border-blue-200 rounded-full flex items-center justify-center bg-white shadow-lg cursor-pointer hover:border-blue-300 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center p-4">
              <Server className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-800">
                {language === 'ar' ? 'غرفة التحكم المركزية' : 'Central Control Room'}
              </div>
            </div>
          </div>
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <path
            d="M400,200 L200,100 M400,200 L600,100 M400,200 L200,300 M400,200 L600,300"
            className="stroke-blue-200"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Control Room Modal */}
      <ControlRoomModal 
        isOpen={showControlRoom} 
        onClose={() => setShowControlRoom(false)} 
      />
    </div>
  );
}