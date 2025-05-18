// data/courses.ts
import { Course } from '../types/Course';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Ayurvedic Medicine',
    description: 'Learn the fundamentals of Ayurveda and its principles of natural healing.',
    imageUrl: 'https://img.freepik.com/free-photo/woman-drinking-herbal-tea-with-her-friend_1398-4078.jpg?uid=R119786286&semt=ais_hybrid&w=740',
    videoUrl: 'https://www.youtube.com/watch?v=CMQpJVUV2Lc',
    duration: '10 mins',
    instructor: 'Dr. Sarah Johnson',
    category: 'Fundamentals'
  },
  {
    id: '2',
    title: 'Medicinal Plants & Their Properties',
    description: 'Discover the healing properties of common Ayurvedic herbs and plants.',
    imageUrl: 'https://img.freepik.com/free-photo/high-angle-man-preparing-mate_23-2149860504.jpg?t=st=1746721896~exp=1746725496~hmac=e4e421ee2d8b2fe53a06a8ff60a48d4d43d6d65ed6e8572b970d2ca512f6c352&w=740',
    videoUrl: 'https://www.youtube.com/watch?v=XNp8PXCQAlE',
    duration: '1 hour',
    instructor: 'Dr. Rajesh Patel',
    category: 'Herbology'
  },
  {
    id: '3',
    title: 'Ayurvedic Nutrition & Diet',
    description: 'Understanding food as medicine in Ayurvedic practice.',
    imageUrl: 'https://img.freepik.com/free-photo/young-happy-woman-eating-salad-table_169016-1924.jpg?t=st=1746722133~exp=1746725733~hmac=8c0e1bcefd2f91fb1c62f84e0b91740ff8915ddf0c10dc8ca72cb59077beec22&w=1380',
    videoUrl: 'https://www.youtube.com/watch?v=XPAD69zFVT4',
    duration: '20 mins',
    instructor: 'Dr. Emily Chen',
    category: 'Nutrition'
  },
  {
    id: '4',
    title: 'Common Medicinal Plants of India',
    description: 'Learn to identify and use traditional Indian medicinal plants.',
    imageUrl: 'https://img.freepik.com/premium-photo/medicinal-herbs-homeopathy-alternative-medicine-selective-focus_73944-62978.jpg?w=740',
    videoUrl: 'https://www.youtube.com/watch?v=QEOefKU3HQ0',
    duration: '1 hour',
    instructor: 'Dr. Priya Kumar',
    category: 'Herbology'
  },
  {
    id: '5',
    title: 'Growing Medicinal Plants',
    description: 'Guide to cultivating medicinal plants in your garden.',
    imageUrl: 'https://img.freepik.com/free-photo/couple-propagating-their-houseplants-as-hobby-together_53876-143253.jpg?t=st=1746722067~exp=1746725667~hmac=abaaed6c086428f8975c1191cca5071b902545e7b9d903a6c57bdd1dbb033cda&w=1380',
    videoUrl: 'https://www.youtube.com/watch?v=_GqJMCEwJuQ',
    duration: '30 mins',
    instructor: 'Prof. Michael Green',
    category: 'Cultivation'
  },
  {
    id: '6',
    title: 'Vegan Medicinal Plants',
    description: 'Choose Vegan Food types.',
    imageUrl: 'https://img.freepik.com/free-photo/couple-propagating-their-houseplants-as-hobby-together_53876-143253.jpg?t=st=1746722067~exp=1746725667~hmac=abaaed6c086428f8975c1191cca5071b902545e7b9d903a6c57bdd1dbb033cda&w=1380',
    videoUrl: 'https://www.youtube.com/watch?v=G5o4ym5in_w',
    duration: '1.5 hours',
    instructor: 'Prof. Michael Green',
    category: 'Cultivation'
  }
];
