import React from 'react';
import AdBanner from './AdBanner';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white py-8 relative z-10 border-t-4 border-christmas-gold">
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        <div className="mb-8">
            <AdBanner format="banner-320x50" />
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-400">
          <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
          <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Terms & Conditions</button>
          <button onClick={() => onNavigate('disclaimer')} className="hover:text-white transition-colors">Disclaimer</button>
        </div>
        
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-2">© 2025 Gifts 2025 – Christmas Fun App</p>
          <p className="text-xs">This website is for entertainment purposes only. No actual prizes are awarded.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;