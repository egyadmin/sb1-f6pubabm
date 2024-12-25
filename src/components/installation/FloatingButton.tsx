import React from 'react';
import { Wrench, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface FloatingButtonProps {
  onClick: () => void;
}

export default function FloatingButton({ onClick }: FloatingButtonProps) {
  const { language } = useLanguage();
  
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-700 
        hover:from-indigo-700 hover:via-blue-700 hover:to-blue-800 text-white rounded-2xl px-6 py-4 
        shadow-lg flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl 
        hover:translate-y-[-4px] z-[60] group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
        <Wrench className="w-6 h-6 relative z-10" />
      </div>
      <span className="font-medium">
        {language === 'ar' ? 'دليل التركيب التفصيلي' : 'Installation Guide'}
      </span>
      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </button>
  );
}