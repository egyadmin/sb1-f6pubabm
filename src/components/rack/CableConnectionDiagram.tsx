import React from 'react';
import { Cable, Wifi, Power } from 'lucide-react';

interface CableConnection {
  from: string;
  to: string;
  type: 'fiber' | 'copper' | 'power';
  status: 'active' | 'inactive' | 'warning';
  details: {
    cableType: string;
    colorCode: string;
    specs: string[];
  };
}

export default function CableConnectionDiagram() {
  const connections: CableConnection[] = [
    {
      from: 'Core Switch',
      to: 'CCTV Switch',
      type: 'fiber',
      status: 'active',
      details: {
        cableType: 'Single-mode OS2',
        colorCode: 'Yellow',
        specs: ['12 cores', '9/125μm', 'LC Duplex']
      }
    },
    {
      from: 'CCTV Switch',
      to: 'NVR System',
      type: 'copper',
      status: 'active',
      details: {
        cableType: 'Cat6A F/UTP',
        colorCode: 'Blue',
        specs: ['4 pairs', '23 AWG', 'RJ45']
      }
    },
    {
      from: 'UPS System',
      to: 'Power Distribution',
      type: 'power',
      status: 'active',
      details: {
        cableType: 'Power Cable',
        colorCode: 'Red',
        specs: ['12 AWG', '600V', 'THHN']
      }
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Cable Connection Diagram</h3>

      <div className="space-y-6">
        {connections.map((connection, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            {/* Connection Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  connection.type === 'fiber' ? 'bg-blue-50' :
                  connection.type === 'copper' ? 'bg-orange-50' :
                  'bg-red-50'
                }`}>
                  {connection.type === 'fiber' ? <Wifi className="w-5 h-5 text-blue-600" /> :
                   connection.type === 'copper' ? <Cable className="w-5 h-5 text-orange-600" /> :
                   <Power className="w-5 h-5 text-red-600" />}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {connection.from} → {connection.to}
                  </h4>
                  <span className="text-sm text-gray-600">{connection.details.cableType}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                connection.status === 'active' ? 'bg-green-100 text-green-800' :
                connection.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {connection.status}
              </span>
            </div>

            {/* Connection Details */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <span className="text-sm text-gray-600 block mb-1">Cable Type</span>
                <span className="font-medium text-gray-900">{connection.details.cableType}</span>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <span className="text-sm text-gray-600 block mb-1">Color Code</span>
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded border ${
                    connection.details.colorCode === 'Yellow' ? 'bg-yellow-400 border-yellow-500' :
                    connection.details.colorCode === 'Blue' ? 'bg-blue-400 border-blue-500' :
                    'bg-red-400 border-red-500'
                  }`} />
                  <span className="font-medium text-gray-900">{connection.details.colorCode}</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <span className="text-sm text-gray-600 block mb-1">Specifications</span>
                <div className="space-y-1">
                  {connection.details.specs.map((spec, idx) => (
                    <span key={idx} className="text-sm text-gray-900 block">{spec}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Cable Types & Standards</h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-yellow-400 border border-yellow-500" />
            <div>
              <div className="font-medium text-gray-900">Fiber Optic</div>
              <div className="text-sm text-gray-600">OS2 Single-mode</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-blue-400 border border-blue-500" />
            <div>
              <div className="font-medium text-gray-900">Cat6A</div>
              <div className="text-sm text-gray-600">F/UTP Shielded</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-red-400 border border-red-500" />
            <div>
              <div className="font-medium text-gray-900">Power</div>
              <div className="text-sm text-gray-600">12 AWG</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}