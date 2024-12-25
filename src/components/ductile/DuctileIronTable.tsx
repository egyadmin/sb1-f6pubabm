import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ductileIronItems } from './data';

export default function DuctileIronTable() {
  const { language } = useLanguage();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {language === 'ar' ? 'البند' : 'Item'}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {language === 'ar' ? 'المواصفات' : 'Specifications'}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {language === 'ar' ? 'الوحدة' : 'Unit'}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {language === 'ar' ? 'الكمية' : 'Quantity'}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {ductileIronItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 text-sm text-gray-900">
                {item.name[language]}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {item.specifications[language]}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.unit}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {item.quantity.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}