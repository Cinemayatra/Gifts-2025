import React from 'react';
import { X, RotateCcw, Smile } from 'lucide-react';
import AdBanner from './AdBanner';

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
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-bounce-slow transform transition-all border-4 border-christmas-red">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
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

          <div className="w-full mb-6">
            <AdBanner format="native" label={true} />
          </div>

          <button 
            onClick={onSpinAgain}
            className="flex items-center justify-center gap-2 bg-christmas-green text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-800 transition-colors w-full shadow-lg"
          >
            <RotateCcw className="w-5 h-5" />
            Spin Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPopup;