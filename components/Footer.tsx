import React from 'react';
import { Twitter, Instagram, Disc as Discord, Github } from 'lucide-react';
// import { GeminiImage } from './GeminiImage';

export const Footer: React.FC = () => {
    return (
        <footer className="relative bg-[#02020a] pt-20 pb-10 overflow-hidden border-t border-white/5">
            {/* AI Generated Background Particles */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen">
                <img
                    src="/assets/particles.png"
                    className="w-full h-full object-cover"
                    alt="Particles"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center mr-2 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                                <span className="font-display font-bold text-md">S</span>
                            </div>
                            <span className="font-display font-bold text-xl tracking-wider">SolonaZone</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                        </p>
                        <div className="flex space-x-4">
                            {[Twitter, Instagram, Discord, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white hover:scale-110 transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-lg mb-6">Marketplace</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            {['All NFTs', 'Art', 'Music', 'Domain Names', 'Virtual World'].map(item => (
                                <li key={item}><a href="#" className="hover:text-purple-400 transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-lg mb-6">My Account</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            {['Profile', 'Favorites', 'Watchlist', 'My Collections', 'Settings'].map(item => (
                                <li key={item}><a href="#" className="hover:text-purple-400 transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-lg mb-6">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe for the latest updates and exclusive drops.
                        </p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                            />
                            <button className="absolute right-1 top-1 bottom-1 bg-purple-600 hover:bg-purple-500 text-white px-4 rounded-md text-xs font-bold transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © 2024 SolonaZone NFT Market. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-gray-500 text-xs">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
