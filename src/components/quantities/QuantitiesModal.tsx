import React, { useState } from 'react';
import { X, ClipboardList, Package, Cable, Box, Filter } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import QuantitiesTable from './QuantitiesTable';
import { categories } from './data/categories';

interface QuantitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuantitiesModal({ isOpen, onClose }: QuantitiesModalProps) {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <ClipboardList className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-bold">
              {language === 'ar' ? 'كميات المشروع' : 'Project Quantities'}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="all">
                  {language === 'ar' ? 'جميع الفئات' : 'All Categories'}
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
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className={`bg-gray-50 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                  selectedCategory === category.id ? 'ring-2 ring-green-500' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="flex items-center gap-2 mb-2">
                  {category.icon}
                  <h3 className="font-medium">{category.name[language]}</h3>
                </div>
                <p className="text-sm text-gray-600">{category.description[language]}</p>
              </div>
            ))}
          </div>

          <QuantitiesTable selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
}