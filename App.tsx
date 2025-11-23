import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NFTCard } from './components/NFTCard';
import { TrendingSection } from './components/TrendingSection';
import { Footer } from './components/Footer';
import { NFT_DATA, CATEGORIES, STATS } from './constants';
import { Category } from './types';
import { GeminiImage } from './components/GeminiImage';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredNFTs = activeCategory === 'All' 
    ? NFT_DATA 
    : NFT_DATA.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-deep text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Explore Section */}
        <section id="nfts" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
           {/* Background Decoration */}
           <div className="absolute top-20 right-0 w-1/2 h-full opacity-10 pointer-events-none z-0">
               <GeminiImage 
                 prompt="Abstract glowing crypto cube cluster floating in dark space, interconnecting data lines, purple neon glow, wide angle, background texture"
                 aspectRatio="16:9"
                 className="w-full h-full object-contain mix-blend-screen" 
                 alt="Background" 
               />
           </div>

          <div className="flex flex-col md:flex-row justify-between items-end mb-12 relative z-10">
            <div>
              <h2 className="font-display text-4xl font-bold mb-4">Explore NFTs</h2>
              <p className="text-gray-400 max-w-lg">
                Discover the most outstanding NFTs in all topics of life. Creative artists from around the world.
              </p>
            </div>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 mt-6 md:mt-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name as Category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeCategory === cat.name 
                      ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat.icon}
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {filteredNFTs.map((item) => (
              <NFTCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-16 text-center relative z-10">
            <button className="border border-purple-500/30 text-purple-300 px-8 py-3 rounded-full font-bold hover:bg-purple-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg shadow-purple-900/20">
              Load More
            </button>
          </div>
        </section>

        <TrendingSection />

        {/* Metrics Section */}
        <section className="py-20 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-deep via-purple-900/10 to-deep" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                         <h2 className="font-display text-4xl font-bold mb-6">Some reasons to <span className="text-purple-500">Choose Us</span></h2>
                         <div className="grid grid-cols-2 gap-8">
                             {STATS.map((stat, index) => (
                                 <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:border-purple-500/40 transition-colors">
                                     <h3 className="text-3xl font-display font-bold text-white mb-1">{stat.value}</h3>
                                     <p className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
                                 </div>
                             ))}
                         </div>
                    </div>
                    <div className="relative">
                         <div className="absolute inset-0 bg-purple-500/20 blur-[80px] rounded-full" />
                         <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                             <GeminiImage 
                                prompt="Virtual reality headset floating artifact, glass wires, glowing data streams, synthwave colors, 3d icon"
                                alt="Features" 
                                className="w-full h-full object-cover holo-img" 
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                 <h3 className="font-display text-2xl font-bold">Secure & Fast</h3>
                                 <p className="text-gray-300 text-sm">Powered by next-gen blockchain technology.</p>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Latest Works / Gallery */}
        <section className="py-24 bg-black/20">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                      <h2 className="font-display text-4xl font-bold mb-2">Our Latest Works</h2>
                      <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[500px]">
                     <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl bg-gray-900">
                         <GeminiImage 
                            prompt="Cyberpunk city street at night, rain, neon signs, low angle, detailed, futuristic architecture"
                            aspectRatio="1:1"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 holo-img" 
                            alt="Work 1" 
                         />
                         <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                             <span className="text-xl font-bold font-display">Cyber Reality</span>
                         </div>
                     </div>
                     <div className="relative group overflow-hidden rounded-2xl bg-gray-900">
                        <GeminiImage 
                            prompt="Futuristic vehicle, flying car, neon trails, dark background, speed, motion blur"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 holo-img" 
                            alt="Work 2" 
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                             <span className="text-sm font-bold font-display">Neon City</span>
                         </div>
                     </div>
                     <div className="relative group overflow-hidden rounded-2xl bg-gray-900">
                        <GeminiImage 
                            prompt="Digital abstract art, fractal neon, purple and blue, complex geometry, 4k"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 holo-img" 
                            alt="Work 3" 
                        />
                         <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                             <span className="text-sm font-bold font-display">Abstract Soul</span>
                         </div>
                     </div>
                     <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-gray-900">
                        <GeminiImage 
                            prompt="Tech gadget, holographic display, futuristic interface, floating in air, product shot"
                            aspectRatio="16:9"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 holo-img" 
                            alt="Work 4" 
                        />
                         <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                             <span className="text-lg font-bold font-display">Future Tech</span>
                         </div>
                     </div>
                 </div>
             </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default App;
