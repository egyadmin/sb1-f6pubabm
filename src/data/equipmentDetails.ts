import { EquipmentDetail } from '../types';

export const equipmentDetails: EquipmentDetail[] = [
  {
    id: '1',
    name_ar: 'كاشف دخان بصري ذكي قابل للعنونة',
    name_en: 'Intelligent Addressable Optical Smoke Detector',
    model: 'Honeywell NFXI-OPT',
    specifications_ar: [
      'حساسية قابلة للتعديل للكشف عن الدخان',
      'مؤشر LED ثنائي اللون للحالة',
      'غطاء حماية ضد الغبار',
      'درجة حرارة التشغيل: -30 إلى +70 درجة مئوية',
      'معتمد من UL/FM للسلامة'
    ],
    specifications_en: [
      'Adjustable smoke detection sensitivity',
      'Dual-color LED status indicator',
      'Dust protection cover',
      'Operating temperature: -30°C to +70°C',
      'UL/FM safety certified'
    ],
    installation_steps_ar: [
      'تثبيت قاعدة الكاشف على السقف',
      'توصيل الأسلاك وفقاً لمخطط التوصيل',
      'برمجة العنوان الفريد للكاشف',
      'تركيب الكاشف في القاعدة',
      'إجراء اختبار الأداء والمعايرة'
    ],
    installation_steps_en: [
      'Mount detector base to ceiling',
      'Connect wiring according to diagram',
      'Program unique address',
      'Install detector into base',
      'Perform calibration and testing'
    ],
    image_url: 'https://images.unsplash.com/photo-1562077772-3bd90403f7f0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name_ar: 'كاميرا مراقبة قبة داخلية 5 ميجابكسل',
    name_en: '5.0 Megapixel Indoor Dome CCTV Camera',
    model: 'Hikvision DS-2CD2155FWD-I',
    specifications_ar: [
      'دقة 5 ميجابكسل للصور عالية الوضوح',
      'رؤية ليلية بالأشعة تحت الحمراء حتى 30 متر',
      'تقنية WDR للتصوير في ظروف الإضاءة الصعبة',
      'مقاومة للماء والغبار بمعيار IP67',
      'دعم تحليلات الفيديو الذكية'
    ],
    specifications_en: [
      '5MP high resolution imaging',
      'IR night vision up to 30m',
      'Wide Dynamic Range (WDR) technology',
      'IP67 weather protection',
      'Smart video analytics support'
    ],
    installation_steps_ar: [
      'تحديد موقع التركيب المناسب',
      'تمديد كابلات الشبكة والطاقة',
      'تثبيت قاعدة الكاميرا',
      'ضبط زاوية الكاميرا وإعدادات العدسة',
      'تكوين إعدادات الشبكة والتسجيل'
    ],
    installation_steps_en: [
      'Determine suitable mounting location',
      'Run network and power cables',
      'Mount camera base',
      'Adjust camera angle and lens settings',
      'Configure network and recording settings'
    ],
    image_url: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    name_ar: 'جهاز تسجيل شبكي NVR مع تخزين 40 تيرابايت',
    name_en: 'NVR with 40TB Storage (RAID 5 backup)',
    model: 'Hikvision DS-9664NI-I8',
    specifications_ar: [
      'دعم تسجيل حتى 64 كاميرا',
      'سعة تخزين 40 تيرابايت مع نظام RAID 5',
      'دعم تسجيل بدقة حتى 12 ميجابكسل',
      'واجهة مستخدم سهلة الاستخدام',
      'نسخ احتياطي تلقائي للبيانات'
    ],
    specifications_en: [
      'Supports up to 64 cameras',
      '40TB storage with RAID 5 configuration',
      'Up to 12MP recording resolution',
      'User-friendly interface',
      'Automatic data backup'
    ],
    installation_steps_ar: [
      'تركيب الأقراص الصلبة في الجهاز',
      'توصيل كابلات الشبكة والطاقة',
      'تكوين نظام RAID',
      'إعداد الكاميرات وجداول التسجيل',
      'اختبار النظام والنسخ الاحتياطي'
    ],
    installation_steps_en: [
      'Install hard drives in NVR',
      'Connect network and power cables',
      'Configure RAID system',
      'Set up cameras and recording schedules',
      'Test system and backup functionality'
    ],
    image_url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80'
  }
];