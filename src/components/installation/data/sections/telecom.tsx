import React from 'react';
import { Radio } from 'lucide-react';
import { InstallationSection } from '../../types';

export const getTelecomSection = (language: 'en' | 'ar'): InstallationSection => ({
  title: language === 'ar' ? 'نظام الاتصالات' : 'Telecommunication System',
  icon: React.createElement(Radio, { className: "w-6 h-6 text-orange-600" }),
  colorClass: 'border-orange-500',
  steps: language === 'ar' ? [
    'تركيب نظام IP-PBX الرئيسي مع الترخيص',
    'تركيب بوابة الصوت E1/PRI للخطوط الخارجية',
    'تمديد كابلات الهاتف متعددة الأزواج',
    'تركيب لوحات توزيع الهاتف وتوصيلها',
    'تركيب وتوصيل نقاط الهاتف النهائية',
    'برمجة النظام وإعداد خطة الترقيم',
    'تكوين خصائص المستخدمين والمجموعات',
    'إعداد نظام البريد الصوتي والتسجيل',
    'اختبار جميع الوظائف والخدمات',
    'تدريب المستخدمين على النظام'
  ] : [
    'Install IP-PBX system with licensing',
    'Install E1/PRI voice gateway for external lines',
    'Run multi-pair telephone cables',
    'Install and connect telephone patch panels',
    'Install and connect telephone endpoints',
    'Program system and set up numbering plan',
    'Configure user features and groups',
    'Set up voicemail and recording system',
    'Test all functions and services',
    'Train users on system operation'
  ]
});