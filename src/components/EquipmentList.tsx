import React from 'react';
import { Package } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Equipment } from '../types';

interface Props {
  equipment: Equipment[];
}

function EquipmentList({ equipment }: Props) {
  const { t, language } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Package className="h-5 w-5" />
        {t('equipment.list')}
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className={`px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                {t('equipment.name')}
              </th>
              <th className={`px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                {t('equipment.quantity')}
              </th>
              <th className={`px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                {t('equipment.price')}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {equipment.map((item) => (
              <tr key={item.id}>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {item[`name_${language}`]}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {item.quantity}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {item.price.toLocaleString()} {t('currency')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EquipmentList;