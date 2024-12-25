import { Building } from '../types';

export const buildings: Building[] = [
  { id: 1, name: 'Admin Building', x: 20, y: 30, ips: { voice: '10.10.1.0/24', data: '10.20.1.0/24' } },
  { id: 2, name: 'Operations Building', x: 80, y: 30, ips: { voice: '10.10.2.0/24', data: '10.20.2.0/24' } },
  { id: 3, name: 'Services Building', x: 20, y: 70, ips: { voice: '10.10.3.0/24', data: '10.20.3.0/24' } },
  { id: 4, name: 'Facilities Building', x: 80, y: 70, ips: { voice: '10.10.4.0/24', data: '10.20.4.0/24' } },
  { id: 5, name: 'Storage Building', x: 35, y: 50, ips: { voice: '10.10.5.0/24', data: '10.20.5.0/24' } },
  { id: 6, name: 'Workshop Building', x: 65, y: 50, ips: { voice: '10.10.6.0/24', data: '10.20.6.0/24' } },
];