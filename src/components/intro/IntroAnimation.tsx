import React, { useEffect, useState } from 'react';
import { Shield, Network, Radio, CircleDot } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const { language } = useLanguage();
  const [step, setStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const stepDuration = 800; // Faster transitions
    const finalDelay = 4000; // Shorter final delay

    const timer = setTimeout(() => {
      if (step < 4) {
        setStep(step + 1);
      } else if (!isExiting) {
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 800);
        }, finalDelay);
      }
    }, stepDuration);

    return () => clearTimeout(timer);
  }, [step, onComplete, isExiting]);

  const projectInfo = {
    ar: {
      title: 'مشروع توسع قرية الإسكان الإنشائية',
      subtitle: '01 أعمال البنية التحتية - 100437',
      description: 'خطة عمل شاملة لمشروع البحر الأحمر - الاتصالات، أنظمة الأمن، المراقبة، شبكة تكنولوجيا المعلومات'
    },
    en: {
      title: 'Construction Housing Village Expansion Project',
      subtitle: '01 Infrastructure Works - 100437',
      description: 'Comprehensive Business Plan for the Red Sea Project - Communications, Security Systems, CCTV, ICT Network'
    }
  };

  const icons = [
    {
      icon: <Shield className="w-12 h-12 text-white" />,
      text: language === 'ar' ? 'أنظمة الأمن' : 'Security Systems',
      gradient: 'from-red-600/90 via-red-500/90 to-red-600/90'
    },
    {
      icon: <Network className="w-12 h-12 text-white" />,
      text: language === 'ar' ? 'شبكة ICT' : 'ICT Network',
      gradient: 'from-blue-600/90 via-blue-500/90 to-blue-600/90'
    },
    {
      icon: <Radio className="w-12 h-12 text-white" />,
      text: language === 'ar' ? 'الاتصالات' : 'Telecommunications',
      gradient: 'from-emerald-600/90 via-emerald-500/90 to-emerald-600/90'
    },
    {
      icon: <CircleDot className="w-12 h-12 text-white" />,
      text: language === 'ar' ? 'الحديد الدكتايل' : 'Ductile Iron',
      gradient: 'from-amber-600/90 via-amber-500/90 to-amber-600/90'
    }
  ];

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-1000 
        ${isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
    >
      {/* Enhanced Background with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://l.top4top.io/p_3281ftyuw1.jpeg')] bg-cover bg-center"
          style={{
            filter: 'brightness(0.3) contrast(1.2)',
            transform: `scale(${1 + (step * 0.02)})`,
            transition: 'transform 20s ease-out',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-gray-900/90" />
        
        {/* Animated Overlay Pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
            animation: 'pulse 4s infinite'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
        {/* Logos with Enhanced Animation */}
        <div 
          className={`mb-12 transition-all duration-1000 transform
            ${step >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="flex items-center justify-center gap-8">
            <img 
              src="https://www2.0zz0.com/2024/11/20/07/988856043.png"
              alt="Project Logo"
              className="h-24 w-auto object-contain hover:scale-105 transition-transform duration-500 animate-glow-pulse"
            />
            <img 
              src="https://a.top4top.io/p_3281a7rbh1.png"
              alt="Red Sea Project"
              className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Project Title with Enhanced Typography */}
        <div 
          className={`mb-16 transition-all duration-1000 transform
            ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            {projectInfo[language].title}
          </h1>
          <div className="bg-gradient-to-r from-blue-500/90 to-blue-600/90 backdrop-blur-sm rounded-full 
            px-8 py-4 inline-block shadow-lg hover:shadow-blue-500/20 transition-all duration-500
            hover:scale-105 border border-blue-400/20">
            <p className="text-white font-medium text-lg animate-shimmer">
              {projectInfo[language].subtitle}
            </p>
          </div>
          <p className="text-blue-100 mt-6 max-w-2xl mx-auto text-lg">
            {projectInfo[language].description}
          </p>
        </div>

        {/* Enhanced Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {icons.map((item, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700
                ${step > index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm p-6 rounded-xl 
                shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 
                border border-white/10 group`}>
                <div className="bg-white/10 rounded-lg p-4 group-hover:bg-white/20 transition-colors">
                  {item.icon}
                </div>
                <p className="mt-4 text-white font-medium text-base group-hover:text-blue-100 transition-colors">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${
                i < step 
                  ? 'w-8 h-2 bg-blue-400/90' 
                  : 'w-2 h-2 bg-blue-900/90'
              } rounded-full backdrop-blur-sm hover:bg-blue-300/90 cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}