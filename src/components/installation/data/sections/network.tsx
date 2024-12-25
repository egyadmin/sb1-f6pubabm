import React from 'react';
import { Network } from 'lucide-react';
import { InstallationSection } from '../../types';

export const getNetworkSection = (language: 'en' | 'ar'): InstallationSection => ({
  title: language === 'ar' ? 'شبكة ICT' : 'ICT Network',
  icon: React.createElement(Network, { className: "w-6 h-6 text-purple-600" }),
  colorClass: 'border-purple-500',
  steps: language === 'ar' ? [
    'تركيب وتجهيز خزائن المعدات 42U',
    'تركيب وتكوين المحول الرئيسي Layer 3',
    'تمديد كابلات الألياف البصرية بين المباني',
    'تركيب لوحات توزيع الألياف البصرية',
    'إعداد الشبكات الافتراضية VLAN للأنظمة',
    'تكوين بروتوكولات التوجيه والأمان',
    'تركيب وتكوين نظام إدارة الشبكة',
    'إجراء اختبارات الأداء والموثوقية',
    'توثيق إعدادات الشبكة والمخططات'
  ] : [
    'Install and prepare 42U equipment cabinets',
    'Install and configure Layer 3 core switch',
    'Run fiber optic cables between buildings',
    'Install fiber optic patch panels',
    'Set up VLANs for different systems',
    'Configure routing and security protocols',
    'Install and configure network management system',
    'Perform performance and reliability tests',
    'Document network settings and diagrams'
  ]
});