import React from 'react';
import { Shield, Camera, Box, Network, Cable, CircleDot } from 'lucide-react';

export const categories = [
  {
    id: 'fire-alarm',
    icon: <Shield className="w-5 h-5 text-red-600" />,
    name: {
      ar: 'نظام إنذار الحريق',
      en: 'Fire Alarm System'
    },
    description: {
      ar: 'كواشف الدخان، نقاط الإنذار، وأجهزة الإنذار الصوتي',
      en: 'Smoke detectors, call points, and sounders'
    }
  },
  {
    id: 'cctv',
    icon: <Camera className="w-5 h-5 text-blue-600" />,
    name: {
      ar: 'نظام المراقبة',
      en: 'CCTV System'
    },
    description: {
      ar: 'كاميرات المراقبة وأنظمة التسجيل',
      en: 'Surveillance cameras and recording systems'
    }
  },
  {
    id: 'infrastructure',
    icon: <Box className="w-5 h-5 text-purple-600" />,
    name: {
      ar: 'البنية التحتية',
      en: 'Infrastructure'
    },
    description: {
      ar: 'القنوات وغرف التفتيش',
      en: 'Ducts and manholes'
    }
  },
  {
    id: 'network',
    icon: <Network className="w-5 h-5 text-green-600" />,
    name: {
      ar: 'معدات الشبكة',
      en: 'Network Equipment'
    },
    description: {
      ar: 'أجهزة ومعدات الشبكة',
      en: 'Network devices and equipment'
    }
  },
  {
    id: 'cables',
    icon: <Cable className="w-5 h-5 text-orange-600" />,
    name: {
      ar: 'الكابلات',
      en: 'Cables'
    },
    description: {
      ar: 'كابلات الشبكة والألياف البصرية',
      en: 'Network and fiber optic cables'
    }
  },
  {
    id: 'ductile-iron',
    icon: <CircleDot className="w-5 h-5 text-gray-600" />,
    name: {
      ar: 'الحديد الدكتايل',
      en: 'Ductile Iron'
    },
    description: {
      ar: 'أنابيب ومحابس وقطع خاصة من الحديد الدكتايل',
      en: 'Ductile iron pipes, valves and fittings'
    }
  }
];