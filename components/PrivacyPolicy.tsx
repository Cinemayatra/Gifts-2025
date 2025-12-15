import React from 'react';
import { ArrowLeft } from 'lucide-react';
import AdBanner from './AdBanner';

interface PrivacyPolicyProps {
  onBack?: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
      
      <h1 className="text-3xl font-bold text-christmas-red festive-font mb-6">Privacy Policy</h1>
      
      <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
        <p><strong>Last Updated: 2025</strong></p>
        
        <p>Welcome to Gifts 2025 ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how your information is handled when you visit our website.</p>

        <h3 className="text-xl font-bold text-gray-800 mt-6">1. Information Collection</h3>
        <p>We do not require you to create an account or provide personal information (such as your name, email address, or phone number) to use the "Spin & Win" feature. The experience is anonymous and for entertainment purposes only.</p>

        <h3 className="text-xl font-bold text-gray-800 mt-6">2. Cookies and Third-Party Advertising</h3>
        <p>We use third-party advertising partners (such as Adsterra) to display ads when you visit our website. These companies may use cookies or similar tracking technologies to serve ads based on your prior visits to this website or other websites.</p>
        <ul className="list-disc ml-6">
          <li>Cookies are small text files stored on your device.</li>
          <li>You can choose to disable cookies through your browser settings, though this may affect some site functionality.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-6">3. Local Storage</h3>
        <p>We may use your browser's local storage to temporarily save the state of the wheel or game settings to improve your experience during a session. This data is stored locally on your device and is not transmitted to our servers.</p>

        <h3 className="text-xl font-bold text-gray-800 mt-6">4. Children's Privacy</h3>
        <p>Our website is designed for a general audience. We do not knowingly collect information from children under the age of 13.</p>

        <h3 className="text-xl font-bold text-gray-800 mt-6">5. Changes to This Policy</h3>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>

        <div className="mt-8">
            <AdBanner format="banner-728x90" className="hidden md:flex" />
            <AdBanner format="banner-320x50" className="md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;