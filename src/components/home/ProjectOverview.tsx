import React from 'react';
import { FileText, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ProjectOverview() {
  const { language } = useLanguage();
  
  return (
    <section className="relative overflow-hidden rounded-2xl">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Project Overview"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            {language === 'ar' ? 'نظرة عامة على المشروع' : 'Project Overview'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">
                    {language === 'ar' ? 'رقم المشروع' : 'Project Number'}
                  </h3>
                  <p className="text-blue-200 mt-1 text-xl font-semibold">100437</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Calendar className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">
                    {language === 'ar' ? 'مدة التنفيذ' : 'Duration'}
                  </h3>
                  <p className="text-green-200 mt-1 text-xl font-semibold">
                    {language === 'ar' ? '12 شهر' : '12 months'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">
                    {language === 'ar' ? 'الموقع' : 'Location'}
                  </h3>
                  <p className="text-purple-200 mt-1 text-xl font-semibold">
                    {language === 'ar' ? 'قرية الإسكان الإنشائية' : 'Construction Housing Village'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}