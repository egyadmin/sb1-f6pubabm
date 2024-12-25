import React from 'react';
import { ClipboardList } from 'lucide-react';

function InstallationGuide() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <ClipboardList className="h-5 w-5 mr-2" />
        دليل التركيب
      </h2>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-medium text-lg">1. نظام إنذار الحريق</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>• تركيب كواشف الدخان في المواقع المحددة</li>
            <li>• توصيل الكابلات وفحص التوصيلات</li>
            <li>• برمجة لوحة التحكم</li>
            <li>• اختبار النظام</li>
          </ul>
        </div>
        
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-medium text-lg">2. نظام التحكم بالدخول</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>• تركيب قارئات البطاقات</li>
            <li>• تركيب الأقفال المغناطيسية</li>
            <li>• توصيل وحدة التحكم</li>
            <li>• برمجة النظام وإصدار البطاقات</li>
          </ul>
        </div>
        
        <div className="border-l-4 border-purple-500 pl-4">
          <h3 className="font-medium text-lg">3. نظام المراقبة CCTV</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>• تركيب الكاميرات في المواقع المحددة</li>
            <li>• مد كابلات الشبكة</li>
            <li>• إعداد جهاز التسجيل NVR</li>
            <li>• ضبط زوايا الكاميرات وإعدادات التسجيل</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InstallationGuide;