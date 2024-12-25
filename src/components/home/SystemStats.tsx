import React from 'react';
import { Activity, DollarSign, Package, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function SystemStats() {
  const { language } = useLanguage();
  
  const stats = [
    {
      icon: <Package className="w-6 h-6 text-blue-600" />,
      title: language === 'ar' ? 'إجمالي المعدات' : 'Total Equipment',
      value: '14,519',
      change: '+12%',
      bgGradient: 'from-blue-50 via-blue-100/50 to-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      title: language === 'ar' ? 'القيمة الإجمالية' : 'Total Value',
      value: '8.2M SAR',
      change: '+15%',
      bgGradient: 'from-green-50 via-green-100/50 to-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: <Activity className="w-6 h-6 text-purple-600" />,
      title: language === 'ar' ? 'نسبة الإنجاز' : 'Completion Rate',
      value: '68%',
      change: '+5%',
      bgGradient: 'from-purple-50 via-purple-100/50 to-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-600" />,
      title: language === 'ar' ? 'فريق العمل' : 'Team Size',
      value: '24',
      change: '+2',
      bgGradient: 'from-orange-50 via-orange-100/50 to-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className={`relative overflow-hidden bg-gradient-to-br ${stat.bgGradient} rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border ${stat.borderColor}`}
        >
          <div className="flex items-center justify-between">
            <div className="p-3 bg-white rounded-xl shadow-sm">
              {stat.icon}
            </div>
            <span className="text-green-500 text-sm font-semibold px-3 py-1 bg-green-50 rounded-full">
              {stat.change}
            </span>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-800">{stat.title}</h3>
          <p className="mt-2 text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {stat.value}
          </p>
          
          {/* Decorative Elements */}
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-gray-900/5 to-gray-900/0 rounded-full" />
          <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-gradient-to-br from-gray-900/5 to-gray-900/0 rounded-full" />
        </div>
      ))}
    </section>
  );
}