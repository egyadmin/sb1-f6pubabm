import React from 'react';
import { Lock } from 'lucide-react';
import { InstallationSection } from '../../types';

export const getAccessControlSection = (language: 'en' | 'ar'): InstallationSection => ({
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
});