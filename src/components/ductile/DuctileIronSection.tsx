import React from 'react';
import { CircleDot, Pipe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ductileIronItems } from './data';

export default function DuctileIronSection() {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <CircleDot className="w-6 h-6 text-gray-600" />
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'أنابيب الحديد الدكتايل' : 'Ductile Iron Pipes'}
        </h3>
      </div>

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
    </div>
  );
}