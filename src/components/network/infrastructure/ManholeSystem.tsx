import React from 'react';
import { Box } from 'lucide-react';

const manholes = [
  { id: 'MH1', x: 30, y: 35 },
  { id: 'MH2', x: 50, y: 35 },
  { id: 'MH3', x: 70, y: 35 },
  { id: 'MH4', x: 30, y: 65 },
  { id: 'MH5', x: 50, y: 65 },
  { id: 'MH6', x: 70, y: 65 },
];

export default function ManholeSystem() {
  return (
    <>
      {manholes.map((manhole) => (
        <div
          key={manhole.id}
          className="absolute flex flex-col items-center"
          style={{
            left: `${manhole.x}%`,
            top: `${manhole.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="bg-gray-700 rounded-lg p-2 shadow-lg">
            <Box className="w-6 h-6 text-white" />
          </div>
          <span className="mt-1 text-xs font-medium bg-white px-2 py-1 rounded shadow">
            {manhole.id}
          </span>
        </div>
      ))}
    </>
  );
}