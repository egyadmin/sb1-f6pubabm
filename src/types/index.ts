export interface Equipment {
  id: string;
  name_ar: string;
  name_en: string;
  quantity: number;
  price: number;
  category: string;
  image_url: string;
  specifications_ar?: string[];
  specifications_en?: string[];
}

export interface EquipmentDetail {
  id: string;
  name_ar: string;
  name_en: string;
  model: string;
  specifications_ar: string[];
  specifications_en: string[];
  installation_steps_ar: string[];
  installation_steps_en: string[];
  image_url: string;
}