import React from 'react';
import { Shield } from 'lucide-react';
import { InstallationSection } from '../../types';

export const getFireAlarmSection = (language: 'en' | 'ar'): InstallationSection => ({
  title: language === 'ar' ? 'نظام إنذار الحريق' : 'Fire Alarm System',
  icon: React.createElement(Shield, { className: "w-6 h-6 text-red-600" }),
  colorClass: 'border-red-500',
  steps: language === 'ar' ? [
    'تركيب كواشف الدخان في المواقع المحددة',
    'توصيل الكابلات وفحص التوصيلات',
    'برمجة لوحة التحكم',
    'اختبار النظام',
    'تدريب المستخدمين على التشغيل'
  ] : [
    'Install smoke detectors in designated locations',
    'Connect cables and verify connections',
    'Program control panel',
    'Test system functionality',
    'Train users on operation'
  ]
});