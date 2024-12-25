import React from 'react';
import { Network } from 'lucide-react';

interface NetworkCardProps {
  title: string;
  subnet: string;
  details: string[];
  icon: React.ReactNode;
  gradient: string;
}

export default function NetworkCard({ title, subnet, details, icon, gradient }: NetworkCardProps) {
  return (
    <div className={`rounded-xl p-6 ${gradient} border border-gray-200/20 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-white/10 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <code className="text-sm text-blue-200 bg-blue-900/30 px-2 py-0.5 rounded">
            {subnet}
          </code>
        </div>
      </div>
      <div className="space-y-2">
        {details.map((detail, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-200 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>{detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}