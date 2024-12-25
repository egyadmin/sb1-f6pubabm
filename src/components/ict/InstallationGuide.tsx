import React from 'react';
import { Wrench, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function InstallationGuide() {
  const { language } = useLanguage();

  const steps = language === 'ar' ? [
    {
      title: 'تحضير الموقع',
      details: [
        'تحديد مسار القنوات',
        'فحص العوائق تحت الأرض',
        'تجهيز معدات الحفر'
      ],
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'تركيب القنوات',
      details: [
        'حفر الخنادق بعمق مناسب',
        'تجهيز طبقة الرمل',
        'تمديد القنوات وتثبيتها'
      ],
      image: 'https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'توصيل الكابلات',
      details: [
        'سحب الكابلات عبر القنوات',
        'تركيب صناديق التوصيل',
        'فحص التوصيلات'
      ],
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80'
    }
  ] : [
    {
      title: 'Site Preparation',
      details: [
        'Mark duct routes',
        'Check underground obstacles',
        'Prepare excavation equipment'
      ],
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Duct Installation',
      details: [
        'Dig trenches to proper depth',
        'Prepare sand bedding',
        'Lay and secure ducts'
      ],
      image: 'https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Cable Connection',
      details: [
        'Pull cables through ducts',
        'Install junction boxes',
        'Test connections'
      ],
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Wrench className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'دليل التركيب' : 'Installation Guide'}
        </h3>
      </div>

      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">{step.title}</h4>
              <ul className="space-y-3">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}