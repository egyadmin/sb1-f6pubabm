import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Wrench, CheckCircle } from 'lucide-react';

export default function InstallationSteps() {
  const { language } = useLanguage();

  const steps = language === 'ar' ? [
    {
      title: 'تحضير الموقع',
      details: [
        'تحديد مسار الأنابيب',
        'فحص العوائق تحت الأرض',
        'تجهيز معدات الحفر'
      ]
    },
    {
      title: 'الحفر والتركيب',
      details: [
        'حفر الخنادق بالعمق المطلوب',
        'تجهيز طبقة الرمل',
        'تركيب الأنابيب وضبط الميول'
      ]
    },
    {
      title: 'التوصيل والفحص',
      details: [
        'تركيب القطع الخاصة والمحابس',
        'إجراء اختبار الضغط',
        'فحص التسريب'
      ]
    }
  ] : [
    {
      title: 'Site Preparation',
      details: [
        'Mark pipeline route',
        'Check underground obstacles',
        'Prepare excavation equipment'
      ]
    },
    {
      title: 'Excavation & Installation',
      details: [
        'Dig trenches to required depth',
        'Prepare sand bedding',
        'Install pipes and adjust slopes'
      ]
    },
    {
      title: 'Connection & Testing',
      details: [
        'Install fittings and valves',
        'Perform pressure test',
        'Check for leaks'
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Wrench className="w-6 h-6 text-gray-600" />
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'خطوات التركيب' : 'Installation Steps'}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">
                {index + 1}
              </span>
              {step.title}
            </h4>
            <ul className="space-y-3">
              {step.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}