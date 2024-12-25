import React from 'react';
import { Cable, Wifi, Power } from 'lucide-react';

interface CableConnectionProps {
  from: string;
  to: string;
  type: 'fiber' | 'copper' | 'power';
  status: string;
  specs: {
    type: string;
    color: string;
    details: string[];
  };
}

export default function CableConnection({ from, to, type, status, specs }: CableConnectionProps) {
  const getIcon = () => {
    switch (type) {
      case 'fiber': return <Wifi className="w-5 h-5 text-blue-600" />;
      case 'copper': return <Cable className="w-5 h-5 text-orange-600" />;
      case 'power': return <Power className="w-5 h-5 text-red-600" />;
    }
  };

  const getGradient = () => {
    switch (type) {
      case 'fiber': return 'from-blue-50 to-white';
      case 'copper': return 'from-orange-50 to-white';
      case 'power': return 'from-red-50 to-white';
    }
  };

  return (
    <div className={`bg-gradient-to-br ${getGradient()} rounded-lg p-4 border border-gray-200 hover:shadow-sm transition-all duration-300`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white rounded-lg shadow-sm">
            {getIcon()}
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{from} → {to}</h4>
            <span className="text-sm text-gray-600">{specs.type}</span>
          </div>
        </div>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          {status}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-sm text-gray-600 block mb-1">Type</span>
          <span className="font-medium text-gray-900">{specs.type}</span>
        </div>
        <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-sm text-gray-600 block mb-1">Color</span>
          <span className="font-medium text-gray-900">{specs.color}</span>
        </div>
        <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-sm text-gray-600 block mb-1">Details</span>
          {specs.details.map((detail, index) => (
            <span key={index} className="block text-sm text-gray-900">{detail}</span>
          ))}
        </div>
      </div>
    </div>
  );
}