import React from 'react';
import { AdProps } from '../types';

const AdBanner: React.FC<AdProps> = ({ format, className = '', label = true }) => {
  let sizeClass = '';
  let content = 'Advertisement';

  switch (format) {
    case 'banner-728x90':
      sizeClass = 'w-[728px] h-[90px]';
      break;
    case 'banner-320x50':
      sizeClass = 'w-[320px] h-[50px]';
      break;
    case 'native':
      sizeClass = 'w-full min-h-[150px]';
      content = 'Sponsored Content';
      break;
    case 'social-bar':
      sizeClass = 'fixed bottom-4 right-4 w-[60px] h-[60px] rounded-full shadow-lg z-50';
      content = '🎁';
      break;
  }

  if (format === 'social-bar') {
    return (
      <div className={`bg-christmas-gold text-christmas-red flex items-center justify-center text-2xl font-bold border-4 border-white animate-bounce-slow cursor-pointer hover:scale-110 transition-transform ${sizeClass} ${className}`}>
        {content}
        <div className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1 rounded-full">Ad</div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center bg-gray-100 border border-gray-300 mx-auto overflow-hidden relative ${sizeClass} ${className}`}>
        {label && <span className="absolute top-0 right-0 bg-gray-200 text-gray-500 text-[9px] px-1">Ad</span>}
        <div className="text-gray-400 font-semibold text-center text-sm p-2">
            {format === 'banner-728x90' && "728x90 Banner Ad"}
            {format === 'banner-320x50' && "320x50 Banner Ad"}
            {format === 'native' && (
                <div className="flex items-center gap-4">
                     <div className="w-16 h-16 bg-gray-300 rounded"></div>
                     <div className="flex flex-col gap-2 items-start">
                         <div className="w-32 h-4 bg-gray-300 rounded"></div>
                         <div className="w-24 h-3 bg-gray-300 rounded"></div>
                     </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default AdBanner;