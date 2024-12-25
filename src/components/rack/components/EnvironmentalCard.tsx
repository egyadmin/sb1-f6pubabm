import React from 'react';

interface EnvironmentalCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  range: string;
  status: string;
}

export default function EnvironmentalCard({ icon, label, value, range, status }: EnvironmentalCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-white rounded-lg shadow-sm">
            {icon}
          </div>
          <span className="font-medium text-gray-900">{label}</span>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === 'normal' ? 'bg-green-100 text-green-800' :
          status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {status}
        </span>
      </div>
      <div className="mt-2">
        <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          {value}
        </span>
        <span className="text-sm text-gray-600 block mt-1">Range: {range}</span>
      </div>
    </div>
  );
}