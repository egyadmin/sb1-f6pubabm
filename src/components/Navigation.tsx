import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Network, Radio, CircleDot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const { language } = useLanguage();
  
  const links = [
    {
      to: '/',
      icon: <Home className="w-5 h-5" />,
      label: language === 'ar' ? 'الرئيسية' : 'Home'
    },
    {
      to: '/ict-network',
      icon: <Network className="w-5 h-5" />,
      label: language === 'ar' ? 'شبكة ICT' : 'ICT Network'
    },
    {
      to: '/telecommunication',
      icon: <Radio className="w-5 h-5" />,
      label: language === 'ar' ? 'الاتصالات' : 'Telecommunication'
    },
    {
      to: '/ductile-iron',
      icon: <CircleDot className="w-5 h-5" />,
      label: language === 'ar' ? 'الحديد الدكتايل' : 'Ductile Iron'
    }
  ];

  return (
    <nav className="bg-white shadow-sm mb-4 sm:mb-6 overflow-x-auto smooth-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4 sm:space-x-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-4 text-sm font-medium whitespace-nowrap
                ${isActive
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
                }`
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}