
export type SlideType = 
  | 'cover' 
  | 'standard' 
  | 'overlap' 
  | 'timeline' 
  | 'grid' 
  | 'quote' 
  | 'leadership' 
  | 'flowchart' 
  | 'thankyou' 
  | 'stats'
  | 'roadmap';

export type Language = 'vi' | 'en';

export interface LocalizedString {
  vi: string;
  en: string;
}

export interface TimelineItem {
  year: string;
  content: string | LocalizedString;
}

export interface GridItem {
  title?: string | LocalizedString;
  content: string | LocalizedString;
  icon?: string;
}

export interface LeadershipItem {
  name: string;
  role: string | LocalizedString;
  description: string | LocalizedString;
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: LocalizedString;
  subtitle?: LocalizedString;
  content?: (string | LocalizedString)[];
  highlight?: string | LocalizedString;
  image?: string;
  timelineData?: TimelineItem[];
  gridData?: GridItem[];
  leadershipData?: LeadershipItem[];
  statsData?: { label: LocalizedString; value: string }[];
  flowchartSteps?: (string | LocalizedString)[];
}
