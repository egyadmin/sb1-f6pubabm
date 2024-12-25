import React from 'react';
import { Server, Shield, Lock, Monitor, Wifi } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface RackUnitProps {
  name: string;
  icon: React.ReactNode;
  details?: string;
  height?: number;
}

const RackUnit = ({ name, icon, details, height = 1 }: RackUnitProps) => (
  <div 
    className="border-2 border-gray-200 bg-white rounded-md p-3 flex items-center gap-3"
    style={{ height: `${height * 44}px` }}
  >
    {icon}
    <div>
      <div className="font-medium">{name}</div>
      {details && <div className="text-sm text-gray-500">{details}</div>}
    </div>
  </div>
);

export default function RackLayout() {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">
        {language === 'ar' ? 'تخطيط خزانة المعدات (42U)' : 'Control Room Rack Layout (42U)'}
      </h2>

      <div className="grid gap-4">
        {/* Network Infrastructure */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-3">Network Infrastructure</h3>
          <div className="space-y-2">
            <RackUnit
              name="Core Switch (Layer 3)"
              icon={<Wifi className="w-5 h-5 text-blue-600" />}
              details="48-Port PoE+ 10G SFP+"
              height={2}
            />
            <RackUnit
              name="Distribution Switch - CCTV"
              icon={<Wifi className="w-5 h-5 text-blue-600" />}
              details="48-Port PoE+ for Cameras"
            />
            <RackUnit
              name="Distribution Switch - Access Control"
              icon={<Wifi className="w-5 h-5 text-blue-600" />}
              details="24-Port PoE+"
            />
          </div>
        </div>

        {/* Security Systems */}
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-3">Security Systems</h3>
          <div className="space-y-2">
            <RackUnit
              name="NVR System"
              icon={<Server className="w-5 h-5 text-purple-600" />}
              details="90CH, 40TB RAID5"
              height={4}
            />
            <RackUnit
              name="Fire Alarm Panel"
              icon={<Shield className="w-5 h-5 text-red-600" />}
              details="Addressable System Controller"
              height={3}
            />
            <RackUnit
              name="Access Control Server"
              icon={<Lock className="w-5 h-5 text-green-600" />}
              details="Central Management System"
              height={2}
            />
          </div>
        </div>

        {/* Monitoring Equipment */}
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-3">Monitoring Equipment</h3>
          <div className="space-y-2">
            <RackUnit
              name="Video Wall Controller"
              icon={<Monitor className="w-5 h-5 text-indigo-600" />}
              details="6-Display Matrix Controller"
              height={2}
            />
          </div>
        </div>

        {/* Power Management */}
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-3">Power Management</h3>
          <div className="space-y-2">
            <RackUnit
              name="UPS System"
              icon={<Server className="w-5 h-5 text-red-600" />}
              details="3KVA Online Double-Conversion"
              height={4}
            />
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="mt-6 grid grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-3">Network Specifications</h3>
          <ul className="space-y-2 text-sm">
            <li>• Core Switch: Layer 3 with 10G uplinks</li>
            <li>• Fiber Backbone: Single-mode, 4-core per building</li>
            <li>• PoE+ Support: 30W per port for cameras</li>
            <li>• Network Segregation: VLAN per system</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-3">Power & Environmental</h3>
          <ul className="space-y-2 text-sm">
            <li>• UPS Runtime: 30 minutes at full load</li>
            <li>• Cooling: N+1 redundancy</li>
            <li>• Temperature Monitoring</li>
            <li>• Humidity Control: 45-55% RH</li>
          </ul>
        </div>
      </div>
    </div>
  );
}