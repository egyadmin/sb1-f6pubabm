import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function SystemDiagram() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className={`text-xl font-semibold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
        {language === 'ar' ? 'مخطط النظام' : 'System Diagram'}
      </h2>
      
      <div className="relative w-full h-[600px] border border-gray-200 rounded-lg p-4">
        {/* Fire Alarm System */}
        <div className="absolute top-4 left-4 bg-red-50 p-4 rounded-lg border border-red-200">
          <h3 className="text-red-700 font-medium mb-2">
            {language === 'ar' ? 'نظام إنذار الحريق' : 'Fire Alarm System'}
          </h3>
          <ul className="text-sm space-y-1">
            <li>• {language === 'ar' ? 'كواشف الدخان والحرارة' : 'Smoke & Heat Detectors'}</li>
            <li>• {language === 'ar' ? 'نقاط الإنذار اليدوية' : 'Manual Call Points'}</li>
            <li>• {language === 'ar' ? 'أجهزة الإنذار الصوتي والضوئي' : 'Sounders & Strobes'}</li>
          </ul>
        </div>

        {/* CCTV System */}
        <div className="absolute top-4 right-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-blue-700 font-medium mb-2">
            {language === 'ar' ? 'نظام المراقبة' : 'CCTV System'}
          </h3>
          <ul className="text-sm space-y-1">
            <li>• {language === 'ar' ? 'كاميرات المراقبة' : 'CCTV Cameras'}</li>
            <li>• {language === 'ar' ? 'جهاز التسجيل NVR' : 'NVR Recording Unit'}</li>
            <li>• {language === 'ar' ? 'شاشات العرض' : 'Display Monitors'}</li>
          </ul>
        </div>

        {/* Access Control */}
        <div className="absolute bottom-4 left-4 bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-green-700 font-medium mb-2">
            {language === 'ar' ? 'نظام التحكم بالدخول' : 'Access Control System'}
          </h3>
          <ul className="text-sm space-y-1">
            <li>• {language === 'ar' ? 'قارئات البطاقات' : 'Card Readers'}</li>
            <li>• {language === 'ar' ? 'وحدات التحكم' : 'Control Units'}</li>
            <li>• {language === 'ar' ? 'أقفال إلكترونية' : 'Electronic Locks'}</li>
          </ul>
        </div>

        {/* Network Infrastructure */}
        <div className="absolute bottom-4 right-4 bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h3 className="text-purple-700 font-medium mb-2">
            {language === 'ar' ? 'البنية التحتية للشبكة' : 'Network Infrastructure'}
          </h3>
          <ul className="text-sm space-y-1">
            <li>• {language === 'ar' ? 'خزائن المعدات' : 'Equipment Racks'}</li>
            <li>• {language === 'ar' ? 'محولات الشبكة' : 'Network Switches'}</li>
            <li>• {language === 'ar' ? 'كابلات الألياف البصرية' : 'Fiber Optic Cables'}</li>
          </ul>
        </div>

        {/* Central Lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-gray-300 rounded-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm font-medium">
                {language === 'ar' ? 'غرفة التحكم' : 'Control Room'}
              </div>
            </div>
          </div>
          {/* Connection lines */}
          <div className="absolute w-full h-full pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <path d="M200,200 L50,50" className="stroke-red-300" strokeWidth="2" fill="none" />
              <path d="M200,200 L350,50" className="stroke-blue-300" strokeWidth="2" fill="none" />
              <path d="M200,200 L50,350" className="stroke-green-300" strokeWidth="2" fill="none" />
              <path d="M200,200 L350,350" className="stroke-purple-300" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}