import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import BuildingDetails from './BuildingDetails';
import ControlRoom from './ControlRoom';
import NetworkLegend from './NetworkLegend';

const buildingPositions = [
  { x: 20, y: 25 },  // Building 1
  { x: 80, y: 25 },  // Building 2
  { x: 20, y: 75 },  // Building 3
  { x: 80, y: 75 },  // Building 4
  { x: 35, y: 50 },  // Building 5
  { x: 65, y: 50 },  // Building 6
];

const networkDetails = [
  {
    fireAlarmIP: '10.1.1.11',
    cctvIP: '10.1.2.11',
    accessControlIP: '10.1.3.11'
  },
  {
    fireAlarmIP: '10.1.1.21',
    cctvIP: '10.1.2.21',
    accessControlIP: '10.1.3.21'
  },
  {
    fireAlarmIP: '10.1.1.31',
    cctvIP: '10.1.2.31',
    accessControlIP: '10.1.3.31'
  },
  {
    fireAlarmIP: '10.1.1.41',
    cctvIP: '10.1.2.41',
    accessControlIP: '10.1.3.41'
  },
  {
    fireAlarmIP: '10.1.1.51',
    cctvIP: '10.1.2.51',
    accessControlIP: '10.1.3.51'
  },
  {
    fireAlarmIP: '10.1.1.61',
    cctvIP: '10.1.2.61',
    accessControlIP: '10.1.3.61'
  }
];

export default function NetworkDiagram() {
  const { language } = useLanguage();

  return (
    <div className="relative w-full h-[800px] bg-gray-50 rounded-xl shadow-lg overflow-hidden">
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        {buildingPositions.map((pos, index) => (
          <React.Fragment key={`lines-${index}`}>
            {/* Fiber Connection */}
            <line
              x1="50%"
              y1="50%"
              x2={`${pos.x}%`}
              y2={`${pos.y}%`}
              className="stroke-blue-400"
              strokeWidth="3"
              strokeDasharray="5,5"
            />
            {/* Secondary Connection */}
            <line
              x1="50%"
              y1="50%"
              x2={`${pos.x}%`}
              y2={`${pos.y}%`}
              className="stroke-red-300"
              strokeWidth="2"
              strokeDasharray="3,3"
              transform={`translate(2, 2)`}
            />
          </React.Fragment>
        ))}
      </svg>

      {/* Buildings */}
      {buildingPositions.map((pos, index) => (
        <BuildingDetails
          key={`building-${index}`}
          buildingNumber={index + 1}
          x={pos.x}
          y={pos.y}
          networkDetails={networkDetails[index]}
        />
      ))}

      {/* Control Room */}
      <ControlRoom
        language={language}
        networkDetails={{
          nvrIP: '10.1.0.10',
          fireAlarmIP: '10.1.0.11',
          accessControlIP: '10.1.0.12'
        }}
      />

      {/* Network Legend */}
      <NetworkLegend language={language} />
    </div>
  );
}