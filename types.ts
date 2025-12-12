export interface Project {
  id: string;
  title: string;
  videoUrl: string;
  videoId: string;
  category: string;
  tags: string[];
}

export type FilterCategory = 'All' | 'Events' | 'Brand Films' | 'Documentary' | 'Podcast';

export interface CategoryMap {
  [key: string]: FilterCategory;
}
