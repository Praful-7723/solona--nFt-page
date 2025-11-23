import { GoogleGenAI } from "@google/genai";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { Buffer } from "buffer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const ASSETS_DIR = path.join(__dirname, '../public/assets');

// Ensure assets directory exists
try {
  await fs.mkdir(ASSETS_DIR, { recursive: true });
} catch (err) {
  console.error("Error creating assets directory:", err);
}

const ASSET_CONFIGS = [
  {
    filename: 'hero-bg.png',
    prompt: '3D sci-fi crypto vault floating in neon purple with holographic particles, neo-cyberpunk style, 8k resolution, volumetric lighting, dark void background, cinematic composition'
  },
  {
    filename: 'particles.png',
    prompt: 'Seamless holographic particle texture, deep purple and black background, glowing white and violet dots, stars, cosmic dust, high contrast, abstract, subtle bokeh'
  },
  {
    filename: 'explore-bg.png',
    prompt: 'Abstract glowing crypto cube cluster floating in dark space, interconnecting data lines, purple neon glow, wide angle, background texture'
  },
  {
    filename: 'nft-1.png',
    prompt: 'Futuristic digital avatar, cyberpunk samurai, neon glitch aesthetic, purple and blue palette, high detail 3d render'
  },
  {
    filename: 'nft-2.png',
    prompt: 'Holographic crystal skull artifact, floating in void, neon rim lights, neo-cyberpunk, glass material'
  },
  {
    filename: 'nft-3.png',
    prompt: 'Abstract digital soul, glowing ethereal wisp, deep violet background, glossy glassmorphism, fluid shapes'
  },
  {
    filename: 'nft-4.png',
    prompt: 'Cybernetic android portrait, gold and purple plating, futuristic fashion, high detail, studio lighting'
  },
  {
    filename: 'nft-5.png',
    prompt: 'Virtual reality headset floating artifact, glass wires, glowing data streams, synthwave colors, 3d icon'
  },
  {
    filename: 'nft-6.png',
    prompt: 'Sonic wave visualization, solid shape, neon bars, equalizer 3D object, glossy dark theme, music nft'
  },
  {
    filename: 'work-1.png',
    prompt: 'Cyberpunk city street at night, rain, neon signs, low angle, detailed, futuristic architecture'
  },
  {
    filename: 'work-2.png',
    prompt: 'Futuristic vehicle, flying car, neon trails, dark background, speed, motion blur'
  },
  {
    filename: 'work-3.png',
    prompt: 'Digital abstract art, fractal neon, purple and blue, complex geometry, 4k'
  },
  {
    filename: 'work-4.png',
    prompt: 'Tech gadget, holographic display, futuristic interface, floating in air, product shot'
  }
];

async function generateAndSaveImage(config) {
  console.log(`Generating ${config.filename}...`);
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: config.prompt }
        ],
      },
      // Note: responseMimeType is not supported for this model, so we parse the parts manually.
    });

    let imageBase64 = null;

    // Iterate through parts to find the image
    if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData && part.inlineData.data) {
                imageBase64 = part.inlineData.data;
                break;
            }
        }
    }

    if (imageBase64) {
      const buffer = Buffer.from(imageBase64, 'base64');
      const filePath = path.join(ASSETS_DIR, config.filename);
      await fs.writeFile(filePath, buffer);
      console.log(`✅ Saved ${config.filename}`);
    } else {
      console.error(`❌ No image data found in response for ${config.filename}`);
    }

  } catch (error) {
    console.error(`❌ Failed to generate ${config.filename}:`, error);
  }
}

async function main() {
  console.log("🚀 Starting Asset Generation...");
  for (const config of ASSET_CONFIGS) {
    await generateAndSaveImage(config);
  }
  console.log("✨ All assets processed.");
}

main();