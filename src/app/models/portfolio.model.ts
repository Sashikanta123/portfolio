export interface StatItem {
  label: string;
  value: string;
  icon: string;
}

export interface ProfileInfo {
  name: string;
  role: string;
  subtitle: string;
  tagline: string;
  titles: string[];
  bio: string;
  location: string;
  phone: string;
  email: string;
  avatarUrl: string;
  fullPhotoUrl?: string;
  headshotUrl?: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeFileName: string;
  stats: StatItem[];
}

export interface SkillItem {
  name: string;
  proficiency: number; // 0 to 100
  level: string;       // 'Advanced' | 'Proficient' | 'Intermediate'
  icon: string;        // Bootstrap icon class
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  badge: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  icon: string;
  featured: boolean;
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  type: 'experience' | 'education';
  categoryBadge: string;
  bulletPoints: string[];
  techStack?: string[];
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  partner?: string;
  issueDate: string;
  duration: string;
  category: string;
  credentialBadge: string;
  imagePath: string;
  pdfPath?: string;
  verifyUrl?: string;
  icon: string;
  skills: string[];
  description: string;
}

export interface ContactInfoCard {
  title: string;
  value: string;
  linkText: string;
  linkHref: string;
  icon: string;
  color: string;
}

export interface ContactFormModel {
  name: string;
  email: string;
  subject: string;
  message: string;
}
