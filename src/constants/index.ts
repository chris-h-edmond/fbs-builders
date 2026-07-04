/**
 * Application Constants
 */

export interface NavLink {
  label: string;
  href: string;
}

export const NAVIGATION_LINKS: NavLink[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'Impact', href: '/impact' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export const COMPANY_INFO = {
  name: 'FBS Builders Inc.',
  shortName: 'FBS Builders',
  address: '100 Construction Plaza, Suite 400, Chicago, IL 60601',
  phone: '+1 (312) 555-0190',
  email: 'info@fbsbuilders.com',
  salesEmail: 'estimating@fbsbuilders.com',
  workingHours: 'Mon - Fri: 8:00 AM - 5:00 PM CST',
};

export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/fbs-builders',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/fbsbuilders',
    icon: 'instagram',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/fbsbuilders',
    icon: 'twitter',
  },
];

export const SERVICES_SUMMARY = [
  {
    id: 'commercial',
    title: 'Commercial Contracting',
    description: 'High-end retail, offices, and restaurant structures engineered to modern business standards.',
  },
  {
    id: 'design-build',
    title: 'Design-Build Services',
    description: 'Integrated design and construction workflows for streamlined execution and optimal value.',
  },
  {
    id: 'renovation',
    title: 'Tenant Improvement',
    description: 'Bespoke layout reconfigurations, structural modernizations, and premium office fit-outs.',
  },
];
