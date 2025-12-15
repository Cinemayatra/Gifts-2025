import { 
  Smartphone, 
  Laptop, 
  Tablet, 
  Tv, 
  Headphones, 
  Speaker, 
  Watch, 
  BatteryCharging, 
  Camera, 
  Candy, 
  Smile 
} from 'lucide-react';
import { GiftItem } from './types';

export const THEME = {
  red: '#C62828',
  green: '#1B5E20',
  gold: '#FFD700',
  white: '#FFFFFF',
};

export const WHEEL_ITEMS: GiftItem[] = [
  { id: '1', name: 'Smartphone', description: 'Latest high-speed device', icon: Smartphone, color: THEME.red, textColor: THEME.white },
  { id: '2', name: 'Laptop', description: 'Perfect for work & gaming', icon: Laptop, color: THEME.white, textColor: THEME.red },
  { id: '3', name: 'Tablet', description: 'Portable entertainment', icon: Tablet, color: THEME.green, textColor: THEME.white },
  { id: '4', name: 'Smart TV', description: 'Cinema at home', icon: Tv, color: THEME.gold, textColor: THEME.red },
  { id: '5', name: 'Earbuds', description: 'Wireless freedom', icon: Headphones, color: THEME.red, textColor: THEME.white },
  { id: '6', name: 'Speaker', description: 'Booming bass', icon: Speaker, color: THEME.white, textColor: THEME.red },
  { id: '7', name: 'Smartwatch', description: 'Track your health', icon: Watch, color: THEME.green, textColor: THEME.white },
  { id: '8', name: 'Power Bank', description: 'Charge on the go', icon: BatteryCharging, color: THEME.gold, textColor: THEME.red },
  { id: '9', name: 'Camera', description: 'Capture moments', icon: Camera, color: THEME.red, textColor: THEME.white },
  { id: '10', name: 'Chocolate', description: 'Sweet Christmas treat', icon: Candy, color: THEME.white, textColor: THEME.red },
  { id: '11', name: 'Try Again', description: 'Better Luck Next Time', icon: Smile, color: THEME.green, textColor: THEME.white, isLoss: true },
];

export const TOTAL_SLICES = WHEEL_ITEMS.length;
export const SPIN_DURATION_SECONDS = 4;
