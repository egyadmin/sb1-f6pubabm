import React from 'react';
import { Info, Package, Tag } from 'lucide-react';
import { Equipment } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

interface Props {
  equipment: Equipment;
  onClick: () => void;
}

export default function EquipmentCard({ equipment, onClick }: Props) {
  const { language, t } = useLanguage();
  
  const getCategoryColor = (category: string) => {
    const colors = {
      'fire-alarm': 'bg-red-600',
      'cctv': 'bg-blue-600',
      'infrastructure': 'bg-purple-600',
      'ict': 'bg-green-600',
      'default': 'bg-gray-600'
    };
    return colors[category as keyof typeof colors] || colors.default;
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="relative aspect-video">
        <img
          src={equipment.image_url}
          alt={equipment[`name_${language}`]}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className={`absolute top-2 right-2 ${getCategoryColor(equipment.category)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
          {equipment.category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-3 line-clamp-2 min-h-[3.5rem]">
          {equipment[`name_${language}`]}
        </h3>
        
        <div className="grid grid-cols-2 gap-4 text-sm mb-3">
          <div className="flex items-center gap-2 text-gray-600">
            <Package className="w-4 h-4" />
            <span>{equipment.quantity} {t('equipment.units')}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Tag className="w-4 h-4" />
            <span>{equipment.price.toLocaleString()} {t('currency')}</span>
          </div>
        </div>
        
        <button className="w-full mt-2 flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
          <Info className="w-4 h-4" />
          <span>{t('equipment.viewDetails')}</span>
        </button>
      </div>
    </div>
  );
}