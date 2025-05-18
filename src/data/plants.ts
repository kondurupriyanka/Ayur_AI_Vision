import { Plant, PlantCategory } from '../types';

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Holy Basil (Tulsi)',
    scientificName: 'Ocimum sanctum',
    family: 'Lamiaceae',
    commonNames: ['Tulsi', 'Sacred Basil'],
    image: 'https://img.freepik.com/free-photo/tulsi-medicinal-plant_1150-37798.jpg',
    medicinalProperties: ['Anti-microbial', 'Adaptogenic', 'Anti-inflammatory'],
    traditionalUses: [
      'Respiratory conditions',
      'Stress management',
      'Immune support',
      'Fever reduction'
    ],
    category: [PlantCategory.HERBS, PlantCategory.ALL]
  },
  {
    id: '2',
    name: 'Mint (Pudina)',
    scientificName: 'Mentha spicata',
    family: 'Lamiaceae',
    commonNames: ['Spearmint', 'Pudina'],
    image: 'https://img.freepik.com/free-photo/fresh-mint-leaves_1150-42736.jpg',
    medicinalProperties: ['Digestive aid', 'Anti-spasmodic', 'Cooling'],
    traditionalUses: [
      'Digestive disorders',
      'Headache relief',
      'Fresh breath',
      'Nausea treatment'
    ],
    category: [PlantCategory.HERBS, PlantCategory.ALL]
  },
  {
    id: '3',
    name: 'Lemongrass',
    scientificName: 'Cymbopogon citratus',
    family: 'Poaceae',
    commonNames: ['West Indian Lemongrass', 'Citronella Grass'],
    image: 'https://img.freepik.com/free-photo/lemongrass-leaves_1150-42950.jpg',
    medicinalProperties: ['Anti-bacterial', 'Anti-fungal', 'Anti-inflammatory'],
    traditionalUses: [
      'Fever reduction',
      'Digestive aid',
      'Anxiety relief',
      'Pain management'
    ],
    category: [PlantCategory.HERBS, PlantCategory.ALL]
  },
  {
    id: '4',
    name: 'Brahmi',
    scientificName: 'Bacopa monnieri',
    family: 'Plantaginaceae',
    commonNames: ['Water Hyssop', 'Herb of Grace'],
    image: 'https://img.freepik.com/free-photo/brahmi-leaves_1150-42984.jpg',
    medicinalProperties: ['Memory enhancing', 'Anti-anxiety', 'Neuroprotective'],
    traditionalUses: [
      'Memory improvement',
      'Mental clarity',
      'Stress reduction',
      'Cognitive enhancement'
    ],
    category: [PlantCategory.HERBS, PlantCategory.ALL]
  },
  {
    id: '5',
    name: 'Thyme',
    scientificName: 'Thymus vulgaris',
    family: 'Lamiaceae',
    commonNames: ['Common Thyme', 'Garden Thyme'],
    image: 'https://img.freepik.com/free-photo/fresh-thyme-twigs_1150-42736.jpg',
    medicinalProperties: ['Antimicrobial', 'Expectorant', 'Antispasmodic'],
    traditionalUses: [
      'Respiratory infections',
      'Cough relief',
      'Digestive aid',
      'Immune support'
    ],
    category: [PlantCategory.HERBS, PlantCategory.ALL]
  },
  {
    id: '6',
    name: 'Rosemary',
    scientificName: 'Rosmarinus officinalis',
    family: 'Lamiaceae',
    commonNames: ['Garden Rosemary', 'Rusmari'],
    image: 'https://img.freepik.com/free-photo/rosemary-plant_1150-42950.jpg',
    medicinalProperties: ['Memory enhancing', 'Anti-inflammatory', 'Antioxidant'],
    traditionalUses: [
      'Memory improvement',
      'Hair growth',
      'Digestive health',
      'Mental clarity'
    ],
    category: [PlantCategory.HERBS, PlantCategory.ALL]
  },
  {
    id: '7',
    name: 'Sage',
    scientificName: 'Salvia officinalis',
    family: 'Lamiaceae',
    commonNames: ['Common Sage', 'Garden Sage'],
    image: 'https://img.freepik.com/free-photo/sage-leaves_1150-42736.jpg',
    medicinalProperties: ['Anti-inflammatory', 'Antimicrobial', 'Memory enhancing'],
    traditionalUses: [
      'Oral health',
      'Memory support',
      'Menopausal symptoms',
      'Digestive aid'
    ],
    category: [PlantCategory.HERBS, PlantCategory.ALL]
  },
  {
    id: '8',
    name: 'Chamomile',
    scientificName: 'Matricaria chamomilla',
    family: 'Asteraceae',
    commonNames: ['German Chamomile', 'Wild Chamomile'],
    image: 'https://img.freepik.com/free-photo/chamomile-flowers_1150-42984.jpg',
    medicinalProperties: ['Calming', 'Anti-inflammatory', 'Sleep promoting'],
    traditionalUses: [
      'Sleep aid',
      'Anxiety relief',
      'Digestive health',
      'Skin care'
    ],
    category: [PlantCategory.HERBS, PlantCategory.ALL]
  },
  {
    id: '9',
    name: 'Lavender',
    scientificName: 'Lavandula angustifolia',
    family: 'Lamiaceae',
    commonNames: ['English Lavender', 'Common Lavender'],
    image: 'https://img.freepik.com/free-photo/lavender-field_1150-42950.jpg',
    medicinalProperties: ['Calming', 'Antimicrobial', 'Sleep promoting'],
    traditionalUses: [
      'Anxiety relief',
      'Sleep improvement',
      'Headache relief',
      'Skin care'
    ],
    category: [PlantCategory.HERBS, PlantCategory.ALL]
  },
  {
    id: '10',
    name: 'Oregano',
    scientificName: 'Origanum vulgare',
    family: 'Lamiaceae',
    commonNames: ['Wild Marjoram', 'Mountain Mint'],
    image: 'https://img.freepik.com/free-photo/oregano-leaves_1150-42736.jpg',
    medicinalProperties: ['Antimicrobial', 'Antioxidant', 'Anti-inflammatory'],
    traditionalUses: [
      'Respiratory health',
      'Immune support',
      'Digestive aid',
      'Anti-bacterial'
    ],
    category: [PlantCategory.HERBS, PlantCategory.ALL]
  }
];