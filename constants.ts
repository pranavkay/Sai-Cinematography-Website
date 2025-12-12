import { Project } from './types';

export const HERO_VIDEO_ID = '2M3c8id9_oI'; 

export const PROFILE = {
  name: 'Sai Vaibhav',
  role: 'Cinematographer',
  location: 'Bangalore, India',
  bio: "I am a visual storyteller based in Bangalore, obsessed with the interplay of light and shadow. Whether it's the high-energy pulse of a corporate launch, the intimate narrative of a documentary, or the polished aesthetic of a brand film, I bring a cinematic perspective to every frame. My work is driven by a passion for capturing authentic moments and translating them into compelling visual experiences.",
  email: 'contact@saivaibhav.com', // Placeholder email
  socials: {
    instagram: '#',
    youtube: '#',
    linkedin: '#'
  }
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ford TIC Launch Event',
    videoUrl: 'https://youtu.be/L4Cs1JafgY4',
    videoId: 'L4Cs1JafgY4',
    category: 'Corporate Event + Architecture',
    tags: ['Events'],
  },
  {
    id: '2',
    title: 'Ola MoveOS2 Launch',
    videoUrl: 'https://youtu.be/iVQxxEQVH-E',
    videoId: 'iVQxxEQVH-E',
    category: 'Event Aftermovie /Product Ad',
    tags: ['Events', 'Brand Films'],
  },
  {
    id: '3',
    title: 'FIL Bangalore Aftermovie',
    videoUrl: 'https://youtu.be/fQGhOKNUhls',
    videoId: 'fQGhOKNUhls',
    category: 'Event Aftermovie',
    tags: ['Events'],
  },
  {
    id: '4',
    title: 'The Estates Club Inauguration',
    videoUrl: 'https://youtu.be/y41W82NXqYc',
    videoId: 'y41W82NXqYc',
    category: 'Event Aftermovie',
    tags: ['Events'],
  },
  {
    id: '5',
    title: 'GrowthSchool Party Aftermovie',
    videoUrl: 'https://youtu.be/WXDwRjA1Im4',
    videoId: 'WXDwRjA1Im4',
    category: 'Event Aftermovie',
    tags: ['Events'],
  },
  {
    id: '6',
    title: 'YogiFi Product Ad',
    videoUrl: 'https://youtu.be/zavY5Lx36o4',
    videoId: 'zavY5Lx36o4',
    category: 'Product Ad',
    tags: ['Brand Films'],
  },
  {
    id: '7',
    title: 'Futurense Leadership Council Film',
    videoUrl: 'https://youtu.be/2M3c8id9_oI',
    videoId: '2M3c8id9_oI',
    category: 'Brand film',
    tags: ['Brand Films'],
  },
  {
    id: '8',
    title: 'Wolves by UpGrad',
    videoUrl: 'https://youtu.be/bgTRGqeFkHk',
    videoId: 'bgTRGqeFkHk',
    category: 'Brand Film',
    tags: ['Brand Films'],
  },
  {
    id: '9',
    title: 'Palo Alto GPTW',
    videoUrl: 'https://youtu.be/ff6PgH2U8N8',
    videoId: 'ff6PgH2U8N8',
    category: 'Brand Film',
    tags: ['Brand Films'],
  },
  {
    id: '10',
    title: 'Scaler Brand Film',
    videoUrl: 'https://youtu.be/9tjVxmUJkWU',
    videoId: '9tjVxmUJkWU',
    category: 'Brand Film',
    tags: ['Brand Films'],
  },
  {
    id: '11',
    title: 'Care Clean Documentary',
    videoUrl: 'https://youtu.be/DQMv4CObusc',
    videoId: 'DQMv4CObusc',
    category: 'Corporate documentary',
    tags: ['Documentary'],
  },
  {
    id: '12',
    title: 'Arihant Group of Institutions',
    videoUrl: 'https://youtu.be/gzbe-qFFmOE',
    videoId: 'gzbe-qFFmOE',
    category: 'Presenter Style Ads',
    tags: ['Brand Films'],
  },
  {
    id: '13',
    title: 'The Other Side Ft. Shwethambri Shetty',
    videoUrl: 'https://www.youtube.com/watch?v=NyVnGXhTvUg&t=3858s',
    videoId: 'NyVnGXhTvUg',
    category: 'Podcast',
    tags: ['Podcast'],
  },
  {
    id: '14',
    title: 'Zerodha Varsity Ft. Nithin Kamath',
    videoUrl: 'https://www.youtube.com/watch?v=Q1PCq9mrPI8',
    videoId: 'Q1PCq9mrPI8',
    category: 'Podcast',
    tags: ['Podcast'],
  },
];

export const FILTERS = ['All', 'Events', 'Brand Films', 'Documentary', 'Podcast'];
