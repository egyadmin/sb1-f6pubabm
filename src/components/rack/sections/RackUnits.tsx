import React from 'react';
import { Wifi, Shield, Power } from 'lucide-react';
import RackUnit from '../components/RackUnit';

export default function RackUnits() {
  const units = [
    {
      name: 'Core Switch',
      icon: <Wifi className="w-6 h-6 text-gray-900" />,
      details: '48-Port PoE+ 10G SFP+',
      height: 2,
      specs: {
        model: 'Cisco C9300-48P',
        ports: '48x 1G/10G',
        power: '1100W PoE+'
      }
    },
    {
      name: 'CCTV Switch',
      icon: <Wifi className="w-6 h-6 text-gray-900" />,
      details: '24-Port PoE+ for Cameras',
      height: 2,
      specs: {
        model: 'Cisco C9200-24P',
        ports: '24x 1G PoE+',
        power: '740W'
      }
    },
    {
      name: 'NVR System',
      icon: <Shield className="w-6 h-6 text-gray-900" />,
      details: '90CH, 40TB RAID5',
      height: 4,
      specs: {
        storage: '40TB',
        redundancy: 'RAID 5',
        backup: 'Hot-swap'
      }
    },
    {
      name: 'UPS System',
      icon: <Power className="w-6 h-6 text-gray-900" />,
      details: '6KVA Online Double-Conversion',
      height: 4,
      specs: {
        capacity: '6KVA',
        runtime: '30 min',
        monitoring: 'SNMP'
      }
    }
  ];

  return (
    <div className="space-y-4">
      {units.map((unit, index) => (
        <RackUnit
          key={index}
          {...unit}
        />
      ))}
    </div>
  );
}