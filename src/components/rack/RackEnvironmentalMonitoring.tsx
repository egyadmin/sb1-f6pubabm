import React from 'react';
import { Thermometer, Droplets, Wind, Power } from 'lucide-react';

export default function RackEnvironmentalMonitoring() {
  const environmentalData = [
    {
      icon: <Thermometer className="w-5 h-5 text-red-500" />,
      label: 'Temperature',
      value: '23.5°C',
      range: '18-27°C',
      status: 'normal',
      chart: generateMockData(23.5, 0.5, 10)
    },
    {
      icon: <Droplets className="w-5 h-5 text-blue-500" />,
      label: 'Humidity',
      value: '45%',
      range: '45-55%',
      status: 'normal',
      chart: generateMockData(45, 2, 10)
    },
    {
      icon: <Wind className="w-5 h-5 text-green-500" />,
      label: 'Airflow',
      value: '3.2 m/s',
      range: '2.5-4.0 m/s',
      status: 'normal',
      chart: generateMockData(3.2, 0.2, 10)
    },
    {
      icon: <Power className="w-5 h-5 text-purple-500" />,
      label: 'Power Load',
      value: '4.2 kVA',
      range: '0-6 kVA',
      status: 'normal',
      chart: generateMockData(4.2, 0.3, 10)
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Environmental Monitoring</h3>
      <div className="grid grid-cols-2 gap-4">
        {environmentalData.map((data, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {data.icon}
                <span className="font-medium">{data.label}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                data.status === 'normal' ? 'bg-green-100 text-green-700' :
                data.status === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {data.status}
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold">{data.value}</span>
              <span className="text-sm text-gray-500">Range: {data.range}</span>
            </div>
            <div className="mt-2 h-10">
              <svg className="w-full h-full">
                <path
                  d={generateChartPath(data.chart)}
                  className="stroke-current"
                  style={{
                    stroke: getStrokeColor(data.status),
                    fill: 'none',
                    strokeWidth: 2
                  }}
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function generateMockData(base: number, variance: number, points: number): number[] {
  return Array.from({ length: points }, () => 
    base + (Math.random() * 2 - 1) * variance
  );
}

function generateChartPath(data: number[]): string {
  const width = 100;
  const height = 40;
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - Math.min(...data)) / (Math.max(...data) - Math.min(...data))) * height;
    return `${x},${y}`;
  });
  return `M ${points.join(' L ')}`;
}

function getStrokeColor(status: string): string {
  switch (status) {
    case 'normal':
      return '#10B981';
    case 'warning':
      return '#F59E0B';
    case 'critical':
      return '#EF4444';
    default:
      return '#6B7280';
  }
}