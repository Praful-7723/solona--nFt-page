import React, { useRef, useState } from 'react';
import { Heart } from 'lucide-react';
import { NFTItem } from '../types';
import { GeminiImage } from './GeminiImage';

interface NFTCardProps {
  item: NFTItem;
}

export const NFTCard: React.FC<NFTCardProps> = ({ item }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10; // Max rotation deg
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div 
      className="relative perspective-1000 w-full h-[480px] group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="w-full h-full rounded-2xl bg-card-gradient border border-white/10 p-4 transition-transform duration-200 ease-out shadow-xl shadow-black/50 relative overflow-hidden backdrop-blur-md"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Holographic Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20 transform translate-z-10" />

        {/* Image Container */}
        <div className="relative h-3/5 w-full rounded-xl overflow-hidden mb-4 transform translate-z-20 bg-gray-900/50">
            {/* Overlay for tinting */}
            <div className="absolute inset-0 bg-purple-900/30 mix-blend-overlay z-10 pointer-events-none" />
            <GeminiImage 
                prompt={item.imagePrompt}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 holo-img"
            />
            <button className="absolute top-3 right-3 z-20 bg-black/40 backdrop-blur-md p-2 rounded-full text-white/70 hover:text-pink-500 hover:bg-pink-500/20 transition-all">
                <Heart size={18} />
            </button>
            
            {/* Countdown Badge */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full border border-purple-500/30">
                <span className="text-xs font-mono text-purple-300">{item.timeLeft}</span>
            </div>
        </div>

        {/* Content */}
        <div className="relative z-10 transform translate-z-30">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-purple-400 transition-colors">{item.title}</h3>
                    <div className="flex items-center mt-1 gap-2">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                        <span className="text-xs text-gray-400 font-body">Owned by <span className="text-white">{item.creator}</span></span>
                    </div>
                </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/5 flex justify-between items-center group-hover:border-purple-500/30 transition-colors">
                <div>
                    <p className="text-xs text-gray-400 uppercase">Highest Bid</p>
                    <p className="text-sm font-bold text-purple-300">{item.price} {item.currency}</p>
                </div>
                <button className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold py-2 px-4 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all">
                    Auction
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};
