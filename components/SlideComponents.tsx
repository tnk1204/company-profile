
import React from 'react';
import { SlideData, TimelineItem, GridItem, LeadershipItem, Language, LocalizedString } from '../types';
import { ArrowRight, CheckCircle2, Target, Factory, Users, Award, Zap, Quote as QuoteIcon, ArrowUpRight } from 'lucide-react';

/* --- HELPER --- */
const translate = (text: string | LocalizedString | undefined, lang: Language): string => {
  if (!text) return '';
  if (typeof text === 'string') return text;
  return text[lang];
};

// Fix: Use React.FC to properly type the component so it accepts the 'key' prop when rendered in a list.
const BulletPoint: React.FC<{ text: string; delay: number }> = ({ text, delay }) => (
  <li 
    className="flex items-start gap-4 mb-4 group opacity-0 animate-fade-in-up" 
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="mt-1.5 min-w-[20px] h-[20px] rounded-full border-2 border-fremed-light text-fremed-dark flex items-center justify-center group-hover:bg-fremed-dark group-hover:border-fremed-dark group-hover:text-white transition-all duration-300">
        <div className="w-1.5 h-1.5 rounded-full bg-fremed-light group-hover:bg-white transition-colors"></div>
    </div>
    <span className="font-sans text-xl md:text-2xl text-gray-700 leading-snug font-medium group-hover:text-black transition-colors">
      {text}
    </span>
  </li>
);

/* --- SPECIFIC SLIDE LAYOUTS --- */

export const CoverSlide: React.FC<{ data: SlideData; lang: Language }> = ({ data, lang }) => (
  <div className="w-full h-full relative flex bg-gray-50">
     <div className="absolute top-0 left-0 w-[45%] h-full overflow-hidden pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#007e40_2px,transparent_2px)] [background-size:24px_24px]"></div>
     </div>

     <div className="w-[45%] h-full relative z-10 flex flex-col justify-center px-12 border-r border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="w-24 h-2 bg-gradient-to-r from-fremed-dark to-fremed-light mb-8 opacity-0 animate-fade-in-right" style={{ animationDelay: '200ms' }}></div>
        <h2 className="font-montserrat font-black text-5xl md:text-6xl lg:text-7xl text-fremed-dark leading-tight mb-4 tracking-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          {translate(data.title, lang)}
        </h2>
        <h3 className="font-sans font-bold text-2xl text-gray-500 uppercase tracking-widest mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          {translate(data.subtitle, lang)}
        </h3>
        
        <div className="flex gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '800ms' }}>
           <div className="w-3 h-3 rounded-full bg-fremed-dark"></div>
           <div className="w-3 h-3 rounded-full border-2 border-fremed-dark"></div>
           <div className="w-16 h-3 rounded-full bg-gray-200"></div>
        </div>
     </div>
     
     <div className="w-[55%] h-full relative opacity-0 animate-zoom-in" style={{ animationDelay: '200ms' }}>
        <img src={data.image} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-fremed-dark/10 mix-blend-multiply"></div>
     </div>
  </div>
);

