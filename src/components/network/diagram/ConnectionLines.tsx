import React from 'react';
import { Building } from './types';

interface ConnectionLinesProps {
  buildings: Building[];
}

export default function ConnectionLines({ buildings }: ConnectionLinesProps) {
  return (
    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
      {buildings.map((building) => (
        <React.Fragment key={building.id}>
          <line
            x1="50%"
            y1="15%"
            x2={`${building.x}%`}
            y2={`${building.y}%`}
            className="stroke-blue-500/50"
            strokeWidth="2"
            strokeDasharray="4 2"
          />
          <line
            x1="50%"
            y1="15%"
            x2={`${building.x}%`}
            y2={`${building.y}%`}
            className="stroke-orange-500/30"
            strokeWidth="1"
            strokeDasharray="4 2"
            transform="translate(2, 2)"
          />
        </React.Fragment>
      ))}
    </svg>
  );
}