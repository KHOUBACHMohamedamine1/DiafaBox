import { GoogleGenAI } from "@google/genai";

// We use the "banana" model equivalent for image generation as requested
const MODEL_NAME = 'gemini-2.5-flash-image'; 

export const generateProductImage = async (prompt: string): Promise<string | null> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key is missing. Please provide an API key to use Image Generation.");
      return null;
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // According to documentation, we use generateContent for nano banana series
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: {
        parts: [
          {
            text: `Professional luxury product photography of: ${prompt}. Cinematic lighting, warm Moroccan tones (gold, beige, emerald), high-end editorial style, photorealistic, elegant composition, shallow depth of field, isolated on a textured neutral background.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1", 
          // imageSize: "1K" // Optional, default is 1K
        }
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        return `data:image/png;base64,${base64EncodeString}`;
      }
    }

    return null;

  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};