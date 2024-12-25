export interface NetworkSystem {
  name: string;
  icon: React.ReactNode;
  details: {
    label: string;
    value: string;
  }[];
}

export interface MDFStats {
  ports: number;
  uplinks: string;
  vlan: string;
  power: string;
}