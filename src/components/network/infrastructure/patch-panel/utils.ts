import { PortType } from './types';

export const generatePorts = (count: number): PortType[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${i + 1}`.padStart(3, '0'),
    type: i % 3 === 0 ? 'fiber' : i % 2 === 0 ? 'data' : 'voice',
    status: Math.random() > 0.3 ? 'active' : 'inactive',
    label: `P${i + 1}`
  }));
};