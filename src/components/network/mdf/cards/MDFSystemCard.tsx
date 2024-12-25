import React from 'react';

interface MDFSystemCardProps {
  title: string;
  icon: React.ReactNode;
  gradient: string;
  details: Array<{ label: string; value: string }>;
}

export default function MDFSystemCard({ title, icon, gradient, details }: MDFSystemCardProps) {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-xl p-6 border border-white/10 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 bg-white/10 rounded-lg ring-1 ring-white/20">
          {icon}
        </div>
        <h4 className="font-semibold text-lg text-white">{title}</h4>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {details.map((detail, index) => (
          <div key={index} className="bg-black/20 rounded-lg p-3">
            <span className="text-gray-300 text-sm block mb-1">{detail.label}</span>
            <span className="text-white font-semibold">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}