import React, { useState } from 'react';
import { X, Hammer, Filter } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import WorksTable from './WorksTable';
import { categories } from '../quantities/data';

interface WorksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WorksModal({ isOpen, onClose }: WorksModalProps) {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <div className="sticky top-0 bg-white/80 backdrop-blur-sm p-6 border-b flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-xl">
              <Hammer className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              {language === 'ar' ? 'الأعمال والكميات' : 'Works & Quantities'}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
              >
                <option value="all">
                  {language === 'ar' ? 'جميع الأعمال' : 'All Works'}
                </option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name[language]}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-88px)]">
          <WorksTable selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
}