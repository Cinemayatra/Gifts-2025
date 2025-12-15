import React from 'react';
import { Gift } from 'lucide-react';
import AdBanner from './AdBanner';
import ShareButton from './ShareButton';
import { Page } from '../types';

interface HeaderProps {
  onNavigate: (page: Page, sectionId?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="w-full bg-christmas-red text-white shadow-lg relative z-10">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div 
          className="flex items-center gap-2 mb-4 md:mb-0 cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <Gift className="w-8 h-8 text-christmas-gold" />
          <h1 className="text-3xl font-bold festive-font tracking-wider">
            Gifts 2025
          </h1>
        </div>
        
        <nav className="flex items-center gap-4 md:gap-6 text-sm font-semibold uppercase tracking-wide">
          <button onClick={() => onNavigate('home')} className="hover:text-christmas-gold transition-colors">
            Home
          </button>
          <button onClick={() => onNavigate('home', 'gifts')} className="hover:text-christmas-gold transition-colors">
            Gifts
          </button>
          <button onClick={() => onNavigate('home', 'how-it-works')} className="hover:text-christmas-gold transition-colors whitespace-nowrap">
            How it Works
          </button>
          
          <div className="w-px h-6 bg-white/30 hidden md:block"></div>
          
          <ShareButton 
            variant="icon" 
            className="text-white hover:text-christmas-gold hover:bg-white/10" 
          />
        </nav>
      </div>

      {/* Decorative Lights Bottom Border */}
      <div className="h-2 w-full flex overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i} 
            className={`w-4 h-4 rounded-full -mt-2 mx-2 flex-shrink-0 ${i % 2 === 0 ? 'bg-red-500' : 'bg-green-500'} animate-pulse`} 
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>

      <div className="hidden md:flex justify-center py-4 bg-white border-b border-gray-200">
        <AdBanner format="banner-728x90" />
      </div>
    </header>
  );
};

export default Header;