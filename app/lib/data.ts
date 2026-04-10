import { Mission } from '../types';
import fs from 'fs';
import path from 'path';

export function getMissions(): Mission[] {
  const filePath = path.join(process.cwd(), 'data', 'missions.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getMissionBySlug(slug: string): Mission | undefined {
  const missions = getMissions();
  return missions.find((m) => m.slug === slug);
}

export function getMissionsByCategory(category: string): Mission[] {
  const missions = getMissions();
  // Case insensitive match
  return missions.filter((m) => m.category.toLowerCase() === category.toLowerCase());
}

export function getFeaturedMissions(): Mission[] {
  const missions = getMissions();
  return missions.filter((m) => m.featured);
}

export function getAllCategories(): string[] {
  const missions = getMissions();
  const categories = new Set(missions.map(m => m.category));
  return Array.from(categories);
}
