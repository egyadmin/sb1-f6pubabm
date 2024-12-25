export interface ICTDuct {
  id: string;
  ref: string;
  name_ar: string;
  name_en: string;
  quantity: number;
  unit: string;
  rate: number;
  specs_ar: string[];
  specs_en: string[];
}

export interface ICTManhole {
  id: string;
  ref: string;
  name_ar: string;
  name_en: string;
  quantity: number;
  rate: number;
  specs_ar: string[];
  specs_en: string[];
}

export interface ICTCabinet {
  id: string;
  ref: string;
  name_ar: string;
  name_en: string;
  quantity: number;
  rate: number;
  components_ar: string[];
  components_en: string[];
}