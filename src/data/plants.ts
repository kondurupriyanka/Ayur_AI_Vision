import { Plant, PlantCategory } from '../types';

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Holy Basil (Tulsi)',
    scientificName: 'Ocimum sanctum',
    family: 'Lamiaceae',
    commonNames: ['Tulsi', 'Sacred Basil'],
    image: 'https://img.freepik.com/premium-photo/basil-flower_55883-4019.jpg?w=996',
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
    name: 'Neem',
    scientificName: 'Azadirachta indica',
    family: 'Meliaceae',
    commonNames: ['Indian Lilac', 'Margosa'],
    image: 'https://img.freepik.com/premium-photo/close-up-fresh-green-leaves-against-white-background_1048944-18559582.jpg?w=740',
    medicinalProperties: ['Anti-bacterial', 'Anti-fungal', 'Blood purifying'],
    traditionalUses: [
      'Skin conditions',
      'Dental care',
      'Blood purification',
      'Natural pesticide'
    ],
    category: [PlantCategory.TREES, PlantCategory.ALL]
  },
  {
    id: '3',
    name: 'Ashwagandha',
    scientificName: 'Withania somnifera',
    family: 'Solanaceae',
    commonNames: ['Indian Ginseng', 'Winter Cherry'],
    image: 'https://img.freepik.com/free-photo/composition-nutritious-cassava-roots-sliced_23-2149091025.jpg?t=st=1746721211~exp=1746724811~hmac=1a1fa3a9cdb9caf31beb0e56baa2ac76eb2e4a469002a63b4eb36b53f861c590&w=740',
    medicinalProperties: ['Adaptogenic', 'Anti-stress', 'Immune boosting'],
    traditionalUses: [
      'Stress relief',
      'Energy enhancement',
      'Sleep improvement',
      'Immunity support'
    ],
    category: [PlantCategory.HERBS, PlantCategory.ALL]
  },
  {
    id: '4',
    name: 'Turmeric',
    scientificName: 'Curcuma longa',
    family: 'Zingiberaceae',
    commonNames: ['Haldi', 'Indian Saffron'],
    image: 'https://img.freepik.com/free-photo/closeup-shot-turmerics-with-wooden-shovel_181624-28460.jpg?t=st=1746721267~exp=1746724867~hmac=e49dbf74116a72694295810925647462edc97c9d8c7d1ed1d38392274a901234&w=1380',
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
    image: 'https://img.freepik.com/free-photo/flowering-endemic-maltese-spurge-euphorbia-melitensis-shrub_181624-21549.jpg?t=st=1746721400~exp=1746725000~hmac=1c5dfd9333e58282546c9876198505fe1eb6c0c0c6650855e36656c8953867d7&w=1380',
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
    name: 'Shatavari',
    scientificName: 'Asparagus racemosus',
    family: 'Asparagaceae',
    commonNames: ['Indian Asparagus', 'Queen of Herbs'],
    image: 'https://img.freepik.com/free-photo/top-view-saffron-still-life-composition_23-2149130015.jpg?t=st=1746721458~exp=1746725058~hmac=f031fa45cf35c06b7172cc2eea2d883c0e80a045611d640241ad87bf2bf48df7&w=1380',
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