export const ThankYouSlide: React.FC<{ data: SlideData; lang: Language }> = ({ data, lang }) => (
  <div className="w-full h-full relative flex items-center bg-fremed-dark text-white overflow-hidden">
     <div className="absolute inset-0 z-0 opacity-0 animate-zoom-in">
        <img src={data.image} alt="Background" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-fremed-dark via-fremed-dark/95 to-fremed-dark/40"></div>
     </div>
     
     <div className="relative z-10 w-full max-w-[90%] mx-auto grid grid-cols-2 items-center gap-10">
        <div>
           <div className="w-16 h-16 border-4 border-fremed-light rounded-full flex items-center justify-center mb-6 opacity-0 animate-fade-in-up bg-white/5 backdrop-blur">
              <CheckCircle2 size={32} className="text-fremed-light" />
           </div>
           <h2 className="font-montserrat font-black text-6xl md:text-7xl mb-6 text-white opacity-0 animate-fade-in-up leading-none" style={{ animationDelay: '300ms' }}>
             {translate(data.title, lang)}
           </h2>
           <p className="font-sans text-3xl text-green-100 font-light border-l-4 border-fremed-light pl-6 py-2 opacity-0 animate-fade-in-right" style={{ animationDelay: '500ms' }}>
             {translate(data.subtitle, lang)}
           </p>
        </div>
        <div className="flex justify-end">
           <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 border border-white/20 opacity-0 animate-fade-in-left hover:border-fremed-light transition-colors duration-500" style={{ animationDelay: '700ms' }}>
              <h3 className="text-base font-bold mb-6 uppercase tracking-[0.3em] text-fremed-light">
                {lang === 'vi' ? 'Thông tin liên hệ' : 'Contact Information'}
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-300 uppercase tracking-wider mb-1">Hotline</span>
                    <p className="text-3xl font-light tracking-tight">028 3622 2244</p>
                </div>
                <div className="w-full h-px bg-white/20"></div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-300 uppercase tracking-wider mb-1">Email</span>
                    <p className="text-3xl font-light tracking-tight">info@fremed.com.vn</p>
                </div>
              </div>
           </div>
        </div>
     </div>
  </div>
);

export const StandardSlide: React.FC<{ data: SlideData; lang: Language }> = ({ data, lang }) => (
  <div className="flex h-full w-full p-0">
    <div className="w-[45%] h-full flex flex-col justify-center px-12 py-8 bg-white relative z-10 border-r border-gray-200">
      <div className="relative z-10 opacity-0 animate-fade-in-right" style={{ animationDelay: '200ms' }}>
         {data.subtitle && (
            <h3 className="font-montserrat font-bold text-xl text-fremed-dark mb-6 uppercase tracking-wide flex items-center gap-4">
               <span className="w-12 h-1 bg-fremed-light"></span>
               {translate(data.subtitle, lang)}
            </h3>
         )}
         <ul className="space-y-2">
            {data.content?.map((text, idx) => (
               <BulletPoint key={idx} text={translate(text, lang)} delay={500 + (idx * 150)} />
            ))}
         </ul>
      </div>

      {data.highlight && (
        <div className="mt-10 opacity-0 animate-bounce-in relative z-10" style={{ animationDelay: '800ms' }}>
           <div className="border-l-8 border-fremed-light bg-gray-50 pl-6 py-4 pr-4 flex items-center gap-4 shadow-sm">
              <Award className="text-fremed-dark stroke-1 flex-shrink-0" size={40} />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-1 font-bold">Key Milestone</p>
                <p className="text-fremed-dark font-montserrat font-bold text-2xl leading-tight">{translate(data.highlight, lang)}</p>
              </div>
           </div>
        </div>
      )}
    </div>

    <div className="w-[55%] h-full relative opacity-0 animate-zoom-in" style={{ animationDelay: '400ms' }}>
       <img src={data.image} alt={translate(data.title, lang)} className="w-full h-full object-cover" />
    </div>
  </div>
);

export const OverlapSlide: React.FC<{ data: SlideData; lang: Language }> = ({ data, lang }) => (
  <div className="w-full h-full flex items-center justify-end relative bg-gray-100 p-0 overflow-hidden">
     <div className="absolute top-0 left-0 text-[250px] font-black text-white pointer-events-none font-montserrat leading-none -ml-4 -mt-10 select-none z-0">
       {data.id.toString().padStart(2, '0')}
     </div>

     <div className="absolute top-0 right-0 w-[60%] h-full opacity-0 animate-slide-next" style={{ animationDelay: '200ms' }}>
         <img src={data.image} className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-fremed-dark/20 mix-blend-overlay"></div>
     </div>

     <div className="relative z-10 w-[50%] mr-auto ml-16 bg-white p-12 border-y-8 border-r-8 border-white shadow-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
        <div className="absolute top-0 left-0 w-2 h-full bg-fremed-dark"></div>
        {data.subtitle && (
            <div className="flex items-center gap-3 mb-6 text-fremed-light font-bold uppercase tracking-wider text-sm">
                <Target size={18} />
                {translate(data.subtitle, lang)}
            </div>
        )}
        <div className="space-y-6">
            {data.content?.map((text, idx) => (
               <p key={idx} className="text-gray-700 text-xl md:text-2xl leading-relaxed font-light first:font-normal first:text-gray-900">
                  {translate(text, lang)}
               </p>
            ))}
        </div>
     </div>
  </div>
);

export const TimelineSlide: React.FC<{ data: SlideData; lang: Language }> = ({ data, lang }) => (
  <div className="h-full w-full relative bg-white flex flex-col justify-center items-center overflow-hidden">
     <div className="absolute top-[50%] left-0 w-full h-32 -translate-y-1/2 bg-gradient-to-r from-gray-50 via-green-50 to-gray-50 opacity-50 z-0"></div>
     <div className="absolute top-[50%] left-0 right-0 h-0.5 bg-gray-300 z-0 origin-left opacity-0 animate-scale-x" style={{ animationDelay: '300ms' }}></div>
     
     <div className="flex justify-center items-center w-full relative z-10 px-12 gap-8 max-w-[95%]">
        {data.timelineData?.map((item: TimelineItem, idx: number) => (
           <div key={idx} className="flex-1 flex flex-col items-center group max-w-[350px]">
              <div className="mb-8 relative opacity-0 animate-fade-in-up" style={{ animationDelay: `${500 + idx * 200}ms` }}>
                 <span className="font-montserrat font-black text-6xl text-gray-300 group-hover:text-fremed-dark transition-colors block text-center leading-none">
                   {item.year}
                 </span>
              </div>
              <div className="relative flex items-center justify-center w-6 h-6 bg-white rounded-full border-4 border-fremed-dark z-10 mb-8 opacity-0 animate-zoom-in shadow-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-fremed-dark"></div>
              </div>
              <div className="bg-white p-6 border border-gray-200 w-full relative transition-all duration-300 group-hover:border-fremed-dark group-hover:shadow-xl opacity-0 animate-fade-in-up" style={{ animationDelay: `${700 + idx * 200}ms` }}>
                  <p className="font-sans text-lg text-gray-600 leading-relaxed text-center group-hover:text-gray-900">
                    {translate(item.content, lang)}
                  </p>
              </div>
           </div>
        ))}
     </div>
  </div>
);

export const QuoteSlide: React.FC<{ data: SlideData; lang: Language }> = ({ data, lang }) => (
  <div className="w-full h-full relative flex items-center justify-center bg-white text-gray-800 overflow-hidden">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-100 -skew-x-12 translate-x-32 z-0"></div>
      <div className="relative z-10 w-full max-w-[95%] px-12 grid grid-cols-2 gap-16 items-center h-[80%]">
          <div className="opacity-0 animate-slide-next h-full" style={{ animationDelay: '300ms' }}>
             <img src={data.image} className="w-full h-full object-cover border-8 border-white shadow-sm" alt="Quote" />
          </div>
          <div className="flex flex-col justify-center h-full">
            <QuoteIcon className="text-fremed-light w-16 h-16 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '500ms' }} />
            <h2 className="font-montserrat font-bold text-xl text-fremed-dark uppercase tracking-[0.3em] mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>{translate(data.title, lang)}</h2>
            <div className="space-y-6">
                {data.content?.map((text, idx) => (
                <p key={idx} className={`font-montserrat font-medium text-3xl leading-snug opacity-0 animate-fade-in-up ${idx === 0 ? 'text-gray-900' : 'text-gray-500 font-light text-2xl'}`} style={{ animationDelay: `${600 + idx * 300}ms` }}>
                    {translate(text, lang)}
                </p>
                ))}
            </div>
          </div>
      </div>
  </div>
);

export const GridSlide: React.FC<{ data: SlideData; lang: Language }> = ({ data, lang }) => (
  <div className="w-full h-full p-8 md:p-12 bg-white flex flex-col items-center justify-center relative">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full h-full max-h-[90%] z-10 border-2 border-gray-100 bg-white shadow-lg overflow-hidden">
      {data.gridData?.map((item: GridItem, idx: number) => (
        <div key={idx} className="bg-white p-6 border-r border-b border-gray-100 hover:bg-gray-50 transition-colors group flex flex-col justify-between opacity-0 animate-fade-in-up" style={{ animationDelay: `${200 + idx * 100}ms` }}>
           <div className="mb-4 text-gray-300 group-hover:text-fremed-dark transition-colors">
              {idx % 4 === 0 ? <Zap size={40} /> : idx % 4 === 1 ? <Target size={40} /> : idx % 4 === 2 ? <Users size={40} /> : <Award size={40} />}
           </div>
           <div className="flex-1">
               {item.title && (
                 <h4 className="font-montserrat font-bold text-lg text-gray-900 mb-2 uppercase tracking-wider">
                   {translate(item.title, lang)}
                 </h4>
               )}
               <p className="font-sans text-gray-500 text-lg leading-relaxed group-hover:text-gray-900">
                 {translate(item.content, lang)}
               </p>
           </div>
           <div className="w-0 group-hover:w-full h-1 bg-fremed-light transition-all duration-500 mt-4"></div>
        </div>
      ))}
    </div>
  </div>
);

export const StatsSlide: React.FC<{ data: SlideData; lang: Language }> = ({ data, lang }) => (
   <div className="w-full h-full flex bg-gray-50">
      <div className="w-[55%] h-full bg-white text-gray-900 p-12 lg:p-16 flex flex-col justify-center border-r border-gray-200 relative">
         <div className="relative z-10">
            <h2 className="font-montserrat font-bold text-5xl text-fremed-dark mb-4 opacity-0 animate-fade-in-right" style={{ animationDelay: '200ms' }}>{translate(data.title, lang)}</h2>
            <p className="text-gray-500 font-sans text-2xl mb-12 uppercase tracking-wider opacity-0 animate-fade-in-right" style={{ animationDelay: '400ms' }}>{translate(data.subtitle, lang)}</p>
            <div className="space-y-12">
                {data.statsData?.map((stat, idx) => (
                <div key={idx} className="opacity-0 animate-fade-in-up group" style={{ animationDelay: `${600 + idx * 200}ms` }}>
                    <div className="font-montserrat font-black text-8xl text-gray-200 group-hover:text-fremed-dark transition-colors duration-500 leading-none">
                        {stat.value}
                    </div>
                    <div className="font-sans text-2xl font-bold text-gray-600 mt-2 border-t-2 border-gray-100 pt-4 inline-block w-full">{translate(stat.label, lang)}</div>
                </div>
                ))}
            </div>
         </div>
      </div>
      <div className="w-[45%] h-full relative opacity-0 animate-zoom-in" style={{ animationDelay: '300ms' }}>
         <img src={data.image} className="w-full h-full object-cover grayscale opacity-80" alt="Stats" />
         <div className="absolute inset-0 bg-fremed-dark/30 mix-blend-overlay"></div>
      </div>
   </div>
);

export const RoadmapSlide: React.FC<{ data: SlideData; lang: Language }> = ({ data, lang }) => (
    <div className="w-full h-full flex items-center justify-center p-0 bg-white relative overflow-hidden">
         <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 border-t border-dashed border-gray-300"></div>
         <div className="w-full max-w-[85%] grid grid-cols-2 gap-16 relative z-10">
            {data.timelineData?.map((item, idx) => (
                <div key={idx} className={`relative flex flex-col ${idx % 2 !== 0 ? 'mt-24' : '-mt-24'}`}>
                    <div className="bg-white p-10 border-2 border-gray-100 hover:border-fremed-dark transition-colors duration-500 opacity-0 animate-fade-in-up shadow-sm" style={{ animationDelay: `${300 + idx * 300}ms` }}>
                        <p className="text-fremed-dark font-bold uppercase text-xl mb-4 border-b-2 border-gray-100 pb-2 inline-block">{item.year}</p>
                        <p className="text-gray-700 text-2xl leading-relaxed">{translate(item.content, lang)}</p>
                    </div>
                    <div className={`absolute left-1/2 w-0.5 h-24 bg-gray-300 -translate-x-1/2 ${idx % 2 !== 0 ? '-top-24' : '-bottom-24'}`}></div>
                </div>
            ))}
         </div>
    </div>
);

export const LeadershipSlide: React.FC<{ data: SlideData; lang: Language }> = ({ data, lang }) => (
  <div className="w-full h-full p-8 flex items-center justify-center bg-white">
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-0 w-full h-full max-h-[90%] border-t border-b border-gray-100">
       {data.leadershipData?.map((person: LeadershipItem, idx: number) => (
         <div key={idx} className="flex flex-col items-center pt-8 pb-8 px-6 relative group border-r border-gray-100 last:border-r-0 hover:bg-gray-50 transition-colors opacity-0 animate-fade-in-up justify-between h-full" style={{ animationDelay: `${200 + idx * 150}ms` }}>
            <div className="w-full aspect-[3/4] mb-6 overflow-hidden bg-gray-200 relative opacity-0 animate-zoom-in" style={{ animationDelay: `${400 + idx * 150}ms` }}>
                <img src={`https://picsum.photos/seed/person${idx}/600/800`} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="flex flex-col items-center w-full">
                <h4 className="font-montserrat font-bold text-xl text-center text-gray-900 mb-2">{person.name}</h4>
                <p className="font-sans text-fremed-light text-xs font-bold uppercase text-center mb-4 tracking-widest border-y border-gray-200 py-2 w-full">{translate(person.role, lang)}</p>
                <p className="font-sans text-gray-500 text-base text-center leading-relaxed">{translate(person.description, lang)}</p>
            </div>
         </div>
       ))}
    </div>
  </div>
);

export const FlowchartSlide: React.FC<{ data: SlideData; lang: Language }> = ({ data, lang }) => (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-white relative">
       <div className="grid grid-cols-4 gap-6 lg:gap-10 w-full max-w-[95%] z-10">
          {data.flowchartSteps?.map((step, idx) => (
             <div key={idx} className="flex flex-col relative group">
                 <div className="w-full aspect-square border-2 border-gray-100 flex flex-col items-center justify-center p-4 bg-white hover:border-fremed-dark transition-all duration-300 relative z-10 mb-6 opacity-0 animate-zoom-in shadow-sm" style={{ animationDelay: `${500 + idx * 200}ms` }}>
                    <span className="text-6xl font-montserrat font-black text-gray-100 absolute top-2 right-2 group-hover:text-fremed-light/10 transition-colors">0{idx + 1}</span>
                    <div className="text-gray-400 mb-4 group-hover:text-fremed-dark transition-colors">
                        {idx === 0 ? <Factory size={48} /> : idx === 1 ? <Users size={48} /> : idx === 2 ? <Target size={48} /> : <Award size={48} />}
                    </div>
                    <h4 className="font-montserrat font-bold text-lg text-gray-800 text-center uppercase tracking-wide">{translate(step, lang)}</h4>
                 </div>
             </div>
          ))}
       </div>
       <div className="mt-8 w-full max-w-[95%] h-56 pt-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
          <img src={data.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm" alt="Production" />
       </div>
    </div>
);
