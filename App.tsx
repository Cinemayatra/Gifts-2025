import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SpinWheel from './components/SpinWheel';
import ResultPopup from './components/ResultPopup';
import GiftShowcase from './components/GiftShowcase';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Snowfall from './components/Snowfall';
import AdBanner from './components/AdBanner';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import Disclaimer from './components/Disclaimer';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isSpinning, setIsSpinning] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Initialize page from Hash on mount and listen for changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['privacy', 'terms', 'disclaimer'].includes(hash)) {
        setCurrentPage(hash as Page);
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Helper to handle navigation and updating URL
  const handleNavigate = (page: Page, sectionId?: string) => {
    if (page === 'home') {
      window.location.hash = ''; // Clear hash for home
      if (sectionId) {
        // Allow time for DOM update if switching pages
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.location.hash = page; // Set hash for pages
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSpinEnd = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSpinAgain = () => {
    setIsPopupOpen(false);
    handleNavigate('home');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy onBack={() => handleNavigate('home')} />;
      case 'terms':
        return <Terms onBack={() => handleNavigate('home')} />;
      case 'disclaimer':
        return <Disclaimer onBack={() => handleNavigate('home')} />;
      case 'home':
      default:
        return (
          <>
            {/* Hero / Spin Section */}
            <section className="relative py-8 md:py-12 flex flex-col items-center justify-center overflow-hidden">
               {/* Background Decoration */}
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-christmas-red/10 to-transparent pointer-events-none"></div>

               <div className="text-center mb-4 relative z-10 px-4">
                 <h2 className="text-4xl md:text-5xl font-bold text-christmas-red festive-font mb-2 drop-shadow-md">
                    Spin & Win
                 </h2>
                 <p className="text-xl text-gray-700 font-semibold">
                   Amazing Christmas Gifts 🎅
                 </p>
               </div>

               <SpinWheel 
                  onSpinEnd={handleSpinEnd} 
                  isSpinning={isSpinning}
                  setIsSpinning={setIsSpinning}
                />

                {/* Mobile Hero Ad */}
                <div className="mt-6 md:hidden">
                  <AdBanner format="banner-320x50" />
                </div>
            </section>

            <GiftShowcase />
            <Benefits />
            <HowItWorks />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-red-50/50">
      <Snowfall />
      <Header onNavigate={handleNavigate} />

      <main className="flex-grow z-10 pb-12">
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Result Popup - Only relevant on home page, but kept global for simplicity */}
      <ResultPopup 
        isOpen={isPopupOpen} 
        onClose={handleClosePopup} 
        onSpinAgain={handleSpinAgain}
      />

      {/* Sticky Social Ad Bar */}
      <AdBanner format="social-bar" />
    </div>
  );
};

export default App;