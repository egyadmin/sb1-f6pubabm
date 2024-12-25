import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Radio, Building, Server, Info } from 'lucide-react';
import MDFSection from './MDFSection';
import MDFDetailsModal from './MDFDetailsModal';
import BuildingDetailsModal from './BuildingDetailsModal';

const buildings = [
  { id: 1, name: 'Admin Building', x: 20, y: 30, ips: { voice: '10.10.1.0/24', data: '10.20.1.0/24' } },
  { id: 2, name: 'Operations Building', x: 80, y: 30, ips: { voice: '10.10.2.0/24', data: '10.20.2.0/24' } },
  { id: 3, name: 'Services Building', x: 20, y: 70, ips: { voice: '10.10.3.0/24', data: '10.20.3.0/24' } },
  { id: 4, name: 'Facilities Building', x: 80, y: 70, ips: { voice: '10.10.4.0/24', data: '10.20.4.0/24' } },
  { id: 5, name: 'Storage Building', x: 35, y: 50, ips: { voice: '10.10.5.0/24', data: '10.20.5.0/24' } },
  { id: 6, name: 'Workshop Building', x: 65, y: 50, ips: { voice: '10.10.6.0/24', data: '10.20.6.0/24' } },
];

export default function TelecomDiagram() {
  const { language } = useLanguage();
  const [isMDFModalOpen, setIsMDFModalOpen] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState<typeof buildings[0] | null>(null);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-lg shadow-xl p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Radio className="w-6 h-6 text-blue-300" />
          <h3 className="text-xl font-semibold text-white">
            {language === 'ar' ? 'مخطط نظام الاتصالات' : 'Telecommunication System Layout'}
          </h3>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Building Details Button */}
          <button
            onClick={() => setSelectedBuilding(buildings[0])}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors shadow-lg"
          >
            <Building className="w-5 h-5" />
            <span>{language === 'ar' ? 'تفاصيل المباني' : 'Building Details'}</span>
          </button>

          {/* MDF Details Button */}
          <button
            onClick={() => setIsMDFModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-lg"
          >
            <Info className="w-5 h-5" />
            <span>{language === 'ar' ? 'تفاصيل MDF' : 'MDF Details'}</span>
          </button>
        </div>
      </div>

      <div className="relative w-full min-h-[1000px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden p-8 border border-blue-500/30">
        {/* MDF Section - Centered at Top */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <MDFSection />
        </div>

        {/* Buildings */}
        {buildings.map((building) => (
          <div
            key={building.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{ left: `${building.x}%`, top: `${building.y}%` }}
            onClick={() => setSelectedBuilding(building)}
          >
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 w-64 hover:border-blue-400 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Building className="w-5 h-5 text-blue-300" />
                <span className="text-blue-100 font-medium">{building.name}</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="bg-blue-900/50 rounded px-2 py-1">
                  <span className="text-blue-200">Voice Network: </span>
                  <code className="text-blue-300">{building.ips.voice}</code>
                </div>
                <div className="bg-blue-900/50 rounded px-2 py-1">
                  <span className="text-blue-200">Data Network: </span>
                  <code className="text-blue-300">{building.ips.data}</code>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
          {buildings.map((building) => (
            <React.Fragment key={building.id}>
              <line
                x1="50%"
                y1="15%"
                x2={`${building.x}%`}
                y2={`${building.y}%`}
                className="stroke-blue-500/50"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
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
      </div>

      {/* Modals */}
      <MDFDetailsModal 
        isOpen={isMDFModalOpen}
        onClose={() => setIsMDFModalOpen(false)}
      />
      <BuildingDetailsModal
        isOpen={!!selectedBuilding}
        onClose={() => setSelectedBuilding(null)}
        building={selectedBuilding}
      />
    </div>
  );
}