import React from 'react';

interface RackUnitProps {
  name: string;
  icon: React.ReactNode;
  details?: string;
  height?: number;
  colorClass?: string;
}

export default function RackUnit({ name, icon, details, height = 1, colorClass = 'border-gray-200' }: RackUnitProps) {
  return (
    <div 
      className={`border-2 ${colorClass} bg-white rounded-lg p-4 flex items-center gap-3 transition-all hover:shadow-md group`}
      style={{ height: `${height * 44}px` }}
    >
      <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-gray-800">{name}</h4>
        {details && <p className="text-sm text-gray-500 mt-1">{details}</p>}
      </div>
    </div>
  );
}