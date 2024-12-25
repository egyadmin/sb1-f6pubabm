import React from 'react';
import { Network } from 'lucide-react';

interface NetworkStatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change: string;
  gradient: string;
}

export default function NetworkStatsCard({ title, value, icon, change, gradient }: NetworkStatsCardProps) {
  return (
    <div className={`${gradient} rounded-xl p-6 border border-white/10 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}>
      <div className="flex items-center justify-between">
        <div className="p-2 bg-white/10 rounded-lg">
          {icon}
        </div>
        <span className="text-green-300 text-sm font-medium px-2 py-1 bg-green-900/30 rounded-full">
          {change}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-100">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
    </div>
  );
}