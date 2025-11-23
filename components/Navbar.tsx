import React, { useState, useEffect } from 'react';
import { Menu, X, Wallet } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-deep/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent py-6'
    }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center mr-2 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <span className="font-display font-bold text-xl">S</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-wider">SolonaZone</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About Us', 'NFTs', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-body text-sm uppercase tracking-widest hover:text-purple-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="font-body text-sm font-bold px-6 py-2 rounded-full border border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10 transition-all">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-body font-bold text-sm shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 transition-all flex items-center gap-2">
              <Wallet size={16} />
              Get Started
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-deep/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <div className="px-4 pt-2 pb-4 space-y-1">
          {['Home', 'About Us', 'NFTs', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-purple-400 hover:bg-white/5"
            >
              {item}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <button className="w-full text-center font-bold py-3 border border-white/10 rounded-lg">Sign In</button>
            <button className="w-full text-center font-bold py-3 bg-purple-600 rounded-lg shadow-lg shadow-purple-600/40">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
