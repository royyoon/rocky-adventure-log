export interface Mission {
  id: number;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  galleryImages: string[];
  videoUrl: string;
  featured: boolean;
  tags: string[];
  missionOutcome: string;
  favoriteMoment: string;
  date: string;
}
