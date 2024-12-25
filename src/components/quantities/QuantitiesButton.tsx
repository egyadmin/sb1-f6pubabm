import React from 'react';
import { ClipboardList } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface QuantitiesButtonProps {
  onClick: () => void;
}

export default function QuantitiesButton({ onClick }: QuantitiesButtonProps) {
  const { language } = useLanguage();
  
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 left-8 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full px-6 py-3 shadow-lg flex items-center gap-3 transition-all hover:scale-105 z-50"
    >
      <ClipboardList className="w-5 h-5" />
      <span className="font-medium">
        {language === 'ar' ? 'الكميات المستخدمة' : 'Project Quantities'}
      </span>
    </button>
  );
}