import React from 'react';
import { Server, Activity } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

export default function RackHeader() {
  const { language } = useLanguage();
  
  const stats = [
    {
      label: language === 'ar' ? 'حالة النظام' : 'System Status',
      value: 'Online',
      change: '99.99%'
    },
    {
      label: language === 'ar' ? 'استخدام الموارد' : 'Resource Usage',
      value: '68%',
      change: '+2%'
    }
  ];
  
  return (
    <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-sm">
          <Server className="w-8 h-8 text-gray-900" />
        </div>
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {language === 'ar' ? 'تخطيط خزانة غرفة التحكم' : 'Control Room Rack Layout'}
          </h2>
          <p className="text-gray-600">
            {language === 'ar' ? 'مركز إدارة الأنظمة المتكاملة' : 'Integrated Systems Management Center'}
          </p>
        </div>
      </div>

      <div className="flex gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">{stat.label}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-gray-900">{stat.value}</span>
              <span className="text-xs text-green-600">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}