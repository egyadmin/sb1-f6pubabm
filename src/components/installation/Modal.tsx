import React from 'react';
import { X, Wrench } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const { language } = useLanguage();
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[80vh] overflow-hidden">
        <div className="sticky top-0 bg-white/80 backdrop-blur-sm p-4 border-b flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-xl">
              <Wrench className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {language === 'ar' ? 'دليل التركيب التفصيلي' : 'Installation Guide'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto max-h-[calc(80vh-64px)]">
          {children}
        </div>
      </div>
    </div>
  );
}