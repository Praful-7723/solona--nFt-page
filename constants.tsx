import React from 'react';
import { NFTItem, MarketTrend, StatMetric } from './types';
import { Box, Layers, Zap, Globe, Music, Image as ImageIcon, Monitor } from 'lucide-react';

// Using Gemini prompts for on-the-fly generation
export const NFT_DATA: NFTItem[] = [
  {
    id: '1',
    title: 'ToadstoolSobel #56',
    creator: 'Jacob Jones',
    price: 6.42,
    currency: 'ETH',
    timeLeft: '05h 02m 41s',
    image: '/assets/nft-1.png',
    category: 'Art'
  },
  {
    id: '2',
    title: 'Neon Genesis #22',
    creator: 'Alex Nova',
    price: 8.15,
    currency: 'ETH',
    timeLeft: '02h 12m 10s',
    image: '/assets/nft-2.png',
    category: 'Virtual Reality'
  },
  {
    id: '3',
    title: 'Ether Spirit #99',
    creator: 'Sarah Void',
    price: 4.20,
    currency: 'ETH',
    timeLeft: '12h 00m 00s',
    image: '/assets/nft-3.png',
    category: 'Gaming'
  },
  {
    id: '4',
    title: 'Cyber Skull V1',
    creator: 'Dark Matter',
    price: 12.50,
    currency: 'ETH',
    timeLeft: '01h 30m 15s',
    image: '/assets/nft-4.png',
    category: 'Art'
  },
  {
    id: '5',
    title: 'Void Walker',
    creator: 'Null Pointer',
    price: 3.75,
    currency: 'ETH',
    timeLeft: '24h 10m 05s',
    image: '/assets/nft-5.png',
    category: 'Virtual Reality'
  },
  {
    id: '6',
    title: 'Sonic Wave X',
    creator: 'Audio Junkie',
    price: 5.00,
    currency: 'ETH',
    timeLeft: '06h 45m 30s',
    image: '/assets/nft-6.png',
    category: 'Music'
  }
];

export const MARKET_DATA = [
  { name: 'Mon', value: 4000, pv: 2400, amt: 2400 },
  { name: 'Tue', value: 3000, pv: 1398, amt: 2210 },
  { name: 'Wed', value: 2000, pv: 9800, amt: 2290 },
  { name: 'Thu', value: 2780, pv: 3908, amt: 2000 },
  { name: 'Fri', value: 1890, pv: 4800, amt: 2181 },
  { name: 'Sat', value: 2390, pv: 3800, amt: 2500 },
  { name: 'Sun', value: 3490, pv: 4300, amt: 2100 },
];

export const CATEGORIES = [
  { name: 'All', icon: <Layers size={16} /> },
  { name: 'Art', icon: <ImageIcon size={16} /> },
  { name: 'Music', icon: <Music size={16} /> },
  { name: 'Virtual Reality', icon: <Box size={16} /> },
  { name: 'Gaming', icon: <Monitor size={16} /> },
];

export const STATS: StatMetric[] = [
  { label: 'Year Experience', value: '42', icon: 'timeline' },
  { label: 'Owned', value: '204', icon: 'user' },
  { label: 'Digital Art', value: '24M', icon: 'image' },
  { label: 'Project Completed', value: '112', icon: 'check' },
];
