import React from 'react';
import { Cable } from 'lucide-react';
import CableConnection from '../components/CableConnection';

export default function RackCableConnections() {
  const connections = [
    {
      from: 'Core Switch',
      to: 'CCTV Switch',
      type: 'fiber',
      status: 'active',
      specs: {
        type: 'Single-mode OS2',
        color: 'Yellow',
        details: ['12 cores', 'LC Duplex']
      }
    },
    {
      from: 'CCTV Switch',
      to: 'NVR System',
      type: 'copper',
      status: 'active',
      specs: {
        type: 'Cat6A F/UTP',
        color: 'Blue',
        details: ['4 pairs', 'RJ45']
      }
    },
    {
      from: 'UPS System',
      to: 'Power Distribution',
      type: 'power',
      status: 'active',
      specs: {
        type: 'Power Cable',
        color: 'Red',
        details: ['12 AWG', '600V']
      }
    }
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <Cable className="w-5 h-5 text-gray-900" />
        <h3 className="text-lg font-semibold text-gray-900">Cable Connections</h3>
      </div>

      <div className="space-y-4">
        {connections.map((connection, index) => (
          <CableConnection key={index} {...connection} />
        ))}
      </div>
    </div>
  );
}