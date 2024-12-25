import React from 'react';
import { Server } from 'lucide-react';

interface ConfigItem {
  label: string;
  value: string;
}

interface DeviceConfigCardProps {
  title: string;
  icon: React.ReactNode;
  configs: ConfigItem[];
  colorClass: string;
}

export default function DeviceConfigCard({ title, icon, configs, colorClass }: DeviceConfigCardProps) {
  return (
    <div className={`${colorClass} rounded-lg p-4 shadow-lg border-2`}>
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h4 className="font-semibold">{title}</h4>
      </div>
      <div className="space-y-2">
        {configs.map((config, index) => (
          <div key={index} className="flex items-center justify-between bg-white bg-opacity-50 rounded p-2 text-sm">
            <span className="text-gray-700">{config.label}</span>
            <code className="bg-white px-2 py-0.5 rounded text-gray-800">
              {config.value}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}