export const quantities = [
  // Fire Alarm System
  {
    id: 'fa-1',
    name: {
      ar: 'كاشف دخان بصري ذكي قابل للعنونة',
      en: 'Intelligent Addressable Optical Smoke Detector'
    },
    specifications: {
      ar: 'كاشف دخان ضوئي ذكي مع قاعدة وملحقات التركيب',
      en: 'Intelligent optical smoke detector with mounting base and accessories'
    },
    unit: 'Nos',
    quantity: 26,
    rate: 706.31,
    category: 'fire-alarm'
  },
  {
    id: 'fa-2',
    name: {
      ar: 'نقطة نداء يدوي',
      en: 'Manual Call Point'
    },
    specifications: {
      ar: 'نقطة نداء يدوي قابلة للعنونة مع صندوق تركيب',
      en: 'Addressable manual call point with mounting box'
    },
    unit: 'Nos',
    quantity: 12,
    rate: 485.50,
    category: 'fire-alarm'
  },
  {
    id: 'fa-3',
    name: {
      ar: 'لوحة تحكم إنذار الحريق الرئيسية',
      en: 'Main Fire Alarm Control Panel'
    },
    specifications: {
      ar: 'لوحة تحكم رئيسية مع جميع البرامج والتراخيص',
      en: 'Main control panel with all software and licenses'
    },
    unit: 'Nos',
    quantity: 1,
    rate: 45750.00,
    category: 'fire-alarm'
  },

  // CCTV System
  {
    id: 'cctv-1',
    name: {
      ar: 'كاميرا قبة داخلية 5 ميجابكسل',
      en: '5MP Indoor Dome Camera'
    },
    specifications: {
      ar: 'كاميرا قبة داخلية مع عدسة متغيرة وتقنية WDR',
      en: 'Indoor dome camera with varifocal lens and WDR'
    },
    unit: 'Nos',
    quantity: 32,
    rate: 1250.00,
    category: 'cctv'
  },
  {
    id: 'cctv-2',
    name: {
      ar: 'كاميرا خارجية 8 ميجابكسل',
      en: '8MP Outdoor Bullet Camera'
    },
    specifications: {
      ar: 'كاميرا رصاصية خارجية مع رؤية ليلية',
      en: 'Outdoor bullet camera with night vision'
    },
    unit: 'Nos',
    quantity: 16,
    rate: 1850.00,
    category: 'cctv'
  },
  {
    id: 'cctv-3',
    name: {
      ar: 'جهاز تسجيل شبكي مع تخزين 40 تيرابايت',
      en: 'Network Video Recorder with 40TB Storage'
    },
    specifications: {
      ar: 'جهاز تسجيل شبكي مع نظام RAID ونسخ احتياطي',
      en: 'NVR with RAID configuration and backup'
    },
    unit: 'Nos',
    quantity: 1,
    rate: 35750.00,
    category: 'cctv'
  },

  // Infrastructure
  {
    id: 'infra-1',
    name: {
      ar: 'قناة HDPE 110مم مع 5 قنوات فرعية',
      en: '110mm HDPE Duct with 5 Subducts'
    },
    specifications: {
      ar: 'قناة رئيسية 110مم مع 5 قنوات فرعية 32مم',
      en: 'Main duct 110mm with 5x32mm subducts'
    },
    unit: 'm',
    quantity: 14460,
    rate: 99.18,
    category: 'infrastructure'
  },
  {
    id: 'infra-2',
    name: {
      ar: 'قناة HDPE 110مم مع 7 قنوات فرعية',
      en: '110mm HDPE Duct with 7 Subducts'
    },
    specifications: {
      ar: 'قناة رئيسية 110مم مع 7 قنوات فرعية 29مم',
      en: 'Main duct 110mm with 7x29mm subducts'
    },
    unit: 'm',
    quantity: 4270,
    rate: 133.67,
    category: 'infrastructure'
  },
  {
    id: 'infra-3',
    name: {
      ar: 'غرفة تفتيش ICT نوع 1',
      en: 'ICT Manhole Type-1'
    },
    specifications: {
      ar: 'غرفة تفتيش خرسانية مع غطاء حديد',
      en: 'Concrete manhole with iron cover'
    },
    unit: 'Nos',
    quantity: 27,
    rate: 16256.24,
    category: 'infrastructure'
  },
  {
    id: 'infra-4',
    name: {
      ar: 'غرفة تفتيش ICT نوع 2',
      en: 'ICT Manhole Type-2'
    },
    specifications: {
      ar: 'غرفة تفتيش خرسانية كبيرة مع غطاء حديد مزدوج',
      en: 'Large concrete manhole with double iron cover'
    },
    unit: 'Nos',
    quantity: 1,
    rate: 17756.82,
    category: 'infrastructure'
  },

  // Network Equipment
  {
    id: 'net-1',
    name: {
      ar: 'خزانة معدات 42U',
      en: '42U Equipment Cabinet'
    },
    specifications: {
      ar: 'خزانة معدات قياسية مع ملحقات التركيب',
      en: 'Standard equipment cabinet with mounting accessories'
    },
    unit: 'Nos',
    quantity: 1,
    rate: 47256.00,
    category: 'network'
  },
  {
    id: 'net-2',
    name: {
      ar: 'محول شبكة رئيسي',
      en: 'Core Network Switch'
    },
    specifications: {
      ar: 'محول شبكة رئيسي مع منافذ 10G',
      en: 'Core switch with 10G ports'
    },
    unit: 'Nos',
    quantity: 1,
    rate: 85750.00,
    category: 'network'
  },

  // Cables
  {
    id: 'cable-1',
    name: {
      ar: 'كابل ألياف بصرية 24 نواة',
      en: '24-Core Single-mode Fiber Optic Cable'
    },
    specifications: {
      ar: 'كابل ألياف بصرية أحادي النمط',
      en: 'Single-mode fiber optic cable'
    },
    unit: 'm',
    quantity: 18730,
    rate: 24.50,
    category: 'cables'
  },
  {
    id: 'cable-2',
    name: {
      ar: 'كابل Cat6A F/UTP',
      en: 'Cat6A F/UTP Cable'
    },
    specifications: {
      ar: 'كابل شبكة محمي من الفئة 6A',
      en: 'Category 6A shielded network cable'
    },
    unit: 'm',
    quantity: 24500,
    rate: 12.75,
    category: 'cables'
  }
];