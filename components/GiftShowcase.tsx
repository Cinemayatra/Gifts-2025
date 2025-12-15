import React from 'react';
import { WHEEL_ITEMS } from '../constants';
import AdBanner from './AdBanner';

const GiftShowcase: React.FC = () => {
  // Filter out the "Try Again" item for showcase
  const displayItems = WHEEL_ITEMS.filter(item => !item.isLoss);

  return (
    <section id="gifts" className="py-16 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-christmas-red font-bold festive-font mb-4">
          Amazing Christmas Gifts 🎁
        </h2>
        <p className="text-center text-gray-500 mb-12 italic">
          Gifts shown are for entertainment & promotional purposes only.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className="bg-red-50 rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow border border-red-100 group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  {item.icon && <item.icon className="w-8 h-8 text-christmas-red" />}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              
              {/* Insert Native Ad after item 4 */}
              {index === 3 && (
                <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
                   <AdBanner format="native" className="h-full rounded-xl" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftShowcase;