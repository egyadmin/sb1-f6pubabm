import React from 'react';
import MDFSection from './mdf/MDFSection';
import BuildingCard from './diagram/BuildingCard';
import ConnectionLines from './diagram/ConnectionLines';
import NetworkLegend from './diagram/NetworkLegend';
import { buildings } from './diagram/data/buildings';

export default function NetworkDiagramCisco() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-lg shadow-xl p-8">
      <div className="relative w-full min-h-[1000px] rounded-xl overflow-hidden p-8 border border-blue-500/30">
        {/* MDF Section */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <MDFSection />
        </div>

        {/* Buildings */}
        {buildings.map((building) => (
          <BuildingCard key={building.id} building={building} />
        ))}

        {/* Connection Lines */}
        <ConnectionLines buildings={buildings} />

        {/* Legend */}
        <NetworkLegend />
      </div>
    </div>
  );
}