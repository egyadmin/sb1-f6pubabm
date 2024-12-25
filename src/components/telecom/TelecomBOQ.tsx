import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FileText, Radio, Eye } from 'lucide-react';
import { telecomProducts } from '../../data/telecomProducts';
import TelecomProductModal from './TelecomProductModal';

interface BOQItem {
  ref: string;
  description: string;
  unit: string;
  quantity: number;
  rate: number;
  productKey?: string;
}

export default function TelecomBOQ() {
  const { language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const boqItems: BOQItem[] = [
    {
      ref: '27 51 23',
      description: 'Telephone outlet complete with Cat6 cable, face plate, back box and all accessories',
      unit: 'No.',
      quantity: 500,
      rate: 166.44,
      productKey: 'telephone-outlet'
    },
    {
      ref: '27 51 23',
      description: 'Data outlet complete with Cat6 cable, face plate, back box and all accessories',
      unit: 'No.',
      quantity: 288,
      rate: 166.44,
      productKey: 'data-outlet'
    },
    {
      ref: '27 51 23',
      description: 'Telephone multi-pair cable 50 pair',
      unit: 'm',
      quantity: 1200,
      rate: 55.48,
      productKey: 'multi-pair-50'
    },
    {
      ref: '27 51 23',
      description: 'IP-PBX System complete with all required software, licenses, and programming',
      unit: 'No.',
      quantity: 1,
      rate: 277400.00,
      productKey: 'pbx-system'
    },
    {
      ref: '27 51 23',
      description: 'Voice Gateway with E1/PRI interface',
      unit: 'No.',
      quantity: 1,
      rate: 55480.00,
      productKey: 'voice-gateway'
    },
    {
      ref: '27 51 23',
      description: 'Telephone Patch Panel 24-port',
      unit: 'No.',
      quantity: 12,
      rate: 1109.60,
      productKey: 'patch-panel'
    }
  ];

  const calculateTotal = (items: BOQItem[]) => {
    return items.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'جدول الكميات' : 'Bill of Quantities'}
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {language === 'ar' ? 'المرجع' : 'Reference'}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {language === 'ar' ? 'الوصف' : 'Description'}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {language === 'ar' ? 'الوحدة' : 'Unit'}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {language === 'ar' ? 'الكمية' : 'Quantity'}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {language === 'ar' ? 'السعر' : 'Rate'}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {language === 'ar' ? 'الإجمالي' : 'Total'}
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                {language === 'ar' ? 'التفاصيل' : 'Details'}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {boqItems.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.ref}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.unit}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.rate.toLocaleString()} {language === 'ar' ? 'ريال' : 'SAR'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {(item.quantity * item.rate).toLocaleString()} {language === 'ar' ? 'ريال' : 'SAR'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  {item.productKey && (
                    <button
                      onClick={() => {
                        setSelectedProduct(item.productKey!);
                        setIsModalOpen(true);
                      }}
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{language === 'ar' ? 'عرض' : 'View'}</span>
                    </button>
                  )}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-50">
              <td colSpan={5} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                {language === 'ar' ? 'الإجمالي الكلي:' : 'Grand Total:'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {calculateTotal(boqItems).toLocaleString()} {language === 'ar' ? 'ريال' : 'SAR'}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <TelecomProductModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct ? telecomProducts[selectedProduct] : null}
      />
    </div>
  );
}