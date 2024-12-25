import React from 'react';
import { CircleDot } from 'lucide-react';
import { InstallationSection } from '../../types';

export const getDuctileIronSection = (language: 'en' | 'ar'): InstallationSection => ({
  title: language === 'ar' ? 'تركيب أنابيب الحديد الدكتايل' : 'Ductile Iron Installation',
  icon: React.createElement(CircleDot, { className: "w-6 h-6 text-gray-600" }),
  colorClass: 'border-gray-500',
  steps: language === 'ar' ? [
    'تحديد وتخطيط مسارات الأنابيب بدقة',
    'فحص المواد والتأكد من سلامتها قبل التركيب',
    'حفر الخنادق بعمق وعرض مناسب حسب المواصفات',
    'تجهيز طبقة التأسيس من الرمل النظيف بسمك 15 سم',
    'نقل وتنزيل الأنابيب باستخدام المعدات المناسبة',
    'تركيب الأنابيب مع ضبط الميول والمحاذاة',
    'تركيب الحشوات والوصلات بشكل صحيح',
    'تركيب المحابس والقطع الخاصة حسب المخططات',
    'إجراء اختبار الضغط الهيدروليكي عند 1.5 ضغط التشغيل',
    'تنظيف وتطهير خطوط الأنابيب قبل التشغيل',
    'الردم على طبقات مع الدك الجيد',
    'توثيق جميع مراحل التركيب والاختبارات'
  ] : [
    'Precise survey and marking of pipeline routes',
    'Inspect materials and verify condition before installation',
    'Excavate trenches to proper depth and width per specs',
    'Prepare 15cm clean sand bedding layer',
    'Transport and lower pipes using appropriate equipment',
    'Install pipes with correct slope and alignment',
    'Properly install gaskets and joints',
    'Install valves and fittings according to drawings',
    'Perform hydraulic pressure test at 1.5x operating pressure',
    'Clean and disinfect pipelines before operation',
    'Backfill in layers with proper compaction',
    'Document all installation phases and tests'
  ]
});