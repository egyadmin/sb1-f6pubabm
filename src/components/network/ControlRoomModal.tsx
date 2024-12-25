import React from 'react';
import { X, Server, Shield, Network, Cable, Power, Thermometer, Database } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import RackLayout from '../rack/RackLayout';

interface ControlRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ControlRoomModal({ isOpen, onClose }: ControlRoomModalProps) {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-blue-500/30">
          <div className="flex items-center gap-3">
            <Server className="w-6 h-6 text-blue-400" />
            <div>
              <h2 className="text-xl font-bold text-blue-100">
                {language === 'ar' ? 'غرفة التحكم المركزية' : 'Central Control Room'}
              </h2>
              <p className="text-sm text-blue-300">
                {language === 'ar' ? 'مركز إدارة الأنظمة المتكاملة' : 'Integrated Systems Management Center'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-blue-800/50 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-blue-300" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <RackLayout />
        </div>
      </div>
    </div>
  );
}