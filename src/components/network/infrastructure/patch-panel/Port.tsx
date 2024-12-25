import React from 'react';
import { PortType } from './types';

interface PortProps {
  port: PortType;
}

export default function Port({ port }: PortProps) {
  const getPortStyles = () => {
    if (port.status === 'inactive') return 'border-gray-600 bg-gray-800';
    
    switch (port.type) {
      case 'fiber':
        return 'border-orange-500 bg-orange-900/20';
      case 'data':
        return 'border-blue-500 bg-blue-900/20';
      case 'voice':
        return 'border-green-500 bg-green-900/20';
      default:
        return 'border-gray-600 bg-gray-800';
    }
  };

  const getIndicatorStyles = () => {
    if (port.status === 'inactive') return 'bg-gray-600';
    
    switch (port.type) {
      case 'fiber':
        return 'bg-orange-500';
      case 'data':
        return 'bg-blue-500';
      case 'voice':
        return 'bg-green-500';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="relative">
      <div className={`aspect-square rounded-sm border ${getPortStyles()}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-2 h-2 rounded-full ${getIndicatorStyles()}`} />
        </div>
      </div>
      <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-[8px] text-gray-400">
        {port.id}
      </div>
    </div>
  );
}