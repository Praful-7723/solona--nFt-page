import React, { useEffect, useState } from 'react';
import { generateImage } from '../utils/imageGenerator';
import { Loader2 } from 'lucide-react';

interface GeminiImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  prompt: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
}

export const GeminiImage: React.FC<GeminiImageProps> = ({ prompt, aspectRatio = "1:1", className, alt, ...props }) => {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    generateImage(prompt, aspectRatio).then(url => {
      if (mounted) setSrc(url);
    });
    return () => { mounted = false; };
  }, [prompt, aspectRatio]);

  if (!src) {
    return (
      <div className={`bg-white/5 flex items-center justify-center ${className}`}>
        <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} {...props} />;
};
