import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsProps {
  onBack?: () => void;
}

const Terms: React.FC<TermsProps> = ({ onBack }) => {
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

      <h1 className="text-3xl font-bold text-christmas-red festive-font mb-6">Terms & Conditions</h1>
      
      <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
        <p><strong>Last Updated: 2025</strong></p>
        <p>Please read these Terms & Conditions carefully before using Gifts 2025.</p>

        <h3 className="text-xl font-bold text-gray-800 mt-6">1. Entertainment Purposes Only</h3>
        <p className="bg-red-50 p-4 border-l-4 border-christmas-red rounded">
            <strong>Important:</strong> This website is a simulation designed purely for fun and entertainment. 
            NO REAL PRIZES, GIFTS, OR MONEY ARE AWARDED. 
            Any "wins," "prizes," or items displayed on the wheel or popup results are virtual and have no real-world value.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6">2. Acceptance of Terms</h3>
        <p>By accessing this website, you agree to be bound by these Terms. If you do not agree, please do not use the site.</p>

        <h3 className="text-xl font-bold text-gray-800 mt-6">3. Usage Restrictions</h3>
        <p>You agree not to use this website for any unlawful purpose or in any way that could harm the website or its availability.</p>

        <h3 className="text-xl font-bold text-gray-800 mt-6">4. Intellectual Property</h3>
        <p>All content, designs, and animations on Gifts 2025 are owned by us or licensed to us. You may not copy or reproduce any part of this site without permission.</p>

        <h3 className="text-xl font-bold text-gray-800 mt-6">5. Limitation of Liability</h3>
        <p>We are not liable for any damages or losses related to your use of this website. The website is provided "as is" without warranties of any kind.</p>
      </div>
    </div>
  );
};

export default Terms;