import React from 'react';
import { X, RotateCcw } from 'lucide-react';
import AdBanner from './AdBanner';
import ShareButton from './ShareButton';

interface ResultPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSpinAgain: () => void;
}

const ResultPopup: React.FC<ResultPopupProps> = ({ isOpen, onClose, onSpinAgain }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Modal - Increased max-width to lg (32rem/512px) to fit 468px ad */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 animate-bounce-slow transform transition-all border-4 border-christmas-red overflow-hidden">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="text-center flex flex-col items-center">
          <div className="mb-4 text-6xl animate-bounce">
            🎅
          </div>
          
          <h2 className="text-3xl font-bold text-christmas-red festive-font mb-2">
            Better Luck Next Time!
          </h2>
          
          <p className="text-gray-600 mb-6 px-4">
            Don’t worry! Christmas magic is all about joy & fun 🎄. Give it another shot!
          </p>

          <div className="w-full mb-6 flex justify-center overflow-x-auto">
            <AdBanner format="banner-468x60" label={true} />
          </div>

          <div className="flex flex-col w-full gap-3">
            <button 
              onClick={onSpinAgain}
              className="flex items-center justify-center gap-2 bg-christmas-green text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-800 transition-colors w-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <RotateCcw className="w-5 h-5" />
              Spin Again
            </button>

            <ShareButton 
              variant="secondary" 
              className="w-full" 
              text="I just played the Christmas Spin & Win! 🎅🎄 Try your luck here:" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPopup;