import React from 'react';
import { Wrench } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import InstallationStep from './InstallationStep';
import { getInstallationData } from './data/installationData';

export default function InstallationGuide() {
  const { language } = useLanguage();
  const installationSteps = getInstallationData(language);

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 p-2 rounded-xl">
          <Wrench className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {language === 'ar' ? 'دليل التركيب التفصيلي' : 'Detailed Installation Guide'}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2">
        {Object.entries(installationSteps).map(([key, section]) => (
          <div 
            key={key} 
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
          >
            <InstallationStep
              title={section.title}
              steps={section.steps}
              icon={section.icon}
              colorClass={section.colorClass}
            />
          </div>
        ))}
      </div>
    </div>
  );
}