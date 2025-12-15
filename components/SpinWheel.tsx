import React, { useState, useRef, useEffect } from 'react';
import { WHEEL_ITEMS, SPIN_DURATION_SECONDS } from '../constants';
import { ChevronDown } from 'lucide-react';

interface SpinWheelProps {
  onSpinEnd: () => void;
  isSpinning: boolean;
  setIsSpinning: (spinning: boolean) => void;
}

const SpinWheel: React.FC<SpinWheelProps> = ({ onSpinEnd, isSpinning, setIsSpinning }) => {
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);

  const startSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    // Logic: Always land on "Better Luck Next Time" (Item Index 10)
    // To land on index 10, that slice needs to be at the top (270deg or 0deg depending on setup).
    // Our SVG starts at 0deg (right). Slices are drawn clockwise.
    // 0deg is center of first slice.
    // We want the POINTER (at top, -90deg or 270deg) to point to the desired slice.
    
    // Each slice is 360 / 11 ~= 32.72 degrees.
    // Slice 0 center: 16.36 deg (If we start first slice at 0)
    // Actually, usually easier to build SVG segments.
    
    // Let's rely on random visual spin but controlled result logic in parent.
    // But to be consistent with the "Better Luck" message, we should probably land on it.
    // Index 10 is the last item.
    
    // Let's simplify: Just spin randomly 5-10 times + random degrees.
    // The "Better Luck Next Time" popup will appear regardless.
    // This creates the "Rigged" feel but is safer as per prompt "No matter where the wheel stops".
    
    const randomRotation = 1800 + Math.random() * 1000; // At least 5 spins
    setRotation((prev) => prev + randomRotation);

    // Play sound effect
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3'); // Generic spin sound placeholder
    audio.volume = 0.5;
    audio.play().catch(() => {}); // catch helper for autoplay policies
    
    // Wait for animation to finish
    setTimeout(() => {
      onSpinEnd();
      setIsSpinning(false);
    }, SPIN_DURATION_SECONDS * 1000);
  };

  // Pre-calculate SVG paths
  const radius = 150;
  const center = 150;
  const totalSlices = WHEEL_ITEMS.length;
  const sliceAngle = 360 / totalSlices;

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M", x, y,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "L", x, y
    ].join(" ");
  };

  return (
    <div className="relative flex flex-col items-center justify-center my-8">
       {/* Pointer */}
       <div className="absolute top-0 z-20 -mt-6">
        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-christmas-red filter drop-shadow-lg"></div>
      </div>

      {/* Wheel Container */}
      <div 
        className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] transition-transform duration-[4000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-full shadow-2xl border-4 border-white overflow-hidden"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <svg viewBox="0 0 300 300" className="w-full h-full">
          {WHEEL_ITEMS.map((item, index) => {
            const startAngle = index * sliceAngle;
            const endAngle = startAngle + sliceAngle;
            const path = describeArc(center, center, radius, startAngle, endAngle);
            const midAngle = startAngle + (sliceAngle / 2);
            const textPos = polarToCartesian(center, center, radius * 0.75, midAngle);
            const iconPos = polarToCartesian(center, center, radius * 0.5, midAngle);

            return (
              <g key={item.id}>
                <path d={path} fill={item.color} stroke="#FFF" strokeWidth="1" />
                <g transform={`translate(${textPos.x}, ${textPos.y}) rotate(${midAngle})`}>
                  <text 
                    x="0" 
                    y="0" 
                    fill={item.textColor} 
                    textAnchor="middle" 
                    dominantBaseline="middle" 
                    fontSize="8" 
                    fontWeight="bold"
                    transform="rotate(90)"
                    className='uppercase'
                  >
                    {item.name}
                  </text>
                </g>
                 <g transform={`translate(${iconPos.x - 6}, ${iconPos.y - 6}) rotate(${midAngle})`}>
                    {/* Render icon if simple enough, otherwise just skip or use text */}
                     <text x="6" y="6" textAnchor="middle" dominantBaseline="middle" transform="rotate(90)" fontSize="12">
                        {item.name === 'Smartphone' ? '📱' : 
                         item.name === 'Laptop' ? '💻' :
                         item.name === 'Tablet' ? '📲' :
                         item.name === 'Try Again' ? '😢' : '🎁'}
                     </text>
                 </g>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Center Decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-4 border-christmas-gold shadow-inner flex items-center justify-center z-10">
          <div className="w-12 h-12 bg-christmas-red rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">2025</span>
          </div>
      </div>

      {/* Spin Button */}
      <button 
        onClick={startSpin}
        disabled={isSpinning}
        className={`mt-10 md:mt-12 px-12 py-4 rounded-full text-2xl font-bold text-white shadow-lg transition-all transform hover:scale-105 active:scale-95 festive-font tracking-wider border-4 border-christmas-gold
          ${isSpinning ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-christmas-red to-red-700 animate-pulse-fast hover:shadow-xl'}
        `}
      >
        {isSpinning ? 'Spinning...' : 'SPIN NOW 🔔'}
      </button>

      <div className="mt-2 text-sm text-christmas-red font-semibold opacity-80">
        Click to Win Exciting Gifts!
      </div>
    </div>
  );
};

export default SpinWheel;