import React from 'react';
import { NetworkSystem } from './types';

interface SystemCardProps {
  system: NetworkSystem;
}

export default function SystemCard({ system }: SystemCardProps) {
  return (
    <div className="bg-blue-800/40 rounded-lg p-3 backdrop-blur-sm border border-blue-500/30">
      <div className="flex items-center gap-2 mb-2">
        {system.icon}
        <span className="font-medium text-blue-100 text-sm">{system.name}</span>
      </div>
      <div className="space-y-1 text-xs">
        {system.details.map((detail, index) => (
          <div key={index} className="flex items-center justify-between text-blue-200">
            <span>{detail.label}:</span>
            <span className="font-medium">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}