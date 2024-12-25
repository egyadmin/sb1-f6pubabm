import React from 'react';
import { X, Package, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    description: string;
    image: string;
    specs: string[];
  } | null;
}

export default function TelecomProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const { language } = useLanguage();
  
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <Package className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold">
              {language === 'ar' ? 'تفاصيل المنتج' : 'Product Details'}
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-gray-200">
                <img
                  src={product.image}
                  alt={product.description}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-gray-700">
                  {language === 'ar' ? 'الوصف' : 'Description'}
                </h4>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2 text-blue-700">
                  <CheckCircle className="w-5 h-5" />
                  {language === 'ar' ? 'المواصفات الفنية' : 'Technical Specifications'}
                </h4>
                <ul className="space-y-3">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">
                    {language === 'ar' ? 'متوافق مع المعايير العالمية' : 'Compliant with International Standards'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}