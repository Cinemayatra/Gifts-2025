import React, { useEffect, useRef } from 'react';
import { AdProps } from '../types';

const AD_CONFIG = {
  'banner-728x90': {
    key: '0bca6301b0658bd93f4fce43e9d0054b',
    width: 728,
    height: 90
  },
  'banner-320x50': {
    key: '1d62583cda6981cce6d59c55ffbf59fd',
    width: 320,
    height: 50
  },
  'banner-300x250': {
    key: 'f5d75b9fcbf5341fda06cef86a5dfa50',
    width: 300,
    height: 250
  },
  'banner-468x60': {
    key: '1727b8154ce4a05b4eb488724785da9b',
    width: 468,
    height: 60
  }
};

const AdBanner: React.FC<AdProps> = ({ format, className = '', label = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle specific banner formats via iframe injection
    if (format === 'native' || format === 'social-bar') return;

    const config = AD_CONFIG[format];
    if (!config || !containerRef.current) return;

    const { key, width, height } = config;

    // Clear previous content
    containerRef.current.innerHTML = '';

    // Create a friendly iframe
    const iframe = document.createElement('iframe');
    iframe.width = `${width}`;
    iframe.height = `${height}`;
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.scrolling = 'no';
    
    containerRef.current.appendChild(iframe);

    const doc = iframe.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <base target="_blank" />
            <style>
              body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; overflow: hidden; }
            </style>
          </head>
          <body>
            <script type="text/javascript">
              atOptions = {
                'key' : '${key}',
                'format' : 'iframe',
                'height' : ${height},
                'width' : ${width},
                'params' : {}
              };
            </script>
            <script type="text/javascript" src="https://www.highperformanceformat.com/${key}/invoke.js"></script>
          </body>
        </html>
      `);
      doc.close();
    }
  }, [format]);

  // Social Bar Mock (or Placeholder if no script provided)
  if (format === 'social-bar') {
    return (
      <div className={`bg-christmas-gold text-christmas-red flex items-center justify-center text-2xl font-bold border-4 border-white animate-bounce-slow cursor-pointer hover:scale-110 transition-transform fixed bottom-4 right-4 w-[60px] h-[60px] rounded-full shadow-lg z-50 ${className}`}>
        🎁
        <div className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1 rounded-full">Ad</div>
      </div>
    );
  }

  // Native Fallback (should be replaced in parent components, but keeping safe render)
  if (format === 'native') {
      return null;
  }

  const config = AD_CONFIG[format as keyof typeof AD_CONFIG];
  if (!config) return null;

  return (
    <div 
        className={`flex flex-col items-center justify-center mx-auto relative bg-transparent max-w-full ${className}`} 
        style={{ width: config.width, height: config.height }}
    >
        {label && <span className="absolute -top-3 right-0 bg-gray-200 text-gray-500 text-[9px] px-1 z-10 rounded">Ad</span>}
        <div ref={containerRef} className="flex justify-center items-center" />
    </div>
  );
};

export default AdBanner;