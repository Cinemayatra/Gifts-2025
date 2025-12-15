import React from 'react';
import { Heart, Smile, Star, Users } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    { icon: Smile, title: 'Spread Joy', desc: 'Happiness is contagious!' },
    { icon: Users, title: 'Strengthen Bonds', desc: 'Connect with loved ones.' },
    { icon: Star, title: 'Memorable Moments', desc: 'Create lasting memories.' },
    { icon: Heart, title: 'Share Kindness', desc: 'The true spirit of Christmas.' },
  ];

  return (
    <section className="py-16 bg-christmas-green text-white relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-bold festive-font mb-12">
          Why Christmas Gifts Matter 🎄
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <b.icon className="w-8 h-8 text-christmas-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">{b.title}</h3>
              <p className="text-white/80">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;