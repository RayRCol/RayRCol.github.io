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
  countdown: string;
  image: string;
  label: string;
  title: string;
}

export interface FooterMeta {
  description: string;
  title: string;
}

export const heroLeftNav: NavLink[] = [
  { label: 'Missions', href: '#missions' },
  { label: 'Explore', href: '#explore' },
  { label: 'Science', href: '/#science' },
];

export const heroRightNav: NavLink[] = [
  { label: 'Technology', href: '#technology' },
  { label: 'News', href: '/reports/' },
  { label: 'About', href: '#about' },
];

export const mobileNav: NavLink[] = [...heroLeftNav, ...heroRightNav];

export const heroContent: HeroContent = {
  eyebrow: 'THE BOUNDARY IS',
  paragraph:
    'We stand at the precipice of the infinite. AEON exists to push human ambition beyond the heliosphere, seeking answers in the dark, and bringing the light of understanding back home.',
  primaryCta: {
    href: '#missions',
    label: 'Explore Missions',
  },
  secondaryCta: {
    href: '#science',
    label: 'Our Science',
  },
  utilityLabel: 'EST. 2024',
};

export const stats: StatBlockProps[] = [
  { value: '14', label: 'Active Missions' },
  { value: '4,200', label: 'Hours in Void' },
  { value: '8', label: 'Planets Surveyed' },
  { value: '2.4B', label: 'Miles Traveled' },
];

export const footerMeta: FooterMeta = {
  title: 'AEON',
  description:
    'Government-backed deep space exploration agency. Pushing the boundaries of human ambition and scientific discovery.',
};

export const footerDirectory: NavLink[] = [
  { label: 'Missions', href: '/missions/' },
  { label: 'Reports', href: '/reports/' },
  { label: 'Technology', href: '/departures/' },
  { label: 'Science', href: '/#science' },
];

export const footerPolicies: string[] = ['Privacy', 'Terms', 'Classified'];
