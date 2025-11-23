import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const imageCache: Record<string, string> = {};
const pendingRequests: Record<string, Promise<string>> = {};

export async function generateImage(prompt: string, aspectRatio: string = "1:1"): Promise<string> {
  const cacheKey = `${prompt}-${aspectRatio}`;

  if (imageCache[cacheKey]) {
    return imageCache[cacheKey];
  }

  if (pendingRequests[cacheKey]) {
    return pendingRequests[cacheKey];
  }

  const request = (async () => {
    try {
      // Small delay to stagger concurrent requests and avoid rate limits
      await new Promise(resolve => setTimeout(resolve, Math.random() * 2000));

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: aspectRatio as any,
          },
        },
      });

      let base64Data = null;
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData && part.inlineData.data) {
            base64Data = part.inlineData.data;
            break;
          }
        }
      }

      if (!base64Data) {
         throw new Error("No image data in response");
      }

      const url = `data:image/png;base64,${base64Data}`;
      imageCache[cacheKey] = url;
      return url;

    } catch (error) {
      console.error("Failed to generate image for prompt:", prompt, error);
      delete pendingRequests[cacheKey];
      // Return a transparent pixel or fallback to avoid broken image icon
      return "https://placehold.co/600x600/1a1a40/a855f7?text=Generation+Failed";
    }
  })();

  pendingRequests[cacheKey] = request;
  return request;
}
