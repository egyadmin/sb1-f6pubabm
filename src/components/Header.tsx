import React from 'react';
import { Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <header className="bg-gradient-to-b from-white to-gray-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        {/* Logos Section - Optimized for Mobile */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto smooth-scroll">
            {/* Original Logo - Reduced size on mobile */}
            <img 
              src="https://www2.0zz0.com/2024/11/20/07/988856043.png" 
              alt="Company Logo" 
              className="h-10 sm:h-20 w-auto object-contain hover:opacity-90 transition-opacity"
            />
            {/* EPM Logo */}
            <img 
              src="https://www.wadhefa.com/logo/company/614e67d7aec9c.png" 
              alt="EPM Consultant" 
              className="h-8 sm:h-16 w-auto object-contain hover:opacity-90 transition-opacity"
            />
            {/* Red Sea Project Logo - Updated URL */}
            <img 
              src="https://a.top4top.io/p_3281a7rbh1.png" 
              alt="Red Sea Project" 
              className="h-8 sm:h-16 w-auto object-contain hover:opacity-90 transition-opacity"
            />
            <Shield className="h-6 sm:h-10 w-6 sm:w-10 text-blue-600 flex-shrink-0" />
          </div>
          <LanguageToggle />
        </div>

        {/* Project Title and Subtitle - Optimized for Mobile */}
        <div className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h1 className={`text-lg sm:text-2xl font-bold text-gray-900 leading-tight ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {language === 'ar' 
              ? 'مشروع توسع قرية الإسكان الإنشائية – 01 أعمال البنية التحتية - 100437'
              : 'Construction Housing Village Expansion Project – 01 Infrastructure Works - 100437'}
          </h1>
          <p className={`text-xs sm:text-sm text-gray-600 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {language === 'ar'
              ? 'خطة عمل شاملة لمشروع البحر الأحمر - الاتصالات، أنظمة الأمن، المراقبة، شبكة تكنولوجيا المعلومات، إدارة المعدات الأمنية، توصيلات الكابلات، القنوات الفرعية، وتركيب الأنظمة الداخلية'
              : 'Comprehensive Business Plan for the Red Sea Project Communications, Security Systems, CCTV, ITC Network, Security Equipment Management, Cable Connections, subducts, and Internal Systems Installation'}
          </p>
        </div>
      </div>
    </header>
  );
}