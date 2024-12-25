import React from 'react';
import { Hammer, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface WorksButtonProps {
  onClick: () => void;
}

export default function WorksButton({ onClick }: WorksButtonProps) {
  const { language } = useLanguage();
  
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-amber-500 
        via-orange-500 to-orange-600 hover:from-amber-600 hover:via-orange-600 hover:to-orange-700 
        text-white rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3 transition-all duration-300 
        hover:scale-105 hover:shadow-xl hover:translate-y-[-4px] z-50 group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
        <Hammer className="w-6 h-6 relative z-10" />
      </div>
      <span className="font-medium">
        {language === 'ar' ? 'الأعمال والكميات' : 'Works & Quantities'}
      </span>
      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </button>
  );
}