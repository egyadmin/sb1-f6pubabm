import React from 'react';
import { Cable, Wifi, Shield, Power } from 'lucide-react';

interface CableConnection {
  from: string;
  to: string;
  type: 'fiber' | 'copper' | 'power';
  status: 'active' | 'inactive' | 'warning';
  details: {
    speed?: string;
    protocol?: string;
    redundancy?: boolean;
  };
}

const cableConnections: CableConnection[] = [
  {
    from: 'Core Switch',
    to: 'CCTV Switch',
    type: 'fiber',
    status: 'active',
    details: {
      speed: '10 Gbps',
      protocol: 'SFP+',
      redundancy: true
    }
  },
  {
    from: 'Core Switch',
    to: 'Access Control',
    type: 'fiber',
    status: 'active',
    details: {
      speed: '10 Gbps',
      protocol: 'SFP+',
      redundancy: true
    }
  },
  {
    from: 'CCTV Switch',
    to: 'NVR System',
    type: 'copper',
    status: 'active',
    details: {
      speed: '1 Gbps',
      protocol: 'Cat6A',
      redundancy: false
    }
  },
  {
    from: 'Fire Alarm Panel',
    to: 'UPS System',
    type: 'power',
    status: 'active',
    details: {
      redundancy: true
    }
  }
];

export default function RackCableConnections() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-500';
      case 'inactive':
        return 'text-red-500';
      case 'warning':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

  const getCableIcon = (type: string) => {
    switch (type) {
      case 'fiber':
        return <Wifi className="w-5 h-5 text-blue-500" />;
      case 'copper':
        return <Cable className="w-5 h-5 text-orange-500" />;
      case 'power':
        return <Power className="w-5 h-5 text-red-500" />;
      default:
        return <Cable className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Cable className="w-5 h-5 text-blue-600" />
        Cable Connections Status
      </h3>

      <div className="space-y-4">
        {cableConnections.map((connection, index) => (
          <div 
            key={index}
            className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                {getCableIcon(connection.type)}
                <div>
                  <div className="font-medium">
                    {connection.from} → {connection.to}
                  </div>
                  <div className="text-sm text-gray-500">
                    Type: {connection.type.charAt(0).toUpperCase() + connection.type.slice(1)}
                  </div>
                </div>
              </div>
              <div className={`flex items-center gap-2 ${getStatusColor(connection.status)}`}>
                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                <span className="text-sm font-medium">
                  {connection.status.charAt(0).toUpperCase() + connection.status.slice(1)}
                </span>
              </div>
            </div>

            {/* Connection Details */}
            <div className="grid grid-cols-3 gap-4 mt-3 text-sm">
              {connection.details.speed && (
                <div className="bg-white p-2 rounded border border-gray-200">
                  <span className="text-gray-500">Speed:</span>
                  <span className="ml-2 font-medium">{connection.details.speed}</span>
                </div>
              )}
              {connection.details.protocol && (
                <div className="bg-white p-2 rounded border border-gray-200">
                  <span className="text-gray-500">Protocol:</span>
                  <span className="ml-2 font-medium">{connection.details.protocol}</span>
                </div>
              )}
              <div className="bg-white p-2 rounded border border-gray-200">
                <span className="text-gray-500">Redundancy:</span>
                <span className="ml-2 font-medium">
                  {connection.details.redundancy ? 'Yes' : 'No'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-blue-100 border border-blue-500 flex items-center justify-center">
            <Wifi className="w-3 h-3 text-blue-500" />
          </div>
          <span>Fiber Connection</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-orange-100 border border-orange-500 flex items-center justify-center">
            <Cable className="w-3 h-3 text-orange-500" />
          </div>
          <span>Copper Connection</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-red-100 border border-red-500 flex items-center justify-center">
            <Power className="w-3 h-3 text-red-500" />
          </div>
          <span>Power Connection</span>
        </div>
      </div>
    </div>
  );
}