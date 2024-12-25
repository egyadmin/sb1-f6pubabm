import React from 'react';
import { Server, Shield, Network, Database, Power, Activity } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import MDFSystemCard from './cards/MDFSystemCard';
import MDFConnectionCard from './cards/MDFConnectionCard';

export default function MDFLayout() {
  const { language } = useLanguage();

  const systems = [
    {
      title: language === 'ar' ? 'نظام الشبكة الرئيسي' : 'Core Network System',
      icon: <Network className="w-5 h-5 text-blue-300" />,
      gradient: 'from-blue-600/90 via-blue-700/90 to-blue-800/90',
      details: [
        { label: 'Switch', value: 'L3 10G SFP+' },
        { label: 'VLANs', value: 'Segmented' },
        { label: 'Ports', value: '48x PoE+' },
        { label: 'Throughput', value: '960 Gbps' }
      ]
    },
    {
      title: language === 'ar' ? 'نظام الأمان' : 'Security System',
      icon: <Shield className="w-5 h-5 text-red-300" />,
      gradient: 'from-red-600/90 via-red-700/90 to-red-800/90',
      details: [
        { label: 'Fire Panel', value: 'Addressable' },
        { label: 'Access', value: 'Controlled' },
        { label: 'CCTV', value: 'IP Based' },
        { label: 'Monitoring', value: '24/7' }
      ]
    }
  ];

  const connections = [
    {
      title: language === 'ar' ? 'توصيلات الشبكة' : 'Network Connections',
      icon: <Database className="w-5 h-5 text-purple-300" />,
      gradient: 'from-purple-600/90 via-purple-700/90 to-purple-800/90',
      details: [
        { type: 'Fiber', count: '24 cores' },
        { type: 'Copper', count: '96 pairs' },
        { type: 'Uplinks', count: '10G' }
      ]
    },
    {
      title: language === 'ar' ? 'نظام الطاقة' : 'Power System',
      icon: <Power className="w-5 h-5 text-green-300" />,
      gradient: 'from-green-600/90 via-green-700/90 to-green-800/90',
      details: [
        { type: 'UPS', count: '6KVA' },
        { type: 'PDU', count: '2x Redundant' },
        { type: 'Backup', count: '4 Hours' }
      ]
    }
  ];

  const stats = [
    {
      title: language === 'ar' ? 'معدل نقل البيانات' : 'Data Transfer Rate',
      value: '2.4 TB/day',
      change: '+18%',
      icon: <Activity className="w-4 h-4 text-emerald-300" />
    },
    {
      title: language === 'ar' ? 'توافر النظام' : 'System Uptime',
      value: '99.99%',
      change: '+0.1%',
      icon: <Server className="w-4 h-4 text-blue-300" />
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-xl p-8 border border-blue-500/30">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2000&q=80')] opacity-5" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b border-blue-500/30 pb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-900/50 rounded-xl ring-1 ring-blue-500/30">
              <Server className="w-8 h-8 text-blue-300" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {language === 'ar' ? 'غرفة التوزيع الرئيسية' : 'Main Distribution Frame'}
              </h3>
              <p className="text-blue-300">
                {language === 'ar' ? 'مركز الاتصالات المركزي' : 'Central Communications Hub'}
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-blue-950/50 rounded-lg p-3 border border-blue-500/30">
                <div className="flex items-center gap-2 mb-1">
                  {stat.icon}
                  <span className="text-sm text-blue-300">{stat.title}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-emerald-400">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {systems.map((system, index) => (
            <MDFSystemCard key={index} {...system} />
          ))}
        </div>

        {/* Connections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {connections.map((connection, index) => (
            <MDFConnectionCard key={index} {...connection} />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
    </div>
  );
}