import React from 'react';
import { Server } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import RackHeader from './sections/RackHeader';
import RackUnits from './sections/RackUnits';
import RackCableConnections from './sections/RackCableConnections';
import RackEnvironmental from './sections/RackEnvironmental';

export default function RackLayout() {
  const { language } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-8">
      <RackHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Rack Units */}
        <div className="space-y-6">
          <RackUnits />
        </div>

        {/* Right Column - Technical Details */}
        <div className="space-y-6">
          <RackCableConnections />
          <RackEnvironmental />
        </div>
      </div>
    </div>
  );
}