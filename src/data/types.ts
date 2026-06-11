export interface ClinicInfo {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  hours: string;
  parking: string;
  mapUrl: string;
  mapEmbedUrl: string;
  whatsappUrl: string;
  practoUrl: string;
  logoImage: string;
  googleMapsPhotosUrl: string;
  elfsightWidgetId: string;
}

export interface Doctor {
  slug: string;
  name: string;
  photo: string;
  degrees: string[];
  university: string;
  pgInfo?: string;
  experience: number;
  experienceLabel: string;
  registration: string;
  specialties: string[];
  memberships?: string[];
  fee: number;
  feeLabel: string;
  rating: number;
  reviewCount: number;
  reviewSource: string;
  bookingUrl: string;
  languages?: string[];
}

export interface Treatment {
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  category: string;
}

export interface Review {
  quote: string;
  source: string;
  rating: number;
  patientName: string;
  timeAgo: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  aspectRatio: "landscape" | "portrait" | "square";
}

export interface StatItem {
  label: string;
  value: string;
  numericValue: number;
  suffix: string;
  icon?: string;
  platform?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SeoData {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  keywords: string[];
}

export interface AboutData {
  headline: string;
  body: string[];
  highlights: string[];
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface CredibilityItem {
  label: string;
  icon: string;
}

export interface TechnologyItem {
  name: string;
  description: string;
  icon: string;
}

export interface ClinicExperienceItem {
  title: string;
  description: string;
  icon: string;
}

export interface FirstVisitItem {
  title: string;
  icon: string;
}

export interface TransformationCase {
  treatmentLabel: string;
  caption: string;
  beforeImage: string;
  afterImage: string;
}

export interface CtaData {
  headline: string;
  subtext: string;
  buttons: { label: string; href: string; variant: "primary" | "secondary" | "outline" }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
