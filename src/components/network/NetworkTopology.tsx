import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import NetworkTopologySection from './topology/NetworkTopologySection';
import MDFLayout from './mdf/MDFLayout';

export default function NetworkTopology() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8">
      {/* MDF Section */}
      <div className="relative">
        <MDFLayout />
      </div>

      {/* Network Topology Section */}
      <div className="relative">
        <NetworkTopologySection />
      </div>
    </div>
  );
}