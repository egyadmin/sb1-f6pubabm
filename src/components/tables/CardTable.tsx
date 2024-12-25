import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface Column {
  key: string;
  header: string;
  render?: (value: any) => React.ReactNode;
}

interface CardTableProps {
  columns: Column[];
  data: any[];
  className?: string;
}

export default function CardTable({ columns, data, className = '' }: CardTableProps) {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className={`space-y-4 ${className}`}>
      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="px-4 py-5 sm:p-6">
            <dl className="grid grid-cols-1 gap-4">
              {columns.map((column) => (
                <div key={column.key} className={isRTL ? 'text-right' : 'text-left'}>
                  <dt className="text-sm font-medium text-gray-500">{column.header}</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {column.render ? column.render(row[column.key]) : row[column.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      ))}
    </div>
  );
}