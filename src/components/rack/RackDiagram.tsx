import React from 'react';
import { Server, Shield, Lock, Monitor, Wifi, Cable, Database, Power, Thermometer } from 'lucide-react';

interface RackUnitProps {
  name: string;
  height: number;
  type: 'network' | 'security' | 'power' | 'panel';
  status: 'active' | 'inactive' | 'warning';
  specs?: {
    model?: string;
    ports?: string;
    power?: string;
    cooling?: string;
  };
}

export default function RackDiagram() {
  const rackUnits: RackUnitProps[] = [
    {
      name: 'Core Switch',
      height: 2,
      type: 'network',
      status: 'active',
      specs: {
        model: 'Cisco C9300-48P',
        ports: '48x 1G/10G',
        power: '1100W PoE+'
      }
    },
    {
      name: 'CCTV Switch',
      height: 2,
      type: 'network',
      status: 'active',
      specs: {
        model: 'Cisco C9200-24P',
        ports: '24x 1G PoE+',
        power: '740W'
      }
    },
    {
      name: 'NVR System',
      height: 4,
      type: 'security',
      status: 'active',
      specs: {
        model: 'Enterprise NVR',
        power: '800W',
        cooling: 'Active'
      }
    },
    {
      name: 'UPS System',
      height: 4,
      type: 'power',
      status: 'active',
      specs: {
        model: 'APC Smart-UPS RT 6000',
        power: '6000VA',
        cooling: 'Active'
      }
    },
    {
      name: 'Power Distribution',
      height: 2,
      type: 'power',
      status: 'active',
      specs: {
        model: 'Managed PDU',
        power: 'Redundant',
        cooling: 'Passive'
      }
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
            <Server className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Control Room Rack Layout</h2>
            <p className="text-gray-600 mt-1">Integrated Systems Management Center</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Rack Units */}
        <div className="space-y-4">
          {rackUnits.map((unit, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ${
                unit.status === 'active' ? 'ring-2 ring-green-500/20' : ''
              }`}
              style={{ height: `${unit.height * 56}px` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg ${
                  unit.type === 'network' ? 'bg-blue-50' :
                  unit.type === 'security' ? 'bg-red-50' :
                  unit.type === 'power' ? 'bg-emerald-50' :
                  'bg-gray-50'
                }`}>
                  {unit.type === 'network' ? <Wifi className="w-6 h-6 text-blue-600" /> :
                   unit.type === 'security' ? <Shield className="w-6 h-6 text-red-600" /> :
                   unit.type === 'power' ? <Power className="w-6 h-6 text-emerald-600" /> :
                   <Database className="w-6 h-6 text-gray-600" />}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{unit.name}</h3>
                  {unit.specs?.model && (
                    <p className="text-gray-600 mt-1">{unit.specs.model}</p>
                  )}
                </div>
              </div>

              {unit.specs && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {unit.specs.ports && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <span className="text-gray-700 block mb-1 text-sm font-medium">Ports</span>
                      <span className="text-gray-900 font-semibold">{unit.specs.ports}</span>
                    </div>
                  )}
                  {unit.specs.power && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <span className="text-gray-700 block mb-1 text-sm font-medium">Power</span>
                      <span className="text-gray-900 font-semibold">{unit.specs.power}</span>
                    </div>
                  )}
                  {unit.specs.cooling && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <span className="text-gray-700 block mb-1 text-sm font-medium">Cooling</span>
                      <span className="text-gray-900 font-semibold">{unit.specs.cooling}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="space-y-6">
          {/* Cable Specifications */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cable Specifications</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded bg-yellow-100 border border-yellow-400" />
                <span className="text-gray-900">Fiber: OS2 Single-mode, LC Duplex, Yellow Jacket</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded bg-blue-100 border border-blue-400" />
                <span className="text-gray-900">Copper: Cat6A F/UTP, 4 Pairs, Blue Jacket</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded bg-red-100 border border-red-400" />
                <span className="text-gray-900">Power: 12 AWG, Red Jacket, 600V Rated</span>
              </div>
            </div>
          </div>

          {/* Environmental Controls */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Environmental Controls</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Thermometer className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-gray-900">Temperature</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">23.5°C</div>
                <div className="text-sm text-gray-700 mt-1">Range: 18-27°C</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Server className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold text-gray-900">Humidity</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">45%</div>
                <div className="text-sm text-gray-700 mt-1">Range: 45-55%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}