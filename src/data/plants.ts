import { Plant, PlantCategory } from '../types';

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Holy Basil (Tulsi)',
    scientificName: 'Ocimum sanctum',
    family: 'Lamiaceae',
    commonNames: ['Tulsi', 'Sacred Basil'],
    image: 'https://img.freepik.com/premium-photo/basil-flower_55883-4019.jpg',
    medicinalProperties: ['Anti-microbial', 'Adaptogenic', 'Anti-inflammatory'],
    traditionalUses: [
      'Respiratory conditions',
      'Stress management', 
      'Immune support',
      'Fever reduction'
    ],
    category: [PlantCategory.HERBS, PlantCategory.COOLING, PlantCategory.ALL]
  },
  {
    id: '2', 
    name: 'Neem',
    scientificName: 'Azadirachta indica',
    family: 'Meliaceae',
    commonNames: ['Indian Lilac', 'Margosa'],
    image: 'https://img.freepik.com/premium-photo/neem-leaves-branch_55883-1587.jpg',
    medicinalProperties: ['Anti-bacterial', 'Anti-fungal', 'Blood purifying'],
    traditionalUses: [
      'Skin conditions',
      'Dental care',
      'Blood purification',
      'Natural pesticide'
    ],
    category: [PlantCategory.TREES, PlantCategory.COOLING, PlantCategory.ALL]
  },
  {
    id: '3',
    name: 'Ashwagandha',
    scientificName: 'Withania somnifera',
    family: 'Solanaceae', 
    commonNames: ['Indian Ginseng', 'Winter Cherry'],
    image: 'https://img.freepik.com/free-photo/ashwagandha-powder-bowl_1150-42984.jpg',
    medicinalProperties: ['Adaptogenic', 'Anti-stress', 'Immune boosting'],
    traditionalUses: [
      'Stress relief',
      'Energy enhancement',
      'Sleep improvement',
      'Immunity support'
    ],
    category: [PlantCategory.ROOTS, PlantCategory.WARMING, PlantCategory.ALL]
  },
  {
    id: '4',
    name: 'Turmeric',
    scientificName: 'Curcuma longa',
    family: 'Zingiberaceae',
    commonNames: ['Haldi', 'Indian Saffron'],
    image: 'https://img.freepik.com/free-photo/turmeric-powder-root-black-surface_1150-42736.jpg',
    medicinalProperties: ['Anti-inflammatory', 'Antioxidant', 'Anti-microbial'],
    traditionalUses: [
      'Joint pain',
      'Inflammation',
      'Digestive health',
      'Immune support'
    ],
    category: [PlantCategory.ROOTS, PlantCategory.WARMING, PlantCategory.ALL]
  },
  {
    id: '5',
    name: 'Brahmi',
    scientificName: 'Bacopa monnieri',
    family: 'Plantaginaceae',
    commonNames: ['Water Hyssop', 'Herb of Grace'],
    image: 'https://img.freepik.com/free-photo/green-leaves-plant_1150-43266.jpg',
    medicinalProperties: ['Memory enhancing', 'Anti-anxiety', 'Neuroprotective'],
    traditionalUses: [
      'Cognitive enhancement',
      'Memory improvement',
      'Mental clarity',
      'Stress reduction'
    ],
    category: [PlantCategory.HERBS, PlantCategory.COOLING, PlantCategory.ALL]
  },
  {
    id: '6',
    name: 'Amla',
    scientificName: 'Phyllanthus emblica',
    family: 'Phyllanthaceae',
    commonNames: ['Indian Gooseberry', 'Amalaki'],
    image: 'https://img.freepik.com/free-photo/amla-fruit_1150-42950.jpg',
    medicinalProperties: ['Antioxidant', 'Immune boosting', 'Vitamin C rich'],
    traditionalUses: [
      'Hair health',
      'Eye care',
      'Digestive health',
      'Immunity enhancement'
    ],
    category: [PlantCategory.FRUITS, PlantCategory.COOLING, PlantCategory.ALL]
  },
  {
    id: '7',
    name: 'Ginger',
    scientificName: 'Zingiber officinale',
    family: 'Zingiberaceae',
    commonNames: ['Adrak', 'Sunth'],
    image: 'https://img.freepik.com/free-photo/ginger-root-powder_1150-42936.jpg',
    medicinalProperties: ['Anti-inflammatory', 'Digestive aid', 'Circulation boosting'],
    traditionalUses: [
      'Nausea relief',
      'Digestive support',
      'Cold and flu',
      'Joint pain'
    ],
    category: [PlantCategory.ROOTS, PlantCategory.WARMING, PlantCategory.ALL]
  },
  {
    id: '8',
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    family: 'Asphodelaceae',
    commonNames: ['Ghritkumari', 'True Aloe'],
    image: 'https://img.freepik.com/free-photo/aloe-vera-plant_1150-42984.jpg',
    medicinalProperties: ['Skin healing', 'Anti-inflammatory', 'Moisturizing'],
    traditionalUses: [
      'Skin care',
      'Burn treatment',
      'Digestive health',
      'Hair care'
    ],
    category: [PlantCategory.HERBS, PlantCategory.COOLING, PlantCategory.ALL]
  },
  {
    id: '9',
    name: 'Arjuna',
    scientificName: 'Terminalia arjuna',
    family: 'Combretaceae',
    commonNames: ['White Marudah', 'Arjun'],
    image: 'https://img.freepik.com/free-photo/tree-bark_1150-42990.jpg',
    medicinalProperties: ['Cardioprotective', 'Anti-inflammatory', 'Antioxidant'],
    traditionalUses: [
      'Heart health',
      'Blood pressure',
      'Angina prevention',
      'Cardiac support'
    ],
    category: [PlantCategory.TREES, PlantCategory.ALL]
  },
  {
    id: '10',
    name: 'Shatavari',
    scientificName: 'Asparagus racemosus',
    family: 'Asparagaceae',
    commonNames: ['Indian Asparagus', 'Queen of Herbs'],
    image: 'https://img.freepik.com/free-photo/asparagus-plant_1150-42992.jpg',
    medicinalProperties: ['Adaptogenic', 'Galactagogue', 'Anti-inflammatory'],
    traditionalUses: [
      'Women\'s health',
      'Digestive support',
      'Immune enhancement',
      'Hormonal balance'
    ],
    category: [PlantCategory.ROOTS, PlantCategory.COOLING, PlantCategory.ALL]
  }
];
