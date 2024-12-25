import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function NetworkLegend() {
  const { language } = useLanguage();
  
  return (
    <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
      <h4 className="font-semibold mb-3">
        {language === 'ar' ? 'تفاصيل الشبكة والكابلات' : 'Network & Cable Details'}
      </h4>
      
      <div className="space-y-4 text-sm">
        <div>
          <h5 className="font-medium mb-2">Network Segments:</h5>
          <div className="grid grid-cols-2 gap-2">
            <div>Fire Alarm: 10.1.1.0/24</div>
            <div>CCTV: 10.1.2.0/24</div>
            <div>Access Control: 10.1.3.0/24</div>
            <div>Management: 10.1.0.0/24</div>
          </div>
        </div>
        
        <div>
          <h5 className="font-medium mb-2">Cable Specifications:</h5>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-blue-400"></div>
              <span>Fiber Optic: Single-Mode, 4 cores</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-red-400"></div>
              <span>Fire Alarm: 2x2.5mm² FP200</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-green-400"></div>
              <span>CCTV & Access: CAT6A STP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}