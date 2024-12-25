import React from 'react';
import { Server, Phone, Network, Cable } from 'lucide-react';

interface MDFSectionProps {
  className?: string;
}

export default function MDFSection({ className }: MDFSectionProps) {
  return (
    <div className={`${className} bg-gradient-to-br from-blue-900/90 to-indigo-900/90 backdrop-blur-lg rounded-xl p-4 shadow-2xl border border-blue-400/30 w-[500px]`}>
      <div className="flex items-center gap-3 mb-4 border-b border-blue-400/30 pb-3">
        <div className="p-2 bg-blue-800/50 rounded-lg">
          <Server className="w-6 h-6 text-blue-300" />
        </div>
        <div>
          <h4 className="font-semibold text-lg text-blue-100">Main Distribution Frame</h4>
          <p className="text-blue-300 text-xs">Central Communication Hub</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Voice Systems */}
        <div className="bg-blue-800/40 rounded-lg p-3 backdrop-blur-sm border border-blue-500/30">
          <div className="flex items-center gap-2 mb-2">
            <Phone className="w-4 h-4 text-blue-300" />
            <span className="font-medium text-blue-100 text-sm">Voice System</span>
          </div>
          <ul className="space-y-1 text-xs text-blue-200">
            <li className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>500 Extensions</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span>E1/PRI Gateway</span>
            </li>
          </ul>
        </div>

        {/* Network Core */}
        <div className="bg-blue-800/40 rounded-lg p-3 backdrop-blur-sm border border-blue-500/30">
          <div className="flex items-center gap-2 mb-2">
            <Network className="w-4 h-4 text-purple-300" />
            <span className="font-medium text-blue-100 text-sm">Network Core</span>
          </div>
          <ul className="space-y-1 text-xs text-blue-200">
            <li className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-purple-400" />
              <span>L3 Switch with 10G</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-purple-400" />
              <span>VLAN Segmentation</span>
            </li>
          </ul>
        </div>

        {/* Connection Details */}
        <div className="col-span-2 mt-2">
          <div className="bg-gradient-to-r from-blue-800/30 via-blue-700/30 to-blue-800/30 rounded-lg p-3 border border-blue-400/30">
            <div className="flex items-center gap-2 mb-2">
              <Cable className="w-4 h-4 text-blue-300" />
              <span className="font-medium text-blue-100 text-sm">Connectivity</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-blue-200">
                <span className="block text-blue-100">Voice Network</span>
                <span>• Multi-pair Cat3</span>
              </div>
              <div className="text-blue-200">
                <span className="block text-blue-100">Data Network</span>
                <span>• Cat6A + Fiber OS2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}