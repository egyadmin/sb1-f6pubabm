import React from 'react';
import { Server } from 'lucide-react';
import SystemCard from './SystemCard';
import MDFStats from './MDFStats';
import { networkSystems } from './data/systems';

export default function MDFSection() {
  const mdfStats = {
    ports: 48,
    uplinks: '10G SFP+',
    vlan: 'Segmented',
    power: 'Redundant'
  };

  return (
    <div className="bg-gradient-to-br from-blue-900/90 to-indigo-900/90 backdrop-blur-lg rounded-xl p-4 shadow-2xl border border-blue-400/30 w-[500px]">
      <div className="flex items-center gap-3 mb-4 border-b border-blue-400/30 pb-3">
        <div className="p-2 bg-blue-800/50 rounded-lg">
          <Server className="w-6 h-6 text-blue-300" />
        </div>
        <div>
          <h4 className="font-semibold text-lg text-blue-100">Main Distribution Frame</h4>
          <p className="text-blue-300 text-xs">Central Communication Hub</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {networkSystems.map((system, index) => (
          <SystemCard key={index} system={system} />
        ))}
        <MDFStats stats={mdfStats} />
      </div>
    </div>
  );
}