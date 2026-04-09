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
  heroImageUrl: string;
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
