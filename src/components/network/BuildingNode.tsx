import React from 'react';
import { Building, Shield, Camera, Lock } from 'lucide-react';

interface BuildingNodeProps {
  id: number;
  name: string;
  position: { x: number; y: number };
  ips: {
    fireAlarm: string;
    cctv: string;
    accessControl: string;
  };
}

export default function BuildingNode({ id, name, position, ips }: BuildingNodeProps) {
  return (
    <div
      className="absolute bg-white rounded-lg shadow-lg p-3 w-60 transform -translate-x-1/2 -translate-y-1/2 border border-gray-200"
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`,
        zIndex: 2 
      }}
    >
      <div className="flex items-center gap-2 mb-2 pb-2 border-b">
        <Building className="w-4 h-4 text-blue-600" />
        <div>
          <h3 className="font-medium text-sm">{name}</h3>
          <span className="text-xs text-gray-500">Building {id}</span>
        </div>
      </div>

      <div className="space-y-1.5 text-xs">
        <div className="flex items-center justify-between bg-red-50 p-1.5 rounded">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3 h-3 text-red-500" />
            <span>Fire Alarm</span>
          </div>
          <code className="bg-white px-1.5 py-0.5 rounded text-red-600 text-[10px]">{ips.fireAlarm}</code>
        </div>

        <div className="flex items-center justify-between bg-blue-50 p-1.5 rounded">
          <div className="flex items-center gap-1.5">
            <Camera className="w-3 h-3 text-blue-500" />
            <span>CCTV</span>
          </div>
          <code className="bg-white px-1.5 py-0.5 rounded text-blue-600 text-[10px]">{ips.cctv}</code>
        </div>

        <div className="flex items-center justify-between bg-green-50 p-1.5 rounded">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3 h-3 text-green-500" />
            <span>Access Control</span>
          </div>
          <code className="bg-white px-1.5 py-0.5 rounded text-green-600 text-[10px]">{ips.accessControl}</code>
        </div>
      </div>
    </div>
  );
}