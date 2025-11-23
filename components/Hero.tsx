import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { NFTCard } from './NFTCard';
import { NFT_DATA } from '../constants';
// import { GeminiImage } from './GeminiImage';

export const Hero: React.FC = () => {
    // Take first 3 items for the floating display
    const heroCards = NFT_DATA.slice(0, 3);

    return (
        <section id="home" className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden bg-deep">

            {/* AI Generated Backgrounds */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/hero-bg.png"
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-40 mix-blend-screen"
                />
            </div>
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/particles.png"
                    alt="Particles"
                    className="w-full h-full object-cover opacity-30 animate-pulse-glow mix-blend-screen"
                />
            </div>

            {/* Gradient Overlays for Text Readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-deep via-deep/90 to-transparent" />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-deep via-transparent to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 relative">

                {/* Left Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-xs font-bold tracking-widest uppercase text-purple-300">Infinite Possibilities</span>
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl font-black leading-tight text-white">
                        Solana NFT <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                            Collect Digital
                        </span>
                    </h1>

                    <p className="font-body text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
                        All Solana NFTs in one place. Connect with us for newest feature releases, NFT announcements, drops and tips & tricks.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-display font-bold text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] hover:scale-105 transition-all flex items-center justify-center gap-2 group">
                            Explore NFTs <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button className="px-8 py-4 bg-transparent border border-white/20 rounded-full font-display font-bold text-white hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center gap-2">
                            <PlayCircle size={20} /> Watch Demo
                        </button>
                    </div>

                    <div className="pt-8 flex items-center gap-4">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-deep bg-gray-800 overflow-hidden">
                                    <img src={`https://picsum.photos/100?random=${i}`} alt="User" className="w-full h-full object-cover opacity-80" />
                                </div>
                            ))}
                        </div>
                        <div>
                            <p className="font-display font-bold text-xl">47M+</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Artworks Collected</p>
                        </div>
                    </div>
                </div>

                {/* Right Content - Floating 3D Visuals */}
                <div className="relative h-[600px] flex items-center justify-center perspective-1000">
                    {/* Orbit rings */}
                    <div className="absolute inset-0 border border-white/5 rounded-full transform rotate-x-60 scale-150" />
                    <div className="absolute inset-0 border border-purple-500/20 rounded-full transform rotate-x-60 scale-125 animate-spin-slow" style={{ animationDuration: '20s' }} />

                    {/* Floating Cards */}
                    <div className="absolute z-30 w-64 transform -translate-x-20 -translate-y-12 animate-float" style={{ animationDelay: '0s' }}>
                        <NFTCard item={heroCards[0]} />
                    </div>
                    <div className="absolute z-20 w-56 transform translate-x-24 translate-y-20 animate-float" style={{ animationDelay: '2s' }}>
                        {/* Simplified card for background */}
                        <div className="w-full h-80 rounded-xl bg-card-gradient border border-white/5 backdrop-blur-sm p-3 opacity-80">
                            <div className="w-full h-2/3 rounded-lg bg-gray-800 mb-2 overflow-hidden relative">
                                <img
                                    src={heroCards[1].image}
                                    className="w-full h-full object-cover holo-img opacity-60"
                                    alt="Hero Card 2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute z-10 w-48 transform -translate-x-32 translate-y-32 blur-[2px] animate-float" style={{ animationDelay: '4s' }}>
                        <div className="w-full h-64 rounded-xl bg-card-gradient border border-white/5 backdrop-blur-sm p-3 opacity-60">
                            <div className="w-full h-2/3 rounded-lg bg-gray-800 mb-2 overflow-hidden relative">
                                <img
                                    src={heroCards[2].image}
                                    className="w-full h-full object-cover holo-img opacity-40"
                                    alt="Hero Card 3"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
