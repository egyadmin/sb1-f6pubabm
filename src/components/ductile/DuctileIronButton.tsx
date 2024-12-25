import React from 'react';
import { CircleDot } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface DuctileIronButtonProps {
  onClick: () => void;
}

export default function DuctileIronButton({ onClick }: DuctileIronButtonProps) {
  const { language } = useLanguage();
  
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-full px-6 py-3 shadow-lg flex items-center gap-3 transition-all hover:scale-105 z-50"
    >
      <CircleDot className="w-5 h-5" />
      <span className="font-medium">
        {language === 'ar' ? 'كميات الحديد الدكتايل' : 'Ductile Iron Quantities'}
      </span>
    </button>
  );
}