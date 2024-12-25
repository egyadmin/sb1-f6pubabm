import React from 'react';
import Port from './Port';
import { generatePorts } from './utils';

export default function PortGrid() {
  const ports = generatePorts(48);

  return (
    <div className="grid grid-cols-12 gap-1">
      {ports.map((port) => (
        <Port key={port.id} port={port} />
      ))}
    </div>
  );
}