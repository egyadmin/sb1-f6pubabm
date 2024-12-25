import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface Column {
  key: string;
  header: string;
  width?: string;
  render?: (value: any) => React.ReactNode;
}

interface ResponsiveTableProps {
  columns: Column[];
  data: any[];
  className?: string;
}

export default function ResponsiveTable({ columns, data, className = '' }: ResponsiveTableProps) {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className={`overflow-x-auto -mx-4 sm:mx-0 ${className}`}>
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5 rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    scope="col"
                    className={`px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ${
                      isRTL ? 'text-right' : 'text-left'
                    } ${column.width || ''}`}
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-50">
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`whitespace-nowrap px-3 py-4 text-sm text-gray-500 ${
                        isRTL ? 'text-right' : 'text-left'
                      }`}
                    >
                      {column.render ? column.render(row[column.key]) : row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}