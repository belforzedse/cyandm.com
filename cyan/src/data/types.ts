export type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationItem[];
};

export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  archiveImage: string;
  backgroundImageDesktop: string;
  backgroundImageMobile: string;
  accentColor: string;
  categories: string[];
  industries: string[];
  services: string[];
  stats: Array<{ label: string; value: string }>;
  body: string[];
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  highlights: string[];
  processSteps: Array<{ title: string; description: string }>;
  faqs: FAQ[];
  ballFirstColor?: string;
  ballSecondColor?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  categories: string[];
  publishedAt: string;
  author: string;
  body: string[];
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials: Array<{ label: string; url: string }>;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Testimonial = {
  author: string;
  role: string;
  quote: string;
  logo: string;
};

export type HomePageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    cta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    backgroundImage: string;
  };
  metrics: Array<{ label: string; value: string }>;
  projects: Project[];
  services: Service[];
  testimonials: Testimonial[];
  brands: Array<{ name: string; logo: string }>;
  team: TeamMember[];
  posts: BlogPost[];
  faqs: FAQ[];
};

export type ContactDetails = {
  address: string;
  mapEmbed: string;
  phoneNumbers: string[];
  email: string;
  socials: Array<{ label: string; url: string; logo: string }>;
  footerImage: string;
};

export type FooterMenuLink = {
  label: string;
  href: string;
};

export type FooterContent = {
  servicesMenu: FooterMenuLink[];
  blogMenu: FooterMenuLink[];
};

export type LandingPageSection = {
  id: string;
  title: string;
  theme: "light" | "dark";
  description: string;
  media?: { type: "image" | "video"; src: string; alt: string };
  bullets?: string[];
  cta?: { label: string; href: string };
};

