import React from 'react';
import AdBanner from './AdBanner';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 bg-red-50 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-christmas-red font-bold festive-font mb-12">
          How It Works
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center w-64 h-48 flex flex-col justify-center relative">
             <div className="absolute -top-4 -left-4 w-10 h-10 bg-christmas-red text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
             <h3 className="font-bold text-xl mb-2">Visit Gifts 2025</h3>
             <p className="text-gray-600">Open the website on any device.</p>
          </div>
           <div className="hidden md:block text-christmas-red text-4xl">→</div>
           <div className="bg-white p-6 rounded-lg shadow-md text-center w-64 h-48 flex flex-col justify-center relative">
             <div className="absolute -top-4 -left-4 w-10 h-10 bg-christmas-red text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
             <h3 className="font-bold text-xl mb-2">Tap Spin Wheel</h3>
             <p className="text-gray-600">Give the wheel a lucky spin!</p>
          </div>
           <div className="hidden md:block text-christmas-red text-4xl">→</div>
           <div className="bg-white p-6 rounded-lg shadow-md text-center w-64 h-48 flex flex-col justify-center relative">
             <div className="absolute -top-4 -left-4 w-10 h-10 bg-christmas-red text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
             <h3 className="font-bold text-xl mb-2">Enjoy The Fun</h3>
             <p className="text-gray-600">See your surprise result instantly.</p>
          </div>
        </div>

        <div className="flex justify-center hidden md:flex">
             <AdBanner format="banner-728x90" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;