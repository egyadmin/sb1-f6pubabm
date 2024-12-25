import React, { useState } from 'react';
import { Package, Filter } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Equipment } from '../../types';
import EquipmentCard from './EquipmentCard';
import EquipmentModal from './EquipmentModal';

interface Props {
  equipment: Equipment[];
}

export default function EquipmentList({ equipment }: Props) {
  const { t } = useLanguage();
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(equipment.map(item => item.category))];

  const filteredEquipment = selectedCategory === 'all'
    ? equipment
    : equipment.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Package className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">{t('equipment.list')}</h2>
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEquipment.map((item) => (
          <EquipmentCard
            key={item.id}
            equipment={item}
            onClick={() => setSelectedEquipment(item)}
          />
        ))}
      </div>

      <EquipmentModal
        equipment={selectedEquipment}
        onClose={() => setSelectedEquipment(null)}
      />
    </div>
  );
}