import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface DisclaimerProps {
  onBack?: () => void;
}

const Disclaimer: React.FC<DisclaimerProps> = ({ onBack }) => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl bg-white/90 rounded-xl shadow-lg my-8 relative z-10">
      {onBack && (
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-christmas-red hover:text-red-800 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </button>
      )}

      <h1 className="text-3xl font-bold text-christmas-red festive-font mb-6">Disclaimer</h1>
      
      <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
        <div className="border-4 border-christmas-gold p-6 rounded-xl bg-yellow-50">
            <h3 className="text-xl font-bold text-christmas-red mb-2">No Real Prizes</h3>
            <p>
                Gifts 2025 is an online game created solely for entertainment. The items depicted on the wheel (smartphones, laptops, etc.) are illustrative. 
                <strong>Users do not win actual physical items.</strong> The result "Better Luck Next Time" is part of the game logic.
            </p>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mt-6">Affiliate & Advertising Disclosure</h3>
        <p>
            This website contains advertisements provided by third-party ad networks (such as Adsterra). We are not responsible for the content of these external advertisements or the products/services they promote. Clicking on ads is done at your own discretion.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6">No Warranty</h3>
        <p>
            While we strive to keep the website running smoothly, we do not guarantee that the site will be error-free or uninterrupted. We are not responsible for any technical issues you may encounter.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;