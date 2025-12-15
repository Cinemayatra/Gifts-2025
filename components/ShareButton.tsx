import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

interface ShareButtonProps {
  title?: string;
  text?: string;
  url?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'icon' | 'outline';
}

const ShareButton: React.FC<ShareButtonProps> = ({
  title = "Gifts 2025 - Christmas Spin & Win 🎅",
  text = "I just tried my luck on Gifts 2025! 🎁🎄 Spin the wheel to win amazing tech gifts!",
  url = typeof window !== 'undefined' ? window.location.origin : '',
  className = '',
  variant = 'primary'
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering parent clicks if any

    const shareData = { title, text, url };

    // Try Web Share API first (Mobile & Modern Browsers)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or error, ignore
        console.log('Share cancelled or failed:', err);
      }
    } else {
      // Fallback to Clipboard
      try {
        await navigator.clipboard.writeText(`${text}\n${url}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Copy failed:', err);
      }
    }
  };

  if (variant === 'icon') {
     return (
       <button 
         onClick={handleShare} 
         className={`p-2 rounded-full transition-colors flex items-center justify-center ${className}`} 
         aria-label="Share"
         title="Share with friends"
       >
         {copied ? <Check className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
       </button>
     );
  }

  const baseClasses = "flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-full transition-all shadow-md active:scale-95";
  
  let variantClasses = "";
  switch (variant) {
    case 'primary':
      variantClasses = "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg";
      break;
    case 'secondary':
      variantClasses = "bg-white text-gray-800 border-2 border-gray-200 hover:bg-gray-50";
      break;
    case 'outline':
      variantClasses = "bg-transparent border-2 border-white text-white hover:bg-white/10";
      break;
  }

  return (
    <button
      onClick={handleShare}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {copied ? <Check className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
      {copied ? 'Copied!' : 'Share Fun'}
    </button>
  );
};

export default ShareButton;