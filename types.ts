import { LucideIcon } from 'lucide-react';

export interface GiftItem {
  id: string;
  name: string;
  description: string;
  icon?: LucideIcon; // Icon component
  color: string;
  textColor: string;
  isLoss?: boolean;
}

export interface AdProps {
  format: 'banner-728x90' | 'banner-320x50' | 'banner-300x250' | 'banner-468x60' | 'native' | 'social-bar';
  className?: string;
  label?: boolean;
}

export type Page = 'home' | 'privacy' | 'terms' | 'disclaimer';