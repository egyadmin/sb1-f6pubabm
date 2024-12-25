import React from 'react';
import { Network, Phone, Shield } from 'lucide-react';
import { NetworkSystem } from '../types';

export const networkSystems: NetworkSystem[] = [
  {
    name: 'Core Network',
    icon: <Network className="w-4 h-4 text-blue-300" />,
    details: [
      { label: 'Switch', value: 'L3 10G' },
      { label: 'VLAN', value: 'Segmented' }
    ]
  },
  {
    name: 'Voice System',
    icon: <Phone className="w-4 h-4 text-green-300" />,
    details: [
      { label: 'PBX', value: 'IP-Based' },
      { label: 'Lines', value: '500+' }
    ]
  },
  {
    name: 'Security',
    icon: <Shield className="w-4 h-4 text-red-300" />,
    details: [
      { label: 'Access', value: 'Restricted' },
      { label: 'Monitor', value: '24/7' }
    ]
  }
];