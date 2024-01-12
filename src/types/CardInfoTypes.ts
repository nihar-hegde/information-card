export interface CardInfoTypes {
  id: string;
  imageUrl: string | null;
  name: string;
  description: string;
  interests: string[];
  githubUrl: string | null;
  twitterUrl?: string | null;
  instagramUrl?: string | null;
  linkedinUrl?: string | null;
}
