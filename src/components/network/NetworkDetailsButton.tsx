import React from 'react';
import { Info } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface NetworkDetailsButtonProps {
  onClick: () => void;
}

export default function NetworkDetailsButton({ onClick }: NetworkDetailsButtonProps) {
  const { language } = useLanguage();
  
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-6 py-3 shadow-lg flex items-center gap-3 transition-all hover:scale-105 z-50"
    >
      <Info className="w-5 h-5" />
      <span className="font-medium">
        {language === 'ar' ? 'تفاصيل الشبكة' : 'Network Details'}
      </span>
    </button>
  );
}