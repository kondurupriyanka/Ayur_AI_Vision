export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  family: string;
  commonNames: string[];
  image: string;
  medicinalProperties: string[];
  traditionalUses: string[];
  category: PlantCategory[];
}

export enum PlantCategory {
  ALL = 'All Plants',
  HERBS = 'Herbs',
  TREES = 'Trees',
  ROOTS = 'Roots',
  FRUITS = 'Fruits',
  WARMING = 'Warming',
  COOLING = 'Cooling'
}

export interface IdentificationResult {
  plantId: string;
  confidence: number;
  verified: boolean;
}

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  avatar_url?: string;
  bio?: string;
  created_at: Date;
  qualification?: string;
  specialization?: string;
  contact?: string;
  location?: string;
  website?: string;
}

export interface SearchHistory {
  id: string;
  userId: string;
  plantId: string;
  plantName: string;
  searchDate: Date;
  confidence: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  duration: string;
  instructor: string;
  category: string;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}