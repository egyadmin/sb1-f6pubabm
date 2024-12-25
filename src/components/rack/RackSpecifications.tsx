import React from 'react';
import { Database, Power, Thermometer } from 'lucide-react';

interface RackSpecificationsProps {
  language: 'en' | 'ar';
}

export default function RackSpecifications({ language }: RackSpecificationsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Database className="w-5 h-5 text-blue-600" />
          {language === 'ar' ? 'مواصفات الخزانة' : 'Rack Specifications'}
        </h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• 42U Standard 19" Equipment Rack</li>
          <li>• Dimensions: 800mm x 1000mm</li>
          <li>• Front & Rear Perforated Doors</li>
          <li>• Side Panels with Locks</li>
          <li>• Anti-Tip Stabilizers</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Power className="w-5 h-5 text-red-600" />
          {language === 'ar' ? 'نظام الطاقة' : 'Power System'}
        </h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• Dual Power Feed A+B</li>
          <li>• 6KVA UPS Protection</li>
          <li>• Power Monitoring</li>
          <li>• Surge Protection</li>
          <li>• Emergency Power Off</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Thermometer className="w-5 h-5 text-emerald-600" />
          {language === 'ar' ? 'التحكم البيئي' : 'Environmental Control'}
        </h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• Temperature: 18-27°C</li>
          <li>• Humidity: 45-55%</li>
          <li>• Environmental Monitoring</li>
          <li>• Leak Detection</li>
          <li>• HVAC Integration</li>
        </ul>
      </div>
    </div>
  );
}