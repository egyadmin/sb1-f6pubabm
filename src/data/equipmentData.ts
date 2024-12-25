import { Equipment } from '../types';

export const equipmentData: Equipment[] = [
  // Fire Alarm System
  {
    id: '1',
    name_ar: 'كاشف دخان بصري ذكي قابل للعنونة',
    name_en: 'Intelligent Addressable Optical Smoke Detector',
    quantity: 26,
    price: 706.31,
    category: 'fire-alarm',
    image_url: 'https://cdn11.bigcommerce.com/s-v2dp0apv4n/images/stencil/1280x1280/products/1774/3630/bsr-6155_0__72033.1638367561.png?c=1?imbypass=on',
    specifications_ar: [
      'حساسية قابلة للتعديل للكشف عن الدخان',
      'مؤشر LED ثنائي اللون للحالة',
      'غطاء حماية ضد الغبار',
      'درجة حرارة التشغيل: -30 إلى +70 درجة مئوية'
    ],
    specifications_en: [
      'Adjustable smoke detection sensitivity',
      'Dual-color LED status indicator',
      'Dust protection cover',
      'Operating temperature: -30°C to +70°C'
    ]
  },
  {
    id: '2',
    name_ar: 'لوحة تحكم إنذار الحريق الرئيسية',
    name_en: 'Main Fire Alarm Control Panel',
    quantity: 1,
    price: 45750.00,
    category: 'fire-alarm',
    image_url: 'https://t3.ftcdn.net/jpg/04/61/87/60/360_F_461876037_unBwjt1GoogKGK1bcSFXrSrolDFe4LNA.jpg',
    specifications_ar: [
      'نظام عنونة كامل',
      'شاشة LCD تعمل باللمس',
      'ذاكرة للأحداث تتسع لـ 10000 حدث',
      'بطارية احتياطية لمدة 24 ساعة'
    ],
    specifications_en: [
      'Full addressable system',
      'Touch LCD display',
      '10000 event memory',
      '24-hour backup battery'
    ]
  },

  // CCTV System
  {
    id: '3',
    name_ar: 'كاميرا مراقبة قبة داخلية 5 ميجابكسل',
    name_en: '5MP Indoor Dome Camera',
    quantity: 32,
    price: 1250.00,
    category: 'cctv',
    image_url: 'https://m.media-amazon.com/images/I/51PbNHN1DuL._AC_UF1000,1000_QL80_.jpg',
    specifications_ar: [
      'دقة 5 ميجابكسل',
      'رؤية ليلية حتى 30 متر',
      'تقنية WDR للتصوير في ظروف الإضاءة الصعبة',
      'تحليلات فيديو ذكية'
    ],
    specifications_en: [
      '5MP resolution',
      'Night vision up to 30m',
      'WDR technology',
      'Smart video analytics'
    ]
  },
  {
    id: '4',
    name_ar: 'جهاز تسجيل شبكي NVR مع تخزين 40 تيرابايت',
    name_en: 'Network Video Recorder with 40TB Storage',
    quantity: 1,
    price: 35750.00,
    category: 'cctv',
    image_url: 'https://m.media-amazon.com/images/I/41lx8ugj51L._AC_SL1000_.jpg',
    specifications_ar: [
      'سعة تخزين 40 تيرابايت',
      'دعم تسجيل 64 كاميرا',
      'نظام RAID للنسخ الاحتياطي',
      'واجهة مستخدم متعددة اللغات'
    ],
    specifications_en: [
      '40TB storage capacity',
      'Supports 64 cameras',
      'RAID backup system',
      'Multilingual user interface'
    ]
  },

  // Access Control
  {
    id: '5',
    name_ar: 'قارئ بطاقات ذكي',
    name_en: 'Smart Card Reader',
    quantity: 24,
    price: 850.00,
    category: 'access-control',
    image_url: 'https://images.unsplash.com/photo-1541280910158-c4e14f9c94a3?auto=format&fit=crop&w=800&q=80',
    specifications_ar: [
      'قراءة البطاقات عن بعد',
      'مقاوم للماء والغبار IP65',
      'لوحة مفاتيح مضاءة',
      'واجهة RS485/Wiegand'
    ],
    specifications_en: [
      'Contactless card reading',
      'IP65 water/dust resistant',
      'Backlit keypad',
      'RS485/Wiegand interface'
    ]
  },
  {
    id: '6',
    name_ar: 'وحدة تحكم بالأبواب',
    name_en: 'Door Controller Unit',
    quantity: 12,
    price: 1650.00,
    category: 'access-control',
    image_url: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    specifications_ar: [
      'تحكم بـ 4 أبواب',
      'ذاكرة 100000 مستخدم',
      'اتصال شبكي TCP/IP',
      'بطارية احتياطية'
    ],
    specifications_en: [
      '4-door control',
      '100,000 user capacity',
      'TCP/IP network connection',
      'Backup battery'
    ]
  },

  // Network Infrastructure
  {
    id: '7',
    name_ar: 'محول شبكة رئيسي',
    name_en: 'Core Network Switch',
    quantity: 1,
    price: 85750.00,
    category: 'network',
    image_url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    specifications_ar: [
      'منافذ 10G SFP+',
      'سعة تحويل 960Gbps',
      'دعم PoE+ على جميع المنافذ',
      'إدارة متقدمة للشبكة'
    ],
    specifications_en: [
      '10G SFP+ ports',
      '960Gbps switching capacity',
      'PoE+ on all ports',
      'Advanced network management'
    ]
  },
  {
    id: '8',
    name_ar: 'موجه شبكة متقدم',
    name_en: 'Advanced Network Router',
    quantity: 2,
    price: 45250.00,
    category: 'network',
    image_url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    specifications_ar: [
      'معالج متعدد النواة',
      'ذاكرة 16GB RAM',
      'منافذ 10G SFP+',
      'خدمات توجيه متقدمة'
    ],
    specifications_en: [
      'Multi-core processor',
      '16GB RAM',
      '10G SFP+ ports',
      'Advanced routing services'
    ]
  },

  // Cables & Infrastructure
  {
    id: '9',
    name_ar: 'كابل ألياف بصرية',
    name_en: 'Fiber Optic Cable',
    quantity: 5000,
    price: 12.75,
    category: 'infrastructure',
    image_url: 'https://mega-cloud.usa18.wondercdn.com/owirecable_en/uploads/2024/01/WX20240131-000531@2x-min-1024x663.png',
    specifications_ar: [
      'ألياف أحادية النمط',
      '24 نواة',
      'مقاوم للماء والقوارض',
      'معزز بالألياف'
    ],
    specifications_en: [
      'Single-mode fiber',
      '24 cores',
      'Water/rodent resistant',
      'Fiber reinforced'
    ]
  },
  {
    id: '10',
    name_ar: 'خزانة معدات 42U',
    name_en: '42U Equipment Cabinet',
    quantity: 1,
    price: 8500.00,
    category: 'infrastructure',
    image_url: 'https://microless.com/cdn/products/32650-hi.jpg',
    specifications_ar: [
      'ارتفاع 42U قياسي',
      'تبريد مدمج',
      'أبواب قابلة للقفل',
      'إدارة كابلات متكاملة'
    ],
    specifications_en: [
      'Standard 42U height',
      'Integrated cooling',
      'Lockable doors',
      'Integrated cable management'
    ]
  }
];