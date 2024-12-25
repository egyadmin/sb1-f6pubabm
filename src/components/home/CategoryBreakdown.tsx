import React from 'react';
import { PieChart, Shield, Camera, Network, Server } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function CategoryBreakdown() {
  const { language } = useLanguage();
  
  const categories = [
    {
      icon: <Shield className="w-5 h-5 text-red-500" />,
      name: language === 'ar' ? 'أنظمة إنذار الحريق' : 'Fire Alarm Systems',
      percentage: 35,
      color: 'bg-red-100',
      image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Camera className="w-5 h-5 text-blue-500" />,
      name: language === 'ar' ? 'أنظمة المراقبة' : 'CCTV Systems',
      percentage: 28,
      color: 'bg-blue-100',
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Network className="w-5 h-5 text-green-500" />,
      name: language === 'ar' ? 'شبكة ICT' : 'ICT Network',
      percentage: 22,
      color: 'bg-green-100',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Server className="w-5 h-5 text-purple-500" />,
      name: language === 'ar' ? 'البنية التحتية' : 'Infrastructure',
      percentage: 15,
      color: 'bg-purple-100',
      image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <PieChart className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-semibold">
          {language === 'ar' ? 'توزيع الفئات' : 'Category Distribution'}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0">
              <img 
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            </div>
            
            <div className="relative p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className={`p-2 ${category.color} rounded-lg`}>
                  {category.icon}
                </div>
                <span className="font-medium text-white">{category.name}</span>
              </div>
              
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold text-white">{category.percentage}%</div>
                <div className="h-16 w-24 bg-gradient-to-r from-white/10 to-white/5 rounded-lg backdrop-blur-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}