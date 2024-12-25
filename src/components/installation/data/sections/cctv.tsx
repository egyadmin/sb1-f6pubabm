import React from 'react';
import { Camera } from 'lucide-react';
import { InstallationSection } from '../../types';

export const getCCTVSection = (language: 'en' | 'ar'): InstallationSection => ({
  title: language === 'ar' ? 'نظام المراقبة' : 'CCTV System',
  icon: React.createElement(Camera, { className: "w-6 h-6 text-blue-600" }),
  colorClass: 'border-blue-500',
  steps: language === 'ar' ? [
    'تحديد وتجهيز مواقع تركيب الكاميرات',
    'تركيب حوامل الكاميرات وضبط الزوايا',
    'تمديد كابلات الشبكة والطاقة',
    'تركيب وتكوين جهاز التسجيل NVR',
    'ضبط إعدادات التسجيل والحركة',
    'تكوين نظام المراقبة عن بعد',
    'إعداد التخزين والنسخ الاحتياطي',
    'اختبار جودة الصورة والتسجيل'
  ] : [
    'Survey and prepare camera mounting locations',
    'Install camera brackets and adjust angles',
    'Run network and power cables',
    'Install and configure NVR system',
    'Set up recording and motion settings',
    'Configure remote monitoring system',
    'Set up storage and backup',
    'Test image quality and recording'
  ]
});