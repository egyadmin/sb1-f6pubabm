import React from 'react';
import { Server } from 'lucide-react';
import { InstallationSection } from '../../types';

export const getInfrastructureSection = (language: 'en' | 'ar'): InstallationSection => ({
  title: language === 'ar' ? 'البنية التحتية' : 'Infrastructure',
  icon: React.createElement(Server, { className: "w-6 h-6 text-gray-600" }),
  colorClass: 'border-gray-500',
  steps: language === 'ar' ? [
    'حفر المسارات وتركيب القنوات',
    'بناء غرف التفتيش',
    'تمديد القنوات الفرعية',
    'تركيب حوامل الكابلات',
    'توثيق المخططات التنفيذية'
  ] : [
    'Excavate paths and install ducts',
    'Construct manholes',
    'Install subducts',
    'Mount cable trays',
    'Document as-built drawings'
  ]
});