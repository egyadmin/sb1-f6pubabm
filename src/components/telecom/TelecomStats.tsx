import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Phone, Network, Wifi, Users } from 'lucide-react';

export default function TelecomStats() {
  const { language } = useLanguage();

  const stats = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: language === 'ar' ? 'خطوط الهاتف' : 'Phone Lines',
      value: '500',
      change: '+50'
    },
    {
      icon: <Network className="w-6 h-6 text-green-600" />,
      title: language === 'ar' ? 'نقاط البيانات' : 'Data Points',
      value: '288',
      change: '+24'
    },
    {
      icon: <Wifi className="w-6 h-6 text-purple-600" />,
      title: language === 'ar' ? 'نقاط الواي فاي' : 'WiFi Access Points',
      value: '24',
      change: '+6'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-600" />,
      title: language === 'ar' ? 'المستخدمين النشطين' : 'Active Users',
      value: '450',
      change: '+45'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-gray-50 rounded-lg">{stat.icon}</div>
            <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">{stat.title}</h3>
          <p className="mt-2 text-2xl font-semibold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}