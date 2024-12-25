import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Cable } from 'lucide-react';

export default function TelecomCabling() {
  const { language } = useLanguage();

  const cableTypes = [
    {
      title: language === 'ar' ? 'كابلات الهاتف' : 'Telephone Cables',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fF5a7xTvaIEDCne-R8SXKmDQhRsxioCysw&s',
      specs: [
        'Multi-pair UTP Cat3',
        '25/50/100 Pairs',
        'PE/PVC Outer Jacket',
        'Color Coded Pairs'
      ],
      color: 'border-orange-500'
    },
    {
      title: language === 'ar' ? 'كابلات البيانات' : 'Data Cables',
      image: 'https://assets.belden.com/transform/7ecd83ef-d82a-456a-892d-3f9c146e6279/Belden-Cat6A-Cables-Family-Fanout',
      specs: [
        'Cat6A F/UTP',
        '10Gbps Support',
        'Foiled Shielding',
        '23AWG Conductors'
      ],
      color: 'border-blue-500'
    },
    {
      title: language === 'ar' ? 'الألياف البصرية' : 'Fiber Optic',
      image: 'https://www.legrand.sa/sites/g/files/ocwmcr541/files/ecat_assets/05-01-2024/22-00/LG-032525-WEB-R.jpg',
      specs: [
        'Single-mode OS2',
        '9/125μm Core/Cladding',
        'G.652.D Compliant',
        'Low Attenuation'
      ],
      color: 'border-yellow-500'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Cable className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold">
          {language === 'ar' ? 'مواصفات الكابلات' : 'Cable Specifications'}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cableTypes.map((cable, index) => (
          <div key={index} className={`border-2 ${cable.color} rounded-lg overflow-hidden`}>
            <div className="aspect-video relative">
              <img
                src={cable.image}
                alt={cable.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <h4 className="p-4 text-white font-semibold">{cable.title}</h4>
              </div>
            </div>
            <div className="p-4 bg-gray-50">
              <ul className="space-y-2">
                {cable.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className={`w-2 h-2 rounded-full ${cable.color.replace('border', 'bg')}`} />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Cable Legend */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium mb-4">
          {language === 'ar' ? 'دليل الكابلات' : 'Cable Legend'}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-2 bg-yellow-500 rounded" />
            <span className="text-sm">Fiber Optic Backbone</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-2 bg-orange-500 rounded" />
            <span className="text-sm">Multi-pair Voice Cable</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-2 bg-blue-500 rounded" />
            <span className="text-sm">Cat6A Data Cable</span>
          </div>
        </div>
      </div>
    </div>
  );
}