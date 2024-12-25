import React from 'react';
import { Cable, Wifi, Shield, Power, Server } from 'lucide-react';

interface CableConnection {
  from: string;
  to: string;
  type: 'fiber' | 'copper' | 'power';
  status: 'active' | 'inactive' | 'warning';
  cableSpec: {
    type: string;
    color: string;
    gauge?: string;
    pairs?: number;
    cores?: number;
  };
}

export default function RackCableConnectionDiagram() {
  const cableConnections: CableConnection[] = [
    {
      from: 'Core Switch',
      to: 'CCTV Switch',
      type: 'fiber',
      status: 'active',
      cableSpec: {
        type: 'Single-mode OS2',
        color: 'Yellow',
        cores: 12
      }
    },
    {
      from: 'CCTV Switch',
      to: 'NVR System',
      type: 'copper',
      status: 'active',
      cableSpec: {
        type: 'Cat6A F/UTP',
        color: 'Blue',
        pairs: 4,
        gauge: '23 AWG'
      }
    },
    {
      from: 'UPS System',
      to: 'Power Distribution',
      type: 'power',
      status: 'active',
      cableSpec: {
        type: 'Power Cable',
        color: 'Red',
        gauge: '12 AWG'
      }
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <Cable className="w-5 h-5 text-blue-600" />
          Cable Connection Diagram
        </h3>
        <p className="text-sm text-gray-600">Real-time status of rack cable connections</p>
      </div>

      {/* Cable Connection Visualization */}
      <div className="grid grid-cols-1 gap-6">
        {cableConnections.map((connection, index) => (
          <div key={index} className="relative">
            {/* Connection Card */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {connection.type === 'fiber' ? (
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Wifi className="w-5 h-5 text-blue-600" />
                    </div>
                  ) : connection.type === 'copper' ? (
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Cable className="w-5 h-5 text-orange-600" />
                    </div>
                  ) : (
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Power className="w-5 h-5 text-red-600" />
                    </div>
                  )}
                  <div>
                    <div className="font-medium">{connection.from} → {connection.to}</div>
                    <div className="text-sm text-gray-500">{connection.cableSpec.type}</div>
                  </div>
                </div>
                <div className={`flex items-center gap-2 ${
                  connection.status === 'active' ? 'text-green-500' :
                  connection.status === 'warning' ? 'text-yellow-500' :
                  'text-red-500'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                  <span className="text-sm font-medium capitalize">{connection.status}</span>
                </div>
              </div>

              {/* Cable Specifications */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded border border-gray-200">
                  <span className="text-sm text-gray-500 block mb-1">Color Code</span>
                  <div className="flex items-center gap-2">
                    <div 
                      className={`w-4 h-4 rounded border ${
                        connection.cableSpec.color.toLowerCase() === 'yellow' ? 'bg-yellow-400 border-yellow-500' :
                        connection.cableSpec.color.toLowerCase() === 'blue' ? 'bg-blue-400 border-blue-500' :
                        'bg-red-400 border-red-500'
                      }`} 
                    />
                    <span className="font-medium">{connection.cableSpec.color}</span>
                  </div>
                </div>
                {connection.cableSpec.cores && (
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <span className="text-sm text-gray-500 block mb-1">Cores</span>
                    <span className="font-medium">{connection.cableSpec.cores}</span>
                  </div>
                )}
                {connection.cableSpec.pairs && (
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <span className="text-sm text-gray-500 block mb-1">Pairs</span>
                    <span className="font-medium">{connection.cableSpec.pairs}</span>
                  </div>
                )}
                {connection.cableSpec.gauge && (
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <span className="text-sm text-gray-500 block mb-1">Gauge</span>
                    <span className="font-medium">{connection.cableSpec.gauge}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cable Type Legend */}
      <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Cable Types & Color Codes</h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-yellow-400 border border-yellow-500" />
            <div className="text-sm">
              <div className="font-medium">Fiber Optic</div>
              <div className="text-gray-500">OS2 Single-mode</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-blue-400 border border-blue-500" />
            <div className="text-sm">
              <div className="font-medium">Cat6A</div>
              <div className="text-gray-500">F/UTP Shielded</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-red-400 border border-red-500" />
            <div className="text-sm">
              <div className="font-medium">Power</div>
              <div className="text-gray-500">12 AWG</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}