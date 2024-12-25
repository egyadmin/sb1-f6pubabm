import { Shield, Lock, Camera, Network, Server, CircleDot } from 'lucide-react';
import React from 'react';
import { InstallationSection } from '../types';

export const getInstallationData = (language: 'en' | 'ar'): Record<string, InstallationSection> => ({
  fireAlarm: {
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
  },
  accessControl: {
    title: language === 'ar' ? 'نظام التحكم بالدخول' : 'Access Control System',
    icon: React.createElement(Lock, { className: "w-6 h-6 text-green-600" }),
    colorClass: 'border-green-500',
    steps: language === 'ar' ? [
      'تركيب قارئات البطاقات',
      'تركيب الأقفال المغناطيسية',
      'توصيل وحدة التحكم',
      'برمجة النظام وإصدار البطاقات',
      'اختبار جميع نقاط الدخول'
    ] : [
      'Install card readers',
      'Mount magnetic locks',
      'Connect control unit',
      'Program system and issue cards',
      'Test all access points'
    ]
  },
  // ... rest of the sections remain the same but using React.createElement()
});