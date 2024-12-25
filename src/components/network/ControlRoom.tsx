import React from 'react';
import { Server, Shield, Lock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ControlRoomProps {
  ips: {
    nvr: string;
    fireAlarm: string;
    accessControl: string;
  };
}

export default function ControlRoom({ ips }: ControlRoomProps) {
  const { language } = useLanguage();
  
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h3 className="text-xl font-semibold text-center mb-4">
          {language === 'ar' ? 'غرفة التحكم الرئيسية' : 'Main Control Room'}
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <div className="flex items-center gap-2">
              <Server className="w-5 h-5 text-purple-600" />
              <span>NVR System</span>
            </div>
            <code className="bg-purple-50 px-2 py-1 rounded text-purple-600">{ips.nvr}</code>
          </div>
          
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-600" />
              <span>Fire Alarm Panel</span>
            </div>
            <code className="bg-red-50 px-2 py-1 rounded text-red-600">{ips.fireAlarm}</code>
          </div>
          
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-600" />
              <span>Access Control</span>
            </div>
            <code className="bg-green-50 px-2 py-1 rounded text-green-600">{ips.accessControl}</code>
          </div>
        </div>
      </div>
    </div>
  );
}