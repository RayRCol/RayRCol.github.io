export interface NavLink {
  href: string;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  paragraph: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
  utilityLabel: string;
}

export interface MissionCardProps {
  description: string;
  href: string;
  icon: 'satellite' | 'rocket' | 'star';
  status: string;
  statusTone: 'green' | 'blue' | 'gold';
  title: string;
}

export interface SpectrumBarProps {
  value: number;
}

export interface StatBlockProps {
  label: string;
  value: string;
}

export interface LaunchRowProps {
  date: string;
  detail: string;
  href: string;
  time: string;
  title: string;
}

export interface DiscoveryContent {
  archiveHref: string;
  archiveLabel: string;
  body: string;
  cta: NavLink;
  image: string;
  label: string;
  rangeEnd: string;
  rangeStart: string;
  title: string;
}

export interface NextDepartureContent {
  allHref: string;
  image: string;
  label: string;
  launchDate: string;
  launchTime: string;
  title: string;
}

export interface FooterMeta {
  description: string;
  title: string;
}

export const siteNav: NavLink[] = [
  { label: 'Projects', href: '/missions/' },
  { label: 'Analysis', href: '/reports/' },
  { label: 'Blog', href: '/news/' },
  { label: 'Timeline', href: '/departures/' },
  { label: 'Stack', href: '/technology/' },
  { label: 'Research', href: '/science/' },
  { label: 'About', href: '/about/' },
];

export const heroLeftNav: NavLink[] = [
  { label: 'Projects', href: '/missions/' },
];

export const heroRightNav: NavLink[] = [
  { label: 'About', href: '/about/' },
];

export const mobileNav: NavLink[] = [...heroLeftNav, ...heroRightNav];

export const heroContent: HeroContent = {
  eyebrow: 'DATA SCIENTIST',
  paragraph:
    'Turning raw data into actionable intelligence. I build machine learning models, perform deep exploratory analysis, and craft clear data stories — combining statistical rigor with real-world impact.',
  primaryCta: {
    href: '/missions/',
    label: 'Explore Projects',
  },
  secondaryCta: {
    href: '/reports/',
    label: 'My Analysis',
  },
  utilityLabel: 'ML · DS · AI',
};

export const stats: StatBlockProps[] = [
  { value: '7', label: 'Projects Completed' },
  { value: '5', label: 'ML Models Built' },
  { value: '3', label: 'Years of Experience' },
  { value: '50K+', label: 'Records Analyzed' },
];

export const footerMeta: FooterMeta = {
  title: 'Ramon Rueda',
  description:
    'Data Scientist specializing in Machine Learning and Data Analysis. Building intelligent systems from raw data.',
};

export const footerDirectory: NavLink[] = [...siteNav];

export const footerPolicies: string[] = ['Privacy', 'GitHub', 'LinkedIn'];
