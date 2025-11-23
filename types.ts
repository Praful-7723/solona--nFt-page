export interface NFTItem {
  id: string;
  title: string;
  creator: string;
  price: number;
  currency: string;
  timeLeft: string;
  image: string;
  category: string;
}

export interface MarketTrend {
  name: string;
  value: number;
  change: number;
}

export interface StatMetric {
  label: string;
  value: string;
  icon: string;
}

export type Category = 'All' | 'Art' | 'Music' | 'Virtual Reality' | 'Gaming';