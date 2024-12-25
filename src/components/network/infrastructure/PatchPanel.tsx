import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import PortGrid from './patch-panel/PortGrid';
import PanelLegend from './patch-panel/PanelLegend';

export default function PatchPanel() {
  const { language } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Port Grid */}
      <div className="relative bg-gray-900 p-4 rounded-lg border border-gray-800">
        <div 
          className="absolute inset-0 opacity-[0.02] bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1200&q=80)',
            filter: 'grayscale(100%) blur(1px)'
          }}
        />
        <div className="relative z-10">
          <PortGrid />
        </div>
      </div>

      {/* Legend */}
      <PanelLegend />
    </div>
  );
}