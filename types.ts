export interface Project {
  title: string;
  description: string[];
  tech: string[];
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location?: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
  relevantCoursework?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
  summary: string;
  skills: {
    languages: string[];
    web: string[];
    cloud: string[];
    databases: string[];
    tools: string[];
    spoken: string[];
  };
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}