import { ICTDuct, ICTManhole, ICTCabinet } from '../types/ict';

export const ductData: ICTDuct[] = [
  {
    id: 'D1',
    ref: '33 71 00',
    name_ar: 'قناة HDPE 110مم مع 5 قنوات فرعية',
    name_en: '110mm HDPE with 5x32mm subducts',
    quantity: 14460,
    unit: 'm',
    rate: 99.18,
    specs_ar: [
      'قطر رئيسي 110مم',
      '5 قنوات فرعية 32مم',
      'مقاوم للتآكل والعوامل الجوية',
      'يشمل موصلات وملحقات التثبيت'
    ],
    specs_en: [
      'Main diameter 110mm',
      '5x32mm subducts',
      'Corrosion and weather resistant',
      'Includes connectors and fixing accessories'
    ]
  },
  {
    id: 'D2',
    ref: '33 71 00',
    name_ar: 'قناة HDPE 110مم مع 7 قنوات فرعية',
    name_en: '110mm HDPE with 7x29mm subducts',
    quantity: 4270,
    unit: 'm',
    rate: 133.67,
    specs_ar: [
      'قطر رئيسي 110مم',
      '7 قنوات فرعية 29مم',
      'مقاوم للتآكل والعوامل الجوية',
      'يشمل موصلات وملحقات التثبيت'
    ],
    specs_en: [
      'Main diameter 110mm',
      '7x29mm subducts',
      'Corrosion and weather resistant',
      'Includes connectors and fixing accessories'
    ]
  }
];

export const manholeData: ICTManhole[] = [
  {
    id: 'MH1',
    ref: '33 05 61',
    name_ar: 'غرفة تفتيش ICT نوع 1',
    name_en: 'ICT Manhole Type-1',
    quantity: 27,
    rate: 16256.24,
    specs_ar: [
      'خرسانة مسلحة مقاومة للماء',
      'غطاء حديد ثقيل',
      'سلم داخلي',
      'حوامل الكابلات'
    ],
    specs_en: [
      'Waterproof reinforced concrete',
      'Heavy duty iron cover',
      'Internal ladder',
      'Cable supports'
    ]
  },
  {
    id: 'MH2',
    ref: '33 05 61',
    name_ar: 'غرفة تفتيش ICT نوع 2',
    name_en: 'ICT Manhole Type-2',
    quantity: 1,
    rate: 17756.82,
    specs_ar: [
      'خرسانة مسلحة مقاومة للماء',
      'غطاء حديد ثقيل مزدوج',
      'سلم داخلي',
      'حوامل الكابلات موسعة'
    ],
    specs_en: [
      'Waterproof reinforced concrete',
      'Heavy duty double iron cover',
      'Internal ladder',
      'Extended cable supports'
    ]
  }
];

export const cabinetData: ICTCabinet[] = [
  {
    id: 'CAB1',
    ref: '28 21 25',
    name_ar: 'خزانة معدات 42U',
    name_en: '42U Equipment Cabinet',
    quantity: 1,
    rate: 47256.00,
    components_ar: [
      'لوحة توزيع الألياف البصرية - 12 منفذ',
      'لوحة توزيع CAT6A - 24 منفذ',
      'محول شبكة صناعي - 12 منفذ POE+',
      'وحدة توزيع الطاقة - 8 مخارج',
      'نظام تبريد مدمج'
    ],
    components_en: [
      'Fiber Optic Patch Panel - 12 Ports',
      'CAT6A Patch Panel - 24 Ports',
      'Industrial Switch - 12 POE+ Ports',
      'Power Distribution Unit - 8 Outlets',
      'Integrated cooling system'
    ]
  }
];