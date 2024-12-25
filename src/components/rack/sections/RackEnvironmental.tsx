import React from 'react';
import { Thermometer, Droplets, Wind, Power } from 'lucide-react';
import EnvironmentalCard from '../components/EnvironmentalCard';

export default function RackEnvironmental() {
  const environmentalData = [
    {
      icon: <Thermometer className="w-5 h-5 text-gray-900" />,
      label: 'Temperature',
      value: '23.5°C',
      range: '18-27°C',
      status: 'normal'
    },
    {
      icon: <Droplets className="w-5 h-5 text-gray-900" />,
      label: 'Humidity',
      value: '45%',
      range: '45-55%',
      status: 'normal'
    },
    {
      icon: <Wind className="w-5 h-5 text-gray-900" />,
      label: 'Airflow',
      value: '3.2 m/s',
      range: '2.5-4.0 m/s',
      status: 'normal'
    },
    {
      icon: <Power className="w-5 h-5 text-gray-900" />,
      label: 'Power Load',
      value: '4.2 kVA',
      range: '0-6 kVA',
      status: 'normal'
    }
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Environmental Monitoring</h3>
      <div className="grid grid-cols-2 gap-4">
        {environmentalData.map((data, index) => (
          <EnvironmentalCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}