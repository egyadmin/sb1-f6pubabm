import React from 'react';

interface RackUnitProps {
  name: string;
  icon: React.ReactNode;
  details: string;
  height: number;
  specs: Record<string, string>;
}

export default function RackUnit({ name, icon, details, height, specs }: RackUnitProps) {
  return (
    <div 
      className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
      style={{ height: `${height * 56}px` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {name}
          </h3>
          <p className="text-gray-600 mt-1">{details}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
            <span className="text-sm text-gray-600 block mb-1">{key}</span>
            <span className="font-medium text-gray-900">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}