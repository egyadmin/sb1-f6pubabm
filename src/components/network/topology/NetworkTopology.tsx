import React from 'react';
import { Shield, Camera, Lock, Server } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import NetworkCard from './NetworkCard';

export default function NetworkTopology() {
  const { language } = useLanguage();

  const networks = [
    {
      title: language === 'ar' ? 'نظام إنذار الحريق' : 'Fire Alarm System',
      subnet: '10.1.1.0/24',
      icon: <Shield className="w-5 h-5 text-red-400" />,
      gradient: 'bg-gradient-to-br from-red-900/90 to-red-800/90',
      details: [
        'Admin Building: 10.1.1.11',
        'Operations Building: 10.1.1.21',
        'Services Building: 10.1.1.31',
        'Facilities Building: 10.1.1.41'
      ]
    },
    {
      title: language === 'ar' ? 'نظام المراقبة' : 'CCTV System',
      subnet: '10.1.2.0/24',
      icon: <Camera className="w-5 h-5 text-blue-400" />,
      gradient: 'bg-gradient-to-br from-blue-900/90 to-blue-800/90',
      details: [
        'Admin Building: 10.1.2.11',
        'Operations Building: 10.1.2.21',
        'Services Building: 10.1.2.31',
        'Facilities Building: 10.1.2.41'
      ]
    },
    {
      title: language === 'ar' ? 'نظام التحكم بالدخول' : 'Access Control',
      subnet: '10.1.3.0/24',
      icon: <Lock className="w-5 h-5 text-green-400" />,
      gradient: 'bg-gradient-to-br from-green-900/90 to-green-800/90',
      details: [
        'Admin Building: 10.1.3.11',
        'Operations Building: 10.1.3.21',
        'Services Building: 10.1.3.31',
        'Facilities Building: 10.1.3.41'
      ]
    },
    {
      title: language === 'ar' ? 'شبكة الإدارة' : 'Management Network',
      subnet: '10.1.0.0/24',
      icon: <Server className="w-5 h-5 text-purple-400" />,
      gradient: 'bg-gradient-to-br from-purple-900/90 to-purple-800/90',
      details: [
        'NVR System: 10.1.0.10',
        'Fire Alarm Panel: 10.1.0.11',
        'Access Control Server: 10.1.0.12',
        'Core Switch: 10.1.0.1'
      ]
    }
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-8">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2000&q=80')] opacity-10" />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {networks.map((network, index) => (
          <NetworkCard
            key={index}
            title={network.title}
            subnet={network.subnet}
            icon={network.icon}
            details={network.details}
            gradient={network.gradient}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
    </div>
  );
}