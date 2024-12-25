import React from 'react';
import { CheckCircle } from 'lucide-react';
import { InstallationSection } from '../../types';

export const getTestingSection = (language: 'en' | 'ar'): InstallationSection => ({
  title: language === 'ar' ? 'الفحص والاختبار' : 'Testing & Commissioning',
  icon: React.createElement(CheckCircle, { className: "w-6 h-6 text-emerald-600" }),
  colorClass: 'border-emerald-500',
  steps: language === 'ar' ? [
    'فحص جميع المعدات والمكونات قبل التركيب',
    'اختبار كل نظام بشكل منفصل ومستقل',
    'فحص التكامل والربط بين جميع الأنظمة',
    'اختبار الأداء تحت ظروف التشغيل القصوى',
    'تجربة سيناريوهات الطوارئ المختلفة',
    'قياس زمن الاستجابة للأنظمة',
    'اختبار النسخ الاحتياطي واستعادة البيانات',
    'توثيق نتائج جميع الاختبارات',
    'إصدار شهادات المطابقة والضمان',
    'تسليم تقارير الاختبار النهائية'
  ] : [
    'Inspect all equipment before installation',
    'Test each system independently',
    'Verify integration between all systems',
    'Performance testing under maximum load',
    'Test various emergency scenarios',
    'Measure system response times',
    'Test backup and data recovery',
    'Document all test results',
    'Issue compliance certificates',
    'Deliver final testing reports'
  ]
});