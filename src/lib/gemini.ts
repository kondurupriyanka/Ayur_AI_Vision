import { GoogleGenerativeAI } from "@google/generative-ai";

export interface PredictionResult {
  plant: {
    name: string;
    scientificName: string;
    confidence: number;
    medicinalProperties: string[];
    traditionalUses: string[];
    description: string;
    imageUrl: string;
    characteristics: {
      lightRequirement: string;
      wateringSchedule: string;
      commonDiseases: string[];
      idealEnvironment: string;
      growthPattern: string;
      harvestingSeason: string;
    };
  };
}

function extractJsonFromText(text: string): string {
  try {
    // Remove markdown code block syntax if present
    text = text.replace(/```json\s*|\s*```/g, '');
    
    // Find the first { and last } to extract the JSON object
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}') + 1;
    
    if (start === -1 || end === 0) {
      throw new Error('No valid JSON object found in response');
    }
    
    return text.slice(start, end);
  } catch (error) {
    console.error('Error extracting JSON:', error);
    throw new Error('Failed to extract valid JSON from response');
  }
}

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function getPlantImage(plantName: string, scientificName: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `Find a high-quality, accurate image URL for the medicinal plant:
    Common Name: ${plantName}
    Scientific Name: ${scientificName}
    
    Return ONLY a valid, working image URL from Wikipedia or a reputable source.
    The URL should directly link to a clear, well-lit photo of the plant.
    Do not include any other text or explanation.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const imageUrl = response.text().trim();
    
    // Validate URL
    const urlPattern = /^https?:\/\/.+\.(jpg|jpeg|png|webp)$/i;
    if (!urlPattern.test(imageUrl)) {
      throw new Error('Invalid image URL format');
    }

    return imageUrl;
  } catch (error) {
    console.error('Error fetching plant image:', error);
    // Return a fallback image
    return 'https://images.pexels.com/photos/3751697/pexels-photo-3751697.jpeg';
  }
}

export async function generatePlantData(): Promise<PredictionResult[]> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `Generate data for 6 medicinal plants in JSON format. Include:
    - Common name
    - Scientific name
    - Medicinal properties (3-5 properties)
    - Traditional uses (3-5 uses)
    - Brief description
    - Growing characteristics
    
    Focus on well-known Ayurvedic plants. Return the data as a JSON array.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const plants = JSON.parse(response.text());
    
    // Add images to each plant
    const plantsWithImages = await Promise.all(
      plants.map(async (plant: PredictionResult) => {
        const imageUrl = await getPlantImage(plant.plant.name, plant.plant.scientificName);
        return {
          ...plant,
          plant: {
            ...plant.plant,
            imageUrl
          }
        };
      })
    );

    return plantsWithImages;
  } catch (error) {
    console.error('Error generating plant data:', error);
    return [];
  }
}

export async function identifyPlant(imageBase64: string): Promise<PredictionResult> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `You are an expert in identifying plants, especially those native to India. Analyze this plant image and identify it if it matches any of these medicinal plants:

Medicinal Plants:
- Aloe Vera (Aloe barbadensis miller)
- Amla (Phyllanthus emblica)
- Amruta Balli
- Arali
- Ashoka (Saraca asoca)
- Ashwagandha (Withania somnifera)
- Avocado (Persea americana)
- Bamboo (Bambusa vulgaris)
- Basale
- Betel (Piper betle)
- Betel Nut (Areca catechu)
- Brahmi (Bacopa monnieri)
- Castor (Ricinus communis)
- Curry Leaf (Murraya koenigii)
- Doddapatre
- Ekka
- Ganike
- Guava (Psidium guajava)
- Geranium (Pelargonium graveolens)
- Henna (Lawsonia inermis)
- Hibiscus (Hibiscus rosa-sinensis)
- Holy Basil/Tulsi (Ocimum sanctum)
- Honge
- Orange
- Insulin Plant (Costus igneus)
- Jasmine (Jasminum officinale)
- Lemon (Citrus limon)
- Lemongrass (Cymbopogon)
- Mango (Mangifera indica)
- Mint (Mentha)
- Nagadali
- Neem (Azadirachta indica)
- Nithyapushpa
- Nooni
- Papaya (Carica papaya)
- Pepper (Piper nigrum)
- Pomegranate (Punica granatum)
- Raktachandini
- Rose (Rosa)
- Sapota (Manilkara zapota)
- Shatavari (Asparagus racemosus)
- Turmeric (Curcuma longa)
- Wood Sorel (Oxalis)

Medicinal Leaves:
- Aloe Vera
- Amla
- Astma Weed
- Badipala
- Balloon Vine
- Bamboo
- Beans
- Betel
- Bhrami
- Bringaraja
- Caricature
- Castor
- Catharanthus
- Chakte
- Chilly
- Citron Lime (Herelikai)
- Coffee
- Common Rue (Naagdalli)
- Coriander
- Curry
- Doddpathre
- Drumstick
- Ekka
- Eucalyptus
- Ganigale
- Ganike
- Gasagase
- Ginger
- Globe Amarnath
- Guava
- Henna
- Hibiscus
- Honge
- Insulin
- Jackfruit
- Jasmine
- Kambajala
- Kasambruga
- Kohlrabi
- Lantana
- Lemon
- Lemongrass
- Malabar Nut
- Malabar Spinach
- Mango
- Marigold
- Mint
- Neem
- Nelavembu
- Nerale
- Nooni
- Onion
- Padri
- Palak (Spinach)
- Papaya
- Parijatha
- Pea
- Pepper
- Pomegranate
- Pumpkin
- Radish
- Rose
- Sampige
- Sapota
- Seethaashoka
- Seethapala
- Spinach
- Tamarind
- Taro
- Tecoma
- Thumbe
- Tomato
- Tulsi
- Turmeric
- Ashoka
- Camphor
- Kamakasturi
- Kepala
Respond with ONLY a JSON object in this exact format:
{
  "plant": {
    "name": "common name of the plant",
    "scientificName": "scientific/botanical name",
    "confidence": confidence score between 0-100,
    "medicinalProperties": ["list of medicinal properties"],
    "traditionalUses": ["list of traditional medicinal uses"],
    "description": "detailed description of the plant and its characteristics",
    "characteristics": {
      "lightRequirement": "detailed light requirements",
      "wateringSchedule": "watering frequency and requirements",
      "commonDiseases": ["list of common diseases"],
      "idealEnvironment": "ideal growing conditions",
      "growthPattern": "description of growth pattern",
      "harvestingSeason": "best time for harvesting"
    }
  }
}

If the plant doesn't match any in the list, set confidence to 0 and explain in the description.`;

    // Convert base64 to Uint8Array for Gemini API
    const imageData = imageBase64.includes('base64,') 
      ? imageBase64.split('base64,')[1] 
      : imageBase64;
    const binaryData = atob(imageData);
    const bytes = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      bytes[i] = binaryData.charCodeAt(i);
    }

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: imageData
        }
      }
    ]);

    const response = await result.response;
    const text = response.text();
    
    // Extract and parse the JSON from the response
    const jsonText = extractJsonFromText(text);
    const parsed = JSON.parse(jsonText);

    // Validate the response structure
    if (!parsed.plant || typeof parsed.plant.confidence !== 'number') {
      throw new Error('Invalid response format from AI');
    }

    return parsed;
  } catch (error) {
    console.error('Failed to identify plant:', error);
    throw error instanceof Error ? error : new Error('Failed to identify plant');
  }
}

export async function predictRemedy(symptoms: string): Promise<PredictionResult> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `As an Ayurvedic expert, analyze these symptoms and recommend the most suitable medicinal plant remedy:
    ${symptoms}

    Respond ONLY with a JSON object in this exact format:
    {
      "plant": {
        "name": "recommended herb name",
        "scientificName": "scientific name",
        "confidence": confidence score between 0-100,
        "medicinalProperties": ["list of medicinal properties"],
        "traditionalUses": ["list of traditional uses"],
        "description": "detailed explanation of why this herb is recommended for these symptoms",
        "characteristics": {
          "lightRequirement": "detailed light requirements",
          "wateringSchedule": "watering frequency and requirements",
          "commonDiseases": ["list of common diseases"],
          "idealEnvironment": "ideal growing conditions",
          "growthPattern": "description of growth pattern",
          "harvestingSeason": "best time for harvesting"
        }
      }
    }

    Only recommend from these plants:
    - Holy Basil (Tulsi)
    - Neem
    - Aloe Vera
    - Turmeric
    - Ginger
    - Amla
    - Ashwagandha
    - Brahmi
    - Shatavari`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Extract and parse the JSON from the response
    const jsonText = extractJsonFromText(text);
    const parsed = JSON.parse(jsonText);

    // Validate the response structure
    if (!parsed.plant || typeof parsed.plant.confidence !== 'number') {
      throw new Error('Invalid response format from AI');
    }

    return parsed;
  } catch (error) {
    console.error('Failed to process prediction:', error);
    throw error instanceof Error ? error : new Error('Failed to process prediction');
  }
}