import React from 'react';
import { Shield } from 'lucide-react';
import { EquipmentList } from '../components/equipment';
import EnhancedSystemDiagram from '../components/EnhancedSystemDiagram';
import NetworkTopology from '../components/network/NetworkTopology';
import RackLayout from '../components/network/RackLayout';
import InstallationGuideContainer from '../components/installation/InstallationGuideContainer';
import { useLanguage } from '../contexts/LanguageContext';
import { equipmentData } from '../data/equipmentData';
import ProjectOverview from '../components/home/ProjectOverview';
import SystemStats from '../components/home/SystemStats';

export default function HomePage() {
  const { language } = useLanguage();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">
          {language === 'ar' ? 'نظام إدارة المعدات الأمنية' : 'Security Equipment Management System'}
        </h1>
      </div>

      <div className="grid gap-8">
        {/* Project Overview */}
        <ProjectOverview />

        {/* System Statistics */}
        <SystemStats />

        {/* Integrated System Diagram */}
        <section className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">
            {language === 'ar' ? 'مخطط النظام المتكامل' : 'Integrated System Diagram'}
          </h2>
          <EnhancedSystemDiagram />
        </section>

        {/* Network Topology */}
        <section className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">
            {language === 'ar' ? 'مخطط الشبكة' : 'Network Topology'}
          </h2>
          <NetworkTopology />
        </section>

        {/* Rack Layout */}
        <section>
          <RackLayout />
        </section>

        {/* Equipment List */}
        <section className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">
            {language === 'ar' ? 'قائمة المعدات' : 'Equipment List'}
          </h2>
          <EquipmentList equipment={equipmentData} />
        </section>
      </div>

      {/* Installation Guide Modal */}
      <InstallationGuideContainer />
    </div>
  );
}