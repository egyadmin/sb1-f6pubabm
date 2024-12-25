import React from 'react';

interface RackSectionProps {
  title: string;
  children: React.ReactNode;
  colorClass?: string;
  borderColor?: string;
}

export default function RackSection({ title, children, colorClass = 'bg-gray-50', borderColor = 'border-gray-200' }: RackSectionProps) {
  return (
    <div className={`${colorClass} rounded-xl p-6 border ${borderColor} shadow-sm`}>
      <h3 className="font-semibold text-gray-800 mb-4">{title}</h3>
      {children}
    </div>
  );
}