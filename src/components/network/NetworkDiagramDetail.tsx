import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Server, Building } from 'lucide-react';
import MDFDetailsPanel from './mdf/MDFDetailsPanel';
import BuildingDetailsPanel from './building/BuildingDetailsPanel';

export default function NetworkDiagramDetail() {
  const { language } = useLanguage();
  const [showMDFDetails, setShowMDFDetails] = useState(false);
  const [showBuildingDetails, setShowBuildingDetails] = useState(false);

  const buildings = [
    { id: 1, name: 'Admin Building', x: 20, y: 30 },
    { id: 2, name: 'Operations Building', x: 80, y: 30 },
    { id: 3, name: 'Services Building', x: 20, y: 70 },
    { id: 4, name: 'Facilities Building', x: 80, y: 70 },
    { id: 5, name: 'Storage Building', x: 35, y: 50 },
    { id: 6, name: 'Workshop Building', x: 65, y: 50 }
  ];

  return (
    <div className="space-y-8">
      {/* Control Buttons */}
      <div className="flex items-center justify-end gap-4">
        <button
          onClick={() => setShowBuildingDetails(!showBuildingDetails)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors shadow-lg"
        >
          <Building className="w-5 h-5" />
          <span>
            {language === 'ar' ? 'تفاصيل المباني' : 'Building Details'}
          </span>
        </button>

        <button
          onClick={() => setShowMDFDetails(!showMDFDetails)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-lg"
        >
          <Server className="w-5 h-5" />
          <span>
            {language === 'ar' ? 'تفاصيل MDF' : 'MDF Details'}
          </span>
        </button>
      </div>

      {/* Network Diagram */}
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-xl p-8 min-h-[800px]">
        {/* MDF Section */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 w-64">
            <div className="flex items-center gap-2 mb-2">
              <Server className="w-5 h-5 text-blue-300" />
              <span className="text-blue-100 font-medium">Main Distribution Frame</span>
            </div>
            <div className="text-xs text-blue-200">
              <div>Core Network Equipment</div>
              <div>Voice & Data Distribution</div>
            </div>
          </div>
        </div>

        {/* Buildings */}
        {buildings.map((building) => (
          <div
            key={building.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${building.x}%`, top: `${building.y}%` }}
          >
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 w-64">
              <div className="flex items-center gap-2 mb-2">
                <Building className="w-5 h-5 text-blue-300" />
                <span className="text-blue-100 font-medium">{building.name}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-blue-900/50 rounded px-2 py-1">
                  <span className="text-blue-200">Voice: </span>
                  <code className="text-blue-300">10.1.1.{building.id}</code>
                </div>
                <div className="bg-blue-900/50 rounded px-2 py-1">
                  <span className="text-blue-200">Data: </span>
                  <code className="text-blue-300">10.2.1.{building.id}</code>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
          {buildings.map((building) => (
            <React.Fragment key={building.id}>
              {/* Primary Connection */}
              <line
                x1="50%"
                y1="15%"
                x2={`${building.x}%`}
                y2={`${building.y}%`}
                className="stroke-blue-500/50"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
              {/* Secondary Connection */}
              <line
                x1="50%"
                y1="15%"
                x2={`${building.x}%`}
                y2={`${building.y}%`}
                className="stroke-orange-500/30"
                strokeWidth="1"
                strokeDasharray="4 2"
                transform="translate(2, 2)"
              />
            </React.Fragment>
          ))}
        </svg>

        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
          <h4 className="text-blue-100 font-medium mb-2">Network Legend</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-blue-500/50"></div>
              <span className="text-blue-200">Fiber Connection</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-orange-500/30"></div>
              <span className="text-blue-200">Copper Connection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Panels */}
      {showMDFDetails && <MDFDetailsPanel onClose={() => setShowMDFDetails(false)} />}
      {showBuildingDetails && <BuildingDetailsPanel onClose={() => setShowBuildingDetails(false)} />}
    </div>
  );
}