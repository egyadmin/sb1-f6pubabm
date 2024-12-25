import React from 'react';
import { Category } from './types';

interface CategoryCardProps {
  category: Category;
  isSelected: boolean;
  onClick: () => void;
}

export default function CategoryCard({ category, isSelected, onClick }: CategoryCardProps) {
  return (
    <div 
      className={`bg-white rounded-lg p-4 border-2 transition-all cursor-pointer hover:shadow-md ${
        isSelected ? 'border-blue-500 shadow-md' : 'border-gray-200'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2 mb-2">
        {category.icon}
        <h3 className="font-medium">{category.name.en}</h3>
      </div>
      <p className="text-sm text-gray-600">{category.description.en}</p>
    </div>
  );
}