import React from 'react';
import { Server, Shield, Lock, Monitor, Wifi, Cable, Database, Power, Thermometer } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function IntegratedControlCenter() {
  const { language } = useLanguage();

  const rackSections = [
    {
      title: 'Network Infrastructure',
      items: [
        {
          name: 'Core Switch (Layer 3)',
          icon: <Wifi className="w-5 h-5 text-blue-600" />,
          details: '48-Port PoE+ 10G SFP+',
          specs: {
            model: 'Cisco C9300-48P',
            ports: '48x 1G/10G',
            power: '1100W PoE+'
          }
        },
        {
          name: 'Distribution Switch',
          icon: <Wifi className="w-5 h-5 text-blue-600" />,
          details: '24-Port PoE+ for Cameras',
          specs: {
            model: 'Cisco C9200-24P',
            ports: '24x 1G PoE+',
            power: '740W'
          }
        }
      ]
    },
    {
      title: 'Security Systems',
      items: [
        {
          name: 'NVR System',
          icon: <Shield className="w-5 h-5 text-red-600" />,
          details: '90CH, 40TB RAID5',
          specs: {
            storage: '40TB',
            redundancy: 'RAID 5',
            backup: 'Hot-swap'
          }
        },
        {
          name: 'Access Control Server',
          icon: <Lock className="w-5 h-5 text-green-600" />,
          details: 'Central Management System',
          specs: {
            capacity: '10,000 users',
            database: 'Redundant',
            backup: 'Real-time'
          }
        }
      ]
    }
  ];

  const environmentalStats = [
    {
      icon: <Thermometer className="w-5 h-5 text-red-600" />,
      label: 'Temperature',
      value: '23.5°C',
      range: '18-27°C',
      status: 'normal'
    },
    {
      icon: <Database className="w-5 h-5 text-blue-600" />,
      label: 'Humidity',
      value: '45%',
      range: '45-55%',
      status: 'normal'
    },
    {
      icon: <Wind className="w-5 h-5 text-green-600" />,
      label: 'Airflow',
      value: '3.2 m/s',
      range: '2.5-4.0 m/s',
      status: 'normal'
    },
    {
      icon: <Power className="w-5 h-5 text-purple-600" />,
      label: 'Power Load',
      value: '4.2 kVA',
      range: '0-6 kVA',
      status: 'normal'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-100 rounded-xl">
            <Server className="w-8 h-8 text-gray-900" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Control Room Rack Layout</h2>
            <p className="text-gray-600">Integrated Systems Management Center</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Rack Sections */}
        <div className="space-y-6">
          {rackSections.map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.details}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(item.specs).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 rounded-lg p-2">
                          <span className="text-sm text-gray-600 block">{key}</span>
                          <span className="font-medium text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Environmental Monitoring */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Environmental Monitoring</h3>
            <div className="grid grid-cols-2 gap-4">
              {environmentalStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {stat.icon}
                      <span className="font-medium text-gray-900">{stat.label}</span>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      {stat.status}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                    <span className="text-sm text-gray-600 block mt-1">Range: {stat.range}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cable Management */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cable Management</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Cable className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Fiber Optic</span>
                </div>
                <span className="text-sm text-gray-600">OS2 Single-mode</span>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Cable className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-900">Cat6A</span>
                </div>
                <span className="text-sm text-gray-600">F/UTP Shielded</span>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Power className="w-5 h-5 text-red-600" />
                  <span className="font-medium text-gray-900">Power</span>
                </div>
                <span className="text-sm text-gray-600">12 AWG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}