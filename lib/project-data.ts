import projectData from "./project-data.json";

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  captionBn: string;
}

export interface TechCategory {
  category: string;
  categoryBn: string;
  items: string[];
}

export interface UserRole {
  role: string;
  roleBn: string;
  description: string;
  descriptionBn: string;
  icon: string;
  features: string[];
  featuresBn: string[];
}

export interface AiFeature {
  name: string;
  nameBn: string;
  description: string;
  descriptionBn: string;
  trigger: string;
  triggerBn: string;
  output?: string;
  outputBn?: string;
  supportedQueries?: string[];
  supportedQueriesBn?: string[];
  riskLevels?: { level: string; range: string; action: string; actionBn: string }[];
}

export interface DatabaseDomain {
  name: string;
  nameBn: string;
  models: string[];
  description: string;
  descriptionBn: string;
}

export interface SecurityItem {
  aspect: string;
  aspectBn: string;
  detail: string;
  detailBn: string;
}

export interface PdfDocument {
  name: string;
  nameBn: string;
  contents: string;
  contentsBn: string;
}

export interface DeploymentConfig {
  platform: string;
  database: string;
  storage: string;
  cron: string;
  email: string;
  ai: string;
}

export interface DemoCredential {
  role: string;
  roleBn: string;
  email: string;
  password: string;
}

export interface RoadmapPhase {
  phase: string;
  timeline: string;
  items: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  taglineBn: string;
  category: string;
  status: string;
  statusBn: string;
  liveUrl?: string;
  thumbnail: string;
  heroImage: string;
  accentColor: string;
  demoCredentials?: DemoCredential[];
  gallery: GalleryImage[];
  overview: string;
  overviewBn: string;
  highlights: string[];
  highlightsBn: string[];
  techStack: TechCategory[];
  userRoles: UserRole[];
  aiFeatures: AiFeature[];
  database: {
    totalModels: number;
    domains: DatabaseDomain[];
  };
  security: SecurityItem[];
  pdfDocuments: PdfDocument[];
  deployment: DeploymentConfig;
  roadmap: RoadmapPhase[];
}

export interface ProjectListItem {
  slug: string;
  name: string;
  tagline: string;
  thumbnail: string;
  category: string;
  status: string;
}

const projects: Project[] = projectData.projects as Project[];

export function getAllProjects(): ProjectListItem[] {
  return projects.map((p) => ({
    slug: p.slug,
    name: p.name,
    tagline: p.tagline,
    thumbnail: p.thumbnail,
    category: p.category,
    status: p.status,
  }));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFirstProjectSlug(): string {
  return projects[0]?.slug ?? "";
}
