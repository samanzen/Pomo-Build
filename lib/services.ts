export type ServiceSlug =
  | 'major-renovations'
  | 'kitchen-bath'
  | 'basement-finishing'
  | 'decks-exteriors'
  | 'commercial-improvements'
  | 'handyman-services';

export type ServiceDefinition = {
  slug: ServiceSlug;
  title: string;
  href: `/services/${ServiceSlug}`;
  shortTitle: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const SERVICES: ServiceDefinition[] = [
  {
    slug: 'major-renovations',
    title: 'Major Renovations',
    href: '/services/major-renovations',
    shortTitle: 'Major renovations',
    description:
      'Full-home, condo, and large-scale remodels managed from planning and permitting through final walkthrough.',
    image: '/images/homepage-service-renovation.webp',
    imageAlt: 'A bright, modern living room after a full home renovation.',
  },
  {
    slug: 'kitchen-bath',
    title: 'Kitchen & Bath',
    href: '/services/kitchen-bath',
    shortTitle: 'Kitchen and bath remodeling',
    description:
      'Kitchen and bathroom remodeling, from custom cabinets and counters to tile, fixtures, and lighting.',
    image: '/images/homepage-service-kitchen-bath.webp',
    imageAlt: 'A beautiful modern bathroom with a freestanding tub.',
  },
  {
    slug: 'basement-finishing',
    title: 'Basement Finishing',
    href: '/services/basement-finishing',
    shortTitle: 'Basement finishing',
    description:
      'Finished basements, family rooms, and legal secondary suite construction for extra living space.',
    image: '/images/basement-intro.webp',
    imageAlt: 'A stylish and comfortable finished basement living area by Pomo Build.',
  },
  {
    slug: 'decks-exteriors',
    title: 'Decks & Exteriors',
    href: '/services/decks-exteriors',
    shortTitle: 'Decks and exteriors',
    description:
      'Custom decks, patios, siding, and exterior upgrades built for Metro Vancouver weather.',
    image: '/images/deck-intro.webp',
    imageAlt: 'A beautiful modern cedar deck with outdoor furniture.',
  },
  {
    slug: 'commercial-improvements',
    title: 'Commercial Improvements',
    href: '/services/commercial-improvements',
    shortTitle: 'Commercial improvements',
    description:
      'Office, retail, and tenant-improvement fit-outs with clear schedules and project management.',
    image: '/images/commercial-intro.webp',
    imageAlt: 'A bright and modern open-plan office space.',
  },
  {
    slug: 'handyman-services',
    title: 'Handyman Services',
    href: '/services/handyman-services',
    shortTitle: 'Handyman services',
    description:
      'Repairs, installations, painting, and small improvements handled by insured craftsmen.',
    image: '/images/homepage-service-handyman.webp',
    imageAlt: 'A professional handyman carefully hanging a large piece of art.',
  },
];

export const HOMEPAGE_SERVICE_CARDS = [
  SERVICES.find((service) => service.slug === 'major-renovations')!,
  SERVICES.find((service) => service.slug === 'kitchen-bath')!,
  SERVICES.find((service) => service.slug === 'handyman-services')!,
] as const;

export const SERVICE_HUB_CARDS = SERVICES.map((service) => ({
  title: service.title,
  href: service.href,
  description: service.description,
  cta: `Explore ${service.shortTitle}`,
}));

export function getServiceByHref(href: string): ServiceDefinition | undefined {
  return SERVICES.find((service) => service.href === href);
}

export function getServiceBySlug(slug: ServiceSlug): ServiceDefinition {
  const service = SERVICES.find((item) => item.slug === slug);
  if (!service) {
    throw new Error(`Unknown service slug: ${slug}`);
  }
  return service;
}
