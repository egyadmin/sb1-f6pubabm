import React from 'react';
import { Building as BuildingIcon } from 'lucide-react';
import { Building } from './types';

interface BuildingCardProps {
  building: Building;
}

export default function BuildingCard({ building }: BuildingCardProps) {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      style={{ left: `${building.x}%`, top: `${building.y}%` }}
    >
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 w-64 hover:border-blue-400 transition-colors">
        <div className="flex items-center gap-2 mb-3">
          <BuildingIcon className="w-5 h-5 text-blue-300" />
          <span className="text-blue-100 font-medium">{building.name}</span>
        </div>
        <div className="space-y-2 text-sm">
          <div className="bg-blue-900/50 rounded px-2 py-1">
            <span className="text-blue-200">ICT Network: </span>
            <code className="text-blue-300">{building.ips.data}</code>
          </div>
          <div className="bg-blue-900/50 rounded px-2 py-1">
            <span className="text-blue-200">Infrastructure: </span>
            <code className="text-blue-300">{building.ips.voice}</code>
          </div>
        </div>
      </div>
    </div>
  );
}