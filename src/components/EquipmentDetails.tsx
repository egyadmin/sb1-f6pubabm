import React from 'react';
import { Info, Tool } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { EquipmentDetail } from '../types';

interface Props {
  detail: EquipmentDetail;
}

export default function EquipmentDetails({ detail }: Props) {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={detail.image_url}
          alt={detail[`name_${language}`]}
          className="w-32 h-32 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-xl font-semibold mb-2">{detail[`name_${language}`]}</h3>
          <p className="text-gray-600">{detail.model}</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Info className="h-5 w-5 text-blue-600" />
          <h4 className="text-lg font-medium">{t('equipment.specifications')}</h4>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {detail[`specifications_${language}`].map((spec, index) => (
            <li key={index} className={isArabic ? 'text-right' : 'text-left'}>
              {spec}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <Tool className="h-5 w-5 text-blue-600" />
          <h4 className="text-lg font-medium">{t('equipment.installation')}</h4>
        </div>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {detail[`installation_steps_${language}`].map((step, index) => (
            <li key={index} className={isArabic ? 'text-right' : 'text-left'}>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}