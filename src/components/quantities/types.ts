export interface Quantity {
  id: string;
  name_ar: string;
  name_en: string;
  specifications_ar: string;
  specifications_en: string;
  unit: string;
  quantity: number;
  categoryId: string;
}

export interface Category {
  id: string;
  icon: JSX.Element;
  name: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
}