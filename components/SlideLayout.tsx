
import React from 'react';
import { SlideData, Language, LocalizedString } from '../types';

interface SlideLayoutProps {
  data: SlideData;
  children: React.ReactNode;
  currentPage: number;
  totalPages: number;
  lang: Language;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  data, 
  children, 
  currentPage, 
  totalPages, 
  lang
}) => {
  const isFullScreenLayout = ['cover', 'thankyou', 'quote', 'stats'].includes(data.type);
  const LOGO_URL = "https://fremed.com.vn/wp-content/uploads/2025/06/logotuyendung-1.webp";

  const t = (text: LocalizedString) => text[lang];

  return (
    <div className="relative w-full h-full overflow-hidden bg-white text-gray-800 flex flex-col font-sans">
      
      {/* GLOBAL LOGO - Top Right */}
      <div className="absolute top-6 right-8 z-50 pointer-events-none">
        <img 
          src={LOGO_URL} 
          alt="Fremed Logo" 
          className="h-28 w-auto object-contain drop-shadow-sm"
        />
      </div>

      {/* FOOTER FOR COVER & THANK YOU */}
      {(data.type === 'cover' || data.type === 'thankyou') ? (
        <div className="relative w-full h-full overflow-hidden bg-white text-gray-800">
          {children}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-fremed-dark to-fremed-light text-white font-sans flex items-center px-12 z-20">
             <div className="flex flex-row justify-between items-center w-full text-sm">
               <div className="flex gap-8 font-medium">
                 <span>Hotline: 028 3622 2244</span>
                 <span>Email: info@fremed.com.vn</span>
               </div>
               <div className="text-right opacity-90 max-w-md">
                 {lang === 'vi' 
                    ? 'Lô E9-3a, Đường số 1, KCN Hiệp Phước, Nhà Bè, TP.HCM'
                    : 'Lot E9-3a, Street No. 1, Hiep Phuoc Industrial Park, Hiep Phuoc Commune, HCM City'}
               </div>
             </div>
          </div>
        </div>
      ) : (
        <>
          {!isFullScreenLayout && (
            <div className="h-[15%] relative bg-white flex items-center px-12 z-20 border-b border-gray-100">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-fremed-dark to-fremed-light"></div>
              <h1 className="font-montserrat font-bold text-4xl text-fremed-dark uppercase tracking-tight max-w-[85%]">
                {t(data.title)}
              </h1>
              <div className="absolute right-0 top-0 h-full w-1/3 bg-gray-50 skew-x-12 -mr-16 z-[-1]"></div>
            </div>
          )}

          <div className="flex-1 relative overflow-hidden">
             {children}
          </div>

          <div className={`absolute bottom-6 right-8 font-bold font-mono text-lg z-30 ${isFullScreenLayout ? 'text-white/50' : 'text-fremed-dark/30'}`}>
            {currentPage.toString().padStart(2, '0')} / {totalPages}
          </div>
        </>
      )}
    </div>
  );
};

export default SlideLayout;
