
import React, { useState, useEffect, useCallback } from 'react';
import { slides } from './data';
import { Language } from './types';
import SlideLayout from './components/SlideLayout';
import { 
  CoverSlide, 
  StandardSlide, 
  TimelineSlide, 
  QuoteSlide, 
  GridSlide, 
  StatsSlide, 
  RoadmapSlide, 
  LeadershipSlide, 
  FlowchartSlide, 
  ThankYouSlide,
  OverlapSlide 
} from './components/SlideComponents';
import { ChevronLeft, ChevronRight, Maximize2, Languages } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [language, setLanguage] = useState<Language>('vi');

  const nextSlide = useCallback(() => {
    setDirection('next');
    setCurrentSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setDirection('prev');
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'vi' ? 'en' : 'vi');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === ' ' || e.key === 'ArrowRight' || e.key === 'Enter') {
        if (e.code === 'Space' || e.key === ' ') {
            e.preventDefault();
        }
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key.toLowerCase() === 'l') {
        toggleLanguage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentSlide = slides[currentSlideIndex];

  const renderSlideContent = () => {
    switch (currentSlide.type) {
      case 'cover': return <CoverSlide data={currentSlide} lang={language} />;
      case 'standard': return <StandardSlide data={currentSlide} lang={language} />;
      case 'overlap': return <OverlapSlide data={currentSlide} lang={language} />;
      case 'timeline': return <TimelineSlide data={currentSlide} lang={language} />;
      case 'quote': return <QuoteSlide data={currentSlide} lang={language} />;
      case 'grid': return <GridSlide data={currentSlide} lang={language} />;
      case 'stats': return <StatsSlide data={currentSlide} lang={language} />;
      case 'roadmap': return <RoadmapSlide data={currentSlide} lang={language} />;
      case 'leadership': return <LeadershipSlide data={currentSlide} lang={language} />;
      case 'flowchart': return <FlowchartSlide data={currentSlide} lang={language} />;
      case 'thankyou': return <ThankYouSlide data={currentSlide} lang={language} />;
      default: return <StandardSlide data={currentSlide} lang={language} />;
    }
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center p-0 md:p-4 font-sans overflow-hidden">
      <div className="w-full max-w-[1920px] aspect-video bg-white shadow-2xl overflow-hidden relative group rounded-sm">
        
        {/* Animated Wrapper */}
        <div 
            key={`${currentSlideIndex}-${language}`} 
            className={`w-full h-full ${direction === 'next' ? 'animate-slide-next' : 'animate-slide-prev'}`}
        >
            <SlideLayout 
                data={currentSlide} 
                currentPage={currentSlideIndex + 1} 
                totalPages={slides.length}
                lang={language}
            >
                {renderSlideContent()}
            </SlideLayout>
        </div>

        {/* Navigation Overlay Controls */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full z-50 border border-white/10">
           <button 
             onClick={prevSlide}
             disabled={currentSlideIndex === 0}
             className="p-2 text-white hover:text-fremed-light disabled:opacity-30 transition-colors"
             title="Previous Slide"
           >
             <ChevronLeft size={24} />
           </button>
           
           <div className="flex flex-col items-center min-w-[80px]">
              <span className="text-white text-[10px] opacity-60 font-mono tracking-tighter uppercase">Slide</span>
              <span className="text-white text-sm font-montserrat font-black">
                {currentSlideIndex + 1} / {slides.length}
              </span>
           </div>

           <button 
             onClick={nextSlide}
             disabled={currentSlideIndex === slides.length - 1}
             className="p-2 text-white hover:text-fremed-light disabled:opacity-30 transition-colors"
             title="Next Slide"
           >
             <ChevronRight size={24} />
           </button>

           <div className="w-px h-6 bg-white/20 mx-1"></div>

           {/* New Language Toggle Button in the Bar */}
           <button 
             onClick={toggleLanguage} 
             className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/10 transition-all group"
             title="Chuyển ngôn ngữ / Switch Language"
           >
             <Languages size={18} className={language === 'vi' ? 'text-blue-400' : 'text-red-400'} />
             <span className="text-xs font-bold text-white uppercase tracking-wider">
               {language === 'vi' ? 'VN' : 'EN'}
             </span>
           </button>

           <div className="w-px h-6 bg-white/20 mx-1"></div>

           <button onClick={toggleFullScreen} className="p-2 text-white hover:text-fremed-light transition-colors" title="Toàn màn hình / Fullscreen">
              <Maximize2 size={20} />
           </button>
        </div>

      </div>
    </div>
  );
};

export default App;
