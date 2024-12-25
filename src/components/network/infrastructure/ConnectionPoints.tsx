import React from 'react';
import { Network } from 'lucide-react';

const connectionPoints = [
  { id: 'CP1', x: 200, y: 200, label: 'Building A' },
  { id: 'CP2', x: 400, y: 200, label: 'Building B' },
  { id: 'CP3', x: 600, y: 200, label: 'Building C' },
  { id: 'CP4', x: 200, y: 600, label: 'Building D' },
  { id: 'CP5', x: 400, y: 600, label: 'Building E' },
  { id: 'CP6', x: 600, y: 600, label: 'Building F' }
];

export default function ConnectionPoints() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 3 }}>
      {connectionPoints.map((point) => (
        <div
          key={point.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: point.x, top: point.y }}
        >
          <div className="flex flex-col items-center">
            <div className="bg-green-500 rounded-full p-2 shadow-lg">
              <Network className="w-4 h-4 text-white" />
            </div>
            <span className="mt-1 text-xs font-medium bg-white px-2 py-1 rounded shadow">
              {point.id}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}