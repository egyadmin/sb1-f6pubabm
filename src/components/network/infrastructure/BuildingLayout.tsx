import React from 'react';
import { Building } from 'lucide-react';

const buildings = [
  { id: 1, name: 'Admin Building', x: 20, y: 20, size: 'lg' },
  { id: 2, name: 'Operations Building', x: 80, y: 20, size: 'lg' },
  { id: 3, name: 'Services Building', x: 20, y: 80, size: 'md' },
  { id: 4, name: 'Facilities Building', x: 80, y: 80, size: 'md' },
  { id: 5, name: 'Storage Building', x: 35, y: 50, size: 'sm' },
  { id: 6, name: 'Workshop Building', x: 65, y: 50, size: 'sm' },
];

export default function BuildingLayout() {
  return (
    <>
      {buildings.map((building) => (
        <div
          key={building.id}
          className={`absolute bg-white rounded-lg shadow-lg border-2 border-gray-300 p-4
            ${building.size === 'lg' ? 'w-48 h-32' : 
              building.size === 'md' ? 'w-40 h-28' : 'w-36 h-24'}`}
          style={{
            left: `${building.x}%`,
            top: `${building.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Building className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-sm">{building.name}</span>
          </div>
          <div className="text-xs text-gray-600">
            Building ID: {building.id}
          </div>
        </div>
      ))}
    </>
  );
}