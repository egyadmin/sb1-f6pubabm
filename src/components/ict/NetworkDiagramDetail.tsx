import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function NetworkDiagramDetail() {
  const { language } = useLanguage();
  
  return (
    <div className="space-y-8">
      {/* Network Topology Diagram */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">
          {language === 'ar' ? 'مخطط شبكة الاتصالات' : 'Network Topology Diagram'}
        </h3>
        <div className="relative aspect-[16/9] bg-gray-50 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1920&q=80"
            alt="Network Topology"
            className="w-full h-full object-cover"
          />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 562">
            {/* Main Backbone Line */}
            <path
              d="M100,281 H900"
              className="stroke-blue-500"
              strokeWidth="4"
              strokeDasharray="8,8"
              fill="none"
            />
            
            {/* Vertical Connections */}
            <path
              d="M200,281 V481 M400,281 V81 M600,281 V481 M800,281 V81"
              className="stroke-green-500"
              strokeWidth="3"
              fill="none"
            />
            
            {/* Connection Points */}
            <circle cx="200" cy="281" r="6" className="fill-blue-600" />
            <circle cx="400" cy="281" r="6" className="fill-blue-600" />
            <circle cx="600" cy="281" r="6" className="fill-blue-600" />
            <circle cx="800" cy="281" r="6" className="fill-blue-600" />
          </svg>
        </div>
      </div>

      {/* Cable Installation Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">
            {language === 'ar' ? 'تفاصيل تركيب الكابلات' : 'Cable Installation Details'}
          </h3>
          <div className="aspect-video rounded-lg overflow-hidden mb-4">
            <img 
              src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1200&q=80"
              alt="Cable Installation"
              className="w-full h-full object-cover"
            />
          </div>
          <ul className="space-y-2 text-sm">
            {(language === 'ar' ? [
              'عمق الحفر: 1 متر',
              'طبقة رملية: 10 سم',
              'شريط تحذيري: أصفر',
              'مسافة بين غرف التفتيش: 50 متر'
            ] : [
              'Trench depth: 1 meter',
              'Sand bedding: 10cm',
              'Warning tape: Yellow',
              'Manhole spacing: 50 meters'
            ]).map((detail, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Duct System Details */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">
            {language === 'ar' ? 'نظام القنوات' : 'Duct System'}
          </h3>
          <div className="aspect-video rounded-lg overflow-hidden mb-4">
            <img 
              src="https://youmats-media.s3.me-central-1.amazonaws.com/114579/conversions/pipes-factory-HDPE-size_500_500.webp"
              alt="HDPE Duct System"
              className="w-full h-full object-cover"
            />
          </div>
          <ul className="space-y-2 text-sm">
            {(language === 'ar' ? [
              'قناة رئيسية HDPE: 110mm',
              'قنوات فرعية: 5 × 32mm',
              'ضغط التشغيل: 10 بار',
              'مقاومة للأشعة فوق البنفسجية',
              'معتمدة حسب المواصفات العالمية'
            ] : [
              'Main HDPE duct: 110mm',
              'Subducts: 5 × 32mm',
              'Operating pressure: 10 bar',
              'UV resistant material',
              'International standards certified'
            ]).map((spec, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}