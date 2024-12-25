import React from 'react';
import { X, Package, Tag, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Equipment } from '../../types';

interface Props {
  equipment: Equipment | null;
  onClose: () => void;
}

export default function EquipmentModal({ equipment, onClose }: Props) {
  const { language, t } = useLanguage();
  
  if (!equipment) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold">{equipment[`name_${language}`]}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={equipment.image_url}
                alt={equipment[`name_${language}`]}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Package className="w-5 h-5" />
                <span>{t('equipment.quantity')}: {equipment.quantity}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <Tag className="w-5 h-5" />
                <span>{t('equipment.price')}: {equipment.price.toLocaleString()} {t('currency')}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <AlertCircle className="w-5 h-5" />
                <span>{t('equipment.category')}: {equipment.category}</span>
              </div>

              {equipment.specifications && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">{t('equipment.specifications')}</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {equipment[`specifications_${language}`]?.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}