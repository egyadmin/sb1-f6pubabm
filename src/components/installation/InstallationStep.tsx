import React from 'react';
import { CheckCircle } from 'lucide-react';

interface InstallationStepProps {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  steps: string[];
}

export default function InstallationStep({ title, icon, colorClass, steps }: InstallationStepProps) {
  return (
    <div className={`border-l-3 ${colorClass} pl-3`}>
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h3 className="font-medium text-base">{title}</h3>
      </div>
      <div className="space-y-2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-2 group">
            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0 opacity-75 group-hover:opacity-100 transition-opacity" />
            <span className="text-gray-600 group-hover:text-gray-900 transition-colors text-sm">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}