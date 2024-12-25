export interface Building {
  id: number;
  name: string;
  x: number;
  y: number;
  ips: {
    voice: string;
    data: string;
  };
}

export interface ConnectionLine {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  className: string;
  strokeWidth: number;
  dasharray: string;
  transform?: string;
}