import React from 'react';
import { Shield } from 'lucide-react';
import { InstallationSection } from '../../types';

export const getSecuritySection = (language: 'en' | 'ar'): InstallationSection => ({
  title: language === 'ar' ? 'أنظمة الأمن المتكاملة' : 'Integrated Security Systems',
  icon: React.createElement(Shield, { className: "w-6 h-6 text-indigo-600" }),
  colorClass: 'border-indigo-500',
  steps: language === 'ar' ? [
    'تركيب وتكامل أنظمة المراقبة بالكاميرات',
    'ربط أنظمة التحكم بالدخول مع النظام المركزي',
    'تكامل نظام إنذار الحريق مع أنظمة السلامة',
    'إعداد نظام المراقبة المركزي وشاشات العرض',
    'تكوين التقارير التلقائية والإنذارات',
    'برمجة سيناريوهات الطوارئ والاستجابة',
    'تكامل أنظمة الإخلاء والتواصل',
    'إعداد نظام النسخ الاحتياطي للبيانات',
    'تدريب فريق الأمن على التشغيل'
  ] : [
    'Install and integrate CCTV surveillance systems',
    'Connect access control to central system',
    'Integrate fire alarm with safety systems',
    'Set up central monitoring and displays',
    'Configure automated reports and alerts',
    'Program emergency scenarios and responses',
    'Integrate evacuation and communication systems',
    'Set up data backup system',
    'Train security team on operations'
  ]
});