import React from 'react';
import { Settings, Router, Shield, Camera, Lock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import DeviceConfigCard from './DeviceConfigCard';

export default function NetworkDeviceConfigs() {
  const { language } = useLanguage();

  const deviceConfigs = [
    {
      title: language === 'ar' ? 'إعدادات السويتش الرئيسي' : 'Core Switch Configuration',
      icon: <Router className="w-5 h-5 text-blue-600" />,
      colorClass: 'bg-blue-50 border-blue-200',
      configs: [
        { label: 'Management VLAN', value: 'VLAN 10' },
        { label: 'Management IP', value: '10.1.0.1/24' },
        { label: 'Spanning Tree', value: 'RSTP' },
        { label: 'SNMP Location', value: 'Main Control Room' },
        { label: 'Uplink Ports', value: '10G SFP+' },
        { label: 'QoS Policy', value: 'Strict Priority' }
      ]
    },
    {
      title: language === 'ar' ? 'إعدادات سويتش كاميرات المراقبة' : 'CCTV Switch Configuration',
      icon: <Camera className="w-5 h-5 text-blue-600" />,
      colorClass: 'bg-blue-50 border-blue-200',
      configs: [
        { label: 'VLAN ID', value: 'VLAN 20' },
        { label: 'Switch IP', value: '10.1.1.1/24' },
        { label: 'PoE Budget', value: '740W' },
        { label: 'Port Security', value: 'MAC Limit' },
        { label: 'Storm Control', value: 'Enabled' }
      ]
    },
    {
      title: language === 'ar' ? 'إعدادات سويتش إنذار الحريق' : 'Fire Alarm Switch Configuration',
      icon: <Shield className="w-5 h-5 text-red-600" />,
      colorClass: 'bg-red-50 border-red-200',
      configs: [
        { label: 'VLAN ID', value: 'VLAN 30' },
        { label: 'Switch IP', value: '10.1.2.1/24' },
        { label: 'QoS Priority', value: 'High' },
        { label: 'IGMP Snooping', value: 'Enabled' },
        { label: 'Port Isolation', value: 'Enabled' }
      ]
    },
    {
      title: language === 'ar' ? 'إعدادات سويتش التحكم بالدخول' : 'Access Control Switch Configuration',
      icon: <Lock className="w-5 h-5 text-green-600" />,
      colorClass: 'bg-green-50 border-green-200',
      configs: [
        { label: 'VLAN ID', value: 'VLAN 40' },
        { label: 'Switch IP', value: '10.1.3.1/24' },
        { label: 'ACL Policy', value: 'Strict' },
        { label: 'DHCP Snooping', value: 'Enabled' },
        { label: 'Port Security', value: 'Enabled' }
      ]
    }
  ];

  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="w-6 h-6 text-gray-600" />
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'تفاصيل إعدادات الأجهزة' : 'Device Configuration Details'}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {deviceConfigs.map((device, index) => (
          <DeviceConfigCard
            key={index}
            title={device.title}
            icon={device.icon}
            configs={device.configs}
            colorClass={device.colorClass}
          />
        ))}
      </div>
    </div>
  );
}