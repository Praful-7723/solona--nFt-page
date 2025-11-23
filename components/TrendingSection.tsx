import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MARKET_DATA } from '../constants';
import { TrendingUp, Zap } from 'lucide-react';

export const TrendingSection: React.FC = () => {
  return (
    <section className="py-20 bg-deep relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
            {/* Text Info */}
            <div className="lg:w-1/3 space-y-6">
                <div className="flex items-center gap-2 text-purple-500 mb-2">
                    <TrendingUp size={20} />
                    <span className="uppercase font-bold tracking-widest text-sm">Market Trends</span>
                </div>
                <h2 className="font-display text-4xl font-bold text-white">
                    Trending Crypto <br/>
                    <span className="text-gray-500">& Market News</span>
                </h2>
                <p className="text-gray-400 font-body text-lg">
                    Keep track of the most popular NFT drops and crypto currency fluctuations in real-time. Our AI-powered analytics engine gives you the edge.
                </p>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 backdrop-blur-xl">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <p className="text-gray-400 text-sm">Current ETH Price</p>
                            <h4 className="text-2xl font-bold text-white">$3,450.21</h4>
                        </div>
                        <div className="p-2 rounded-lg bg-green-500/20 text-green-400 text-sm font-bold">
                            +12.5%
                        </div>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-cyan-400" />
                    </div>
                </div>
            </div>

            {/* Chart Container */}
            <div className="lg:w-2/3 h-[400px] rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-md relative overflow-hidden group">
                 {/* Decorative glow */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-600/30 blur-[80px] rounded-full group-hover:bg-purple-600/40 transition-all duration-500" />
                
                <div className="flex items-center justify-between mb-8 relative z-10">
                    <h3 className="font-display text-xl font-bold">Market Activity</h3>
                    <div className="flex gap-2">
                        {['1H', '1D', '1W', '1M'].map((t, i) => (
                            <button key={t} className={`px-3 py-1 rounded-lg text-xs font-bold ${i === 1 ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-400 hover:text-white'}`}>
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                <ResponsiveContainer width="100%" height="80%">
                    <AreaChart data={MARKET_DATA}>
                        <defs>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                        <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#050511', borderColor: '#333', borderRadius: '8px' }}
                            itemStyle={{ color: '#a855f7' }}
                        />
                        <Area 
                            type="monotone" 
                            dataKey="pv" 
                            stroke="#8b5cf6" 
                            strokeWidth={3}
                            fillOpacity={1} 
                            fill="url(#colorPv)" 
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>
    </section>
  );
};
