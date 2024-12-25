export interface PortType {
  id: string;
  type: 'data' | 'voice' | 'fiber';
  status: 'active' | 'inactive';
  label: string;
}