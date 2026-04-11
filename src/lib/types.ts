export interface Project {
  id: string;
  title: string;
  videoUrl: string;
  videoId: string;
  platform: "youtube" | "instagram" | "drive";
  category: string;
  tags: string[];
  priority: number;
}

export interface SiteSettings {
  name: string;
  role: string;
  tagline: string;
  location: string;
  bio: string;
  heroVideoId: string;
  profilePhotoUrl: string;
  aboutHeading: string;
  phone: string;
  whatsapp: string;
  email: string;
  socials: {
    instagram: string;
    youtube: string;
    linkedin: string;
  };
}

export interface HeroConfig {
  images: string[];
  intervalMs: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl?: string;
  order: number;
}

export interface Content {
  settings: SiteSettings;
  hero: HeroConfig;
  projects: Project[];
  testimonials: Testimonial[];
  filters: string[];
}
