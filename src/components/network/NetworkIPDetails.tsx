import React from 'react';
import { Network, Shield, Camera, Lock, Server } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface NetworkSegment {
  name: string;
  subnet: string;
  icon: React.ReactNode;
  colorClass: string;
  devices: {
    name: string;
    ip: string;
  }[];
}

export default function NetworkIPDetails() {
  const { language } = useLanguage();

  const networkSegments: NetworkSegment[] = [
    {
      name: language === 'ar' ? 'نظام إنذار الحريق' : 'Fire Alarm System',
      subnet: '10.1.1.0/24',
      icon: <Shield className="w-5 h-5 text-red-600" />,
      colorClass: 'bg-red-50',
      devices: [
        { name: 'Admin Building', ip: '10.1.1.11' },
        { name: 'Operations Building', ip: '10.1.1.21' },
        { name: 'Services Building', ip: '10.1.1.31' },
        { name: 'Facilities Building', ip: '10.1.1.41' }
      ]
    },
    {
      name: language === 'ar' ? 'نظام المراقبة' : 'CCTV System',
      subnet: '10.1.2.0/24',
      icon: <Camera className="w-5 h-5 text-blue-600" />,
      colorClass: 'bg-blue-50',
      devices: [
        { name: 'Admin Building', ip: '10.1.2.11' },
        { name: 'Operations Building', ip: '10.1.2.21' },
        { name: 'Services Building', ip: '10.1.2.31' },
        { name: 'Facilities Building', ip: '10.1.2.41' }
      ]
    },
    {
      name: language === 'ar' ? 'نظام التحكم بالدخول' : 'Access Control',
      subnet: '10.1.3.0/24',
      icon: <Lock className="w-5 h-5 text-green-600" />,
      colorClass: 'bg-green-50',
      devices: [
        { name: 'Admin Building', ip: '10.1.3.11' },
        { name: 'Operations Building', ip: '10.1.3.21' },
        { name: 'Services Building', ip: '10.1.3.31' },
        { name: 'Facilities Building', ip: '10.1.3.41' }
      ]
    },
    {
      name: language === 'ar' ? 'شبكة الإدارة' : 'Management Network',
      subnet: '10.1.0.0/24',
      icon: <Server className="w-5 h-5 text-purple-600" />,
      colorClass: 'bg-purple-50',
      devices: [
        { name: 'NVR System', ip: '10.1.0.10' },
        { name: 'Fire Alarm Panel', ip: '10.1.0.11' },
        { name: 'Access Control Server', ip: '10.1.0.12' },
        { name: 'Core Switch', ip: '10.1.0.1' }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Network className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'تفاصيل عناوين IP' : 'IP Address Details'}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {networkSegments.map((segment, index) => (
          <div key={index} className={`${segment.colorClass} rounded-lg p-4`}>
            <div className="flex items-center gap-2 mb-3">
              {segment.icon}
              <div>
                <h4 className="font-medium">{segment.name}</h4>
                <code className="text-sm bg-white px-2 py-0.5 rounded">
                  {segment.subnet}
                </code>
              </div>
            </div>
            
            <div className="space-y-2">
              {segment.devices.map((device, deviceIndex) => (
                <div 
                  key={deviceIndex}
                  className="flex items-center justify-between bg-white bg-opacity-50 rounded p-2 text-sm"
                >
                  <span>{device.name}</span>
                  <code className="bg-white px-2 py-0.5 rounded text-gray-700">
                    {device.ip}
                  </code>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}