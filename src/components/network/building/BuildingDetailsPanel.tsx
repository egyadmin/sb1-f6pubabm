import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { X, Building, Network, Phone, Shield } from 'lucide-react';

interface BuildingDetailsPanelProps {
  onClose: () => void;
}

export default function BuildingDetailsPanel({ onClose }: BuildingDetailsPanelProps) {
  const { language } = useLanguage();

  const buildings = [
    {
      id: 1,
      name: 'Admin Building',
      details: {
        voice: '48 Extensions',
        data: '96 Data Points',
        security: 'Access Control + CCTV'
      }
    },
    {
      id: 2,
      name: 'Operations Building',
      details: {
        voice: '64 Extensions',
        data: '128 Data Points',
        security: 'Full Security Suite'
      }
    },
    // Add more buildings as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-purple-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Building className="w-6 h-6 text-purple-600" />
          <h3 className="text-xl font-semibold">
            {language === 'ar' ? 'تفاصيل المباني' : 'Building Details'}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {buildings.map((building) => (
          <div key={building.id} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Building className="w-5 h-5 text-purple-600" />
              <h4 className="font-medium">{building.name}</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>{building.details.voice}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Network className="w-4 h-4 text-blue-500" />
                <span>{building.details.data}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-green-500" />
                <span>{building.details.security}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}