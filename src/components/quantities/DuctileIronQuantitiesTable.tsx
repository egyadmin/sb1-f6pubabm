import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function DuctileIronQuantitiesTable() {
  const { language } = useLanguage();

  const quantities = [
    {
      id: 'di-1',
      ref: '27 51 23',
      name: {
        ar: 'أنابيب حديد دكتايل قطر 250 مم',
        en: 'Ductile Iron Pipes DN250'
      },
      unit: 'm',
      quantity: 1500,
      rate: 427.40,
      specifications: {
        ar: 'أنابيب مياه من الحديد الدكتايل، فئة C40، مع الوصلات والحشوات',
        en: 'DI Water Pipes, Class C40, with joints and gaskets'
      }
    },
    {
      id: 'di-2',
      ref: '27 51 23',
      name: {
        ar: 'أنابيب حديد دكتايل قطر 200 مم',
        en: 'Ductile Iron Pipes DN200'
      },
      unit: 'm',
      quantity: 1200,
      rate: 385.60,
      specifications: {
        ar: 'أنابيب مياه من الحديد الدكتايل، فئة C40، مع الوصلات والحشوات',
        en: 'DI Water Pipes, Class C40, with joints and gaskets'
      }
    },
    {
      id: 'di-3',
      ref: '27 51 23',
      name: {
        ar: 'أنابيب حديد دكتايل قطر 160 مم',
        en: 'Ductile Iron Pipes DN160'
      },
      unit: 'm',
      quantity: 900,
      rate: 312.75,
      specifications: {
        ar: 'أنابيب مياه من الحديد الدكتايل، فئة C40، مع الوصلات والحشوات',
        en: 'DI Water Pipes, Class C40, with joints and gaskets'
      }
    },
    {
      id: 'di-4',
      ref: '27 51 23',
      name: {
        ar: 'محابس بوابة قطر 200 مم',
        en: 'Gate Valves DN200'
      },
      unit: 'Nos',
      quantity: 50,
      rate: 3850.00,
      specifications: {
        ar: 'محابس بوابة من الحديد الدكتايل، ضغط 16 بار، مع الملحقات',
        en: 'DI Gate Valves, PN16, with accessories'
      }
    },
    {
      id: 'di-5',
      ref: '27 51 23',
      name: {
        ar: 'غرف تفتيش خرسانية',
        en: 'Concrete Manholes'
      },
      unit: 'Nos',
      quantity: 25,
      rate: 4500.00,
      specifications: {
        ar: 'غرف تفتيش خرسانية مسلحة مع أغطية حديد',
        en: 'Reinforced concrete manholes with iron covers'
      }
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              {language === 'ar' ? 'المرجع' : 'CSI Ref.'}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              {language === 'ar' ? 'البند' : 'Description'}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              {language === 'ar' ? 'المواصفات' : 'Specifications'}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              {language === 'ar' ? 'الوحدة' : 'Unit'}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              {language === 'ar' ? 'الكمية' : 'Quantity'}
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
              {language === 'ar' ? 'السعر' : 'Rate (SAR)'}
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
              {language === 'ar' ? 'الإجمالي' : 'Amount (SAR)'}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {quantities.map((item, index) => (
            <tr 
              key={item.id}
              className={`hover:bg-gray-50 transition-colors ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
              }`}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.ref}
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">
                  {item.name[language]}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-600">
                  {item.specifications[language]}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {item.unit}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {item.quantity.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                {item.rate.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                {(item.quantity * item.rate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-gray-50">
          <tr>
            <td colSpan={6} className="px-6 py-4 text-sm font-medium text-gray-900 text-right">
              {language === 'ar' ? 'الإجمالي الكلي:' : 'Total Amount:'}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 text-right">
              {quantities.reduce((sum, item) => sum + (item.quantity * item.rate), 0)
                .toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} SAR
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}