import React from 'react';
import { Cable } from 'lucide-react';
import { MDFStats as MDFStatsType } from './types';

interface MDFStatsProps {
  stats: MDFStatsType;
}

export default function MDFStats({ stats }: MDFStatsProps) {
  return (
    <div className="col-span-2 mt-2">
      <div className="bg-gradient-to-r from-blue-800/30 via-blue-700/30 to-blue-800/30 rounded-lg p-3 border border-blue-400/30">
        <div className="flex items-center gap-2 mb-2">
          <Cable className="w-4 h-4 text-blue-300" />
          <span className="font-medium text-blue-100 text-sm">Infrastructure</span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="text-blue-200">
            <span className="block text-blue-100">Ports</span>
            <span>{stats.ports} Active</span>
          </div>
          <div className="text-blue-200">
            <span className="block text-blue-100">Uplinks</span>
            <span>{stats.uplinks}</span>
          </div>
          <div className="text-blue-200">
            <span className="block text-blue-100">VLAN</span>
            <span>{stats.vlan}</span>
          </div>
          <div className="text-blue-200">
            <span className="block text-blue-100">Power</span>
            <span>{stats.power}</span>
          </div>
        </div>
      </div>
    </div>
  );
}