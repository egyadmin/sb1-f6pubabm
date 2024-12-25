import React from 'react';
import { Home, Network, Radio, CircleDot } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

export default function MobileLayout() {
  const { language } = useLanguage();
  const location = useLocation();

  const navItems = [
    {
      to: '/',
      icon: <Home className="w-5 h-5" />,
      label: language === 'ar' ? 'الرئيسية' : 'Home'
    },
    {
      to: '/ict-network',
      icon: <Network className="w-5 h-5" />,
      label: language === 'ar' ? 'شبكة ICT' : 'ICT'
    },
    {
      to: '/telecommunication',
      icon: <Radio className="w-5 h-5" />,
      label: language === 'ar' ? 'الاتصالات' : 'Telecom'
    },
    {
      to: '/ductile-iron',
      icon: <CircleDot className="w-5 h-5" />,
      label: language === 'ar' ? 'الحديد' : 'Iron'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 safe-area-inset">
      <div className="grid grid-cols-4 gap-1 px-2 py-1">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-colors ${
              location.pathname === item.to
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {item.icon}
            <span className="mt-1 text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}