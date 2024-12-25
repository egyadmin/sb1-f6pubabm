import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { quantities } from '../quantities/data';

interface Props {
  selectedCategory: string;
}

export default function WorksTable({ selectedCategory }: Props) {
  const { language } = useLanguage();

  const filteredQuantities = selectedCategory === 'all'
    ? quantities
    : quantities.filter(q => q.category === selectedCategory);

  const calculateTotal = (items: typeof quantities) => {
    return items.reduce((sum, item) => sum + (item.quantity * (item.rate || 0)), 0);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gradient-to-r from-orange-50 to-amber-50">
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
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              {language === 'ar' ? 'السعر' : 'Rate (SAR)'}
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              {language === 'ar' ? 'الإجمالي' : 'Amount (SAR)'}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredQuantities.map((item) => (
            <tr key={item.id} className="hover:bg-orange-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">
                  {language === 'ar' ? item.name.ar : item.name.en}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-600">
                  {language === 'ar' ? item.specifications.ar : item.specifications.en}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  {item.unit}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {item.quantity.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                {item.rate?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                {((item.quantity * (item.rate || 0))).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-orange-50">
          <tr>
            <td colSpan={5} className="px-6 py-4 text-sm font-medium text-gray-900 text-right">
              {language === 'ar' ? 'الإجمالي:' : 'Total:'}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 text-right">
              {calculateTotal(filteredQuantities).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} SAR
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}