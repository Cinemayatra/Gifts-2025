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
  format: 'banner-728x90' | 'banner-320x50' | 'native' | 'social-bar';
  className?: string;
  label?: boolean;
}

export type Page = 'home' | 'privacy' | 'terms' | 'disclaimer';
