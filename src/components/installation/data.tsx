import React from 'react';
import { Shield, Lock, Camera, Server, Wifi, CircleDot } from 'lucide-react';
import { InstallationData } from './types';

export const getInstallationData = (language: 'en' | 'ar'): InstallationData => ({
  // Existing sections...
  ductileIron: {
    title: language === 'ar' ? 'تركيب أنابيب الحديد الدكتايل' : 'Ductile Iron Installation',
    icon: <CircleDot className="w-6 h-6 text-gray-600" />,
    colorClass: 'border-gray-500',
    steps: language === 'ar' ? [
      'حفر الخنادق بالأبعاد المطلوبة حسب المواصفات',
      'تجهيز طبقة التأسيس من الرمل النظيف',
      'تركيب الأنابيب مع مراعاة الميول المطلوبة',
      'تركيب القطع الخاصة والمحابس حسب المخططات',
      'إجراء اختبار الضغط الهيدروليكي',
      'الردم وإعادة الأوضاع حسب المواصفات'
    ] : [
      'Excavate trenches according to specifications',
      'Prepare clean sand bedding layer',
      'Install pipes with required slopes',
      'Install fittings and valves as per drawings',
      'Perform hydraulic pressure test',
      'Backfill and reinstate according to specs'
    ]
  }
});