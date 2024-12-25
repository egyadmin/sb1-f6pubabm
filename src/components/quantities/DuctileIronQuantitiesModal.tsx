import React from 'react';
import { X, CircleDot } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import DuctileIronQuantitiesTable from './DuctileIronQuantitiesTable';

interface DuctileIronQuantitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DuctileIronQuantitiesModal({ isOpen, onClose }: DuctileIronQuantitiesModalProps) {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <CircleDot className="w-6 h-6 text-gray-600" />
            <h2 className="text-xl font-bold">
              {language === 'ar' ? 'كميات أعمال الحديد الدكتايل' : 'Ductile Iron Works Quantities'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <DuctileIronQuantitiesTable />
        </div>
      </div>
    </div>
  );
}