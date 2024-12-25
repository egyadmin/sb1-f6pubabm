import React from 'react';
import { Wifi, Camera, Shield, Lock } from 'lucide-react';

interface BuildingDetailsProps {
  buildingNumber: number;
  x: number;
  y: number;
  networkDetails: {
    fireAlarmIP: string;
    cctvIP: string;
    accessControlIP: string;
  };
}

export default function BuildingDetails({ buildingNumber, x, y, networkDetails }: BuildingDetailsProps) {
  return (
    <div 
      className="absolute bg-white rounded-lg shadow-lg p-4 border-2 border-blue-200 w-72"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
    >
      <h3 className="text-lg font-semibold mb-3 text-blue-800">Building {buildingNumber}</h3>
      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-red-500" />
            <span>Fire Alarm</span>
          </div>
          <code className="bg-red-50 px-2 py-1 rounded text-red-600">{networkDetails.fireAlarmIP}</code>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-blue-500" />
            <span>CCTV</span>
          </div>
          <code className="bg-blue-50 px-2 py-1 rounded text-blue-600">{networkDetails.cctvIP}</code>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-green-500" />
            <span>Access Control</span>
          </div>
          <code className="bg-green-50 px-2 py-1 rounded text-green-600">{networkDetails.accessControlIP}</code>
        </div>
      </div>
    </div>
  );
}