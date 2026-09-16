import type { ServiceSlug } from './services';

export type PortfolioProject = {
  slug: string;
  title: string;
  href: `/portfolio/${string}`;
  category: string;
  location: string;
  locationSlug?: string;
  serviceSlug: ServiceSlug;
  serviceHref: `/services/${ServiceSlug}`;
  imageSrc: string;
  heroImage: string;
  afterImage: string;
  challenge: string;
  solution: string;
  scope: string;
  materials: string;
  headline: string;
  description: string;
  quote?: {
    text: string;
    attribution: string;
  };
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: 'modern-kitchen-remodel',
    title: 'Modern Kitchen Remodel',
    href: '/portfolio/modern-kitchen-remodel',
    category: 'Kitchens',
    location: 'Burnaby, BC',
    locationSlug: 'burnaby',
    serviceSlug: 'kitchen-bath',
    serviceHref: '/services/kitchen-bath',
    imageSrc: '/images/portfolio-kitchen-1.webp',
    heroImage: '/images/case-hero-kitchen-1.webp',
    afterImage: '/images/case-kitchen-1-after.webp',
    challenge:
      'The original 1990s kitchen was dark, cramped, and closed off from the main living area. With outdated oak cabinets and laminate countertops, it was no longer functional for a modern family that loved to entertain.',
    solution:
      'We removed the non-structural wall separating the kitchen and living room to create a bright, open-concept space. The project included a full gut renovation with custom white shaker cabinets, a large quartz waterfall island, and a herringbone tile backsplash.',
    scope: 'Full kitchen gut renovation and open-concept layout change in a Burnaby family home.',
    materials: 'Custom white shaker cabinets, quartz waterfall island, herringbone tile backsplash.',
    headline: 'Case Study: Modern Kitchen Remodel in Burnaby, BC',
    description:
      'Open-concept kitchen remodel in Burnaby with custom shaker cabinets, a quartz island, and a brighter family layout.',
    quote: {
      text: 'Pomo Build didn\'t just give us a new kitchen; they gave us a new heart for our home. The quality and attention to detail were second to none. We couldn\'t be happier.',
      attribution: 'The Johnson Family, Burnaby',
    },
  },
  {
    slug: 'luxury-ensuite-bathroom',
    title: 'Luxury Ensuite Bathroom',
    href: '/portfolio/luxury-ensuite-bathroom',
    category: 'Bathrooms',
    location: 'Coquitlam, BC',
    locationSlug: 'coquitlam',
    serviceSlug: 'kitchen-bath',
    serviceHref: '/services/kitchen-bath',
    imageSrc: '/images/portfolio-bath-1.webp',
    heroImage: '/images/case-hero-bath-1.webp',
    afterImage: '/images/case-bath-1-after.webp',
    challenge:
      'The original master bathroom had a cramped layout, a dated bathtub-shower combo, and a single vanity that provided inadequate storage. The space felt dark and lacked the modern, spa-like feel the homeowners desired.',
    solution:
      'We reconfigured the layout to maximize space, installing a large, frameless glass walk-in shower with floor-to-ceiling marble tile. A new floating double vanity with back-lit mirrors and modern fixtures created a functional and elegant focal point.',
    scope: 'Ensuite bathroom reconfiguration and finish upgrade in a Coquitlam home.',
    materials: 'Frameless glass shower, marble tile, floating double vanity, back-lit mirrors.',
    headline: 'Case Study: Luxury Ensuite Bathroom in Coquitlam, BC',
    description:
      'Coquitlam ensuite remodel with a frameless glass shower, marble tile, and a floating double vanity.',
    quote: {
      text: 'Our new ensuite feels like a five-star hotel. The Pomo Build team was professional, clean, and the craftsmanship on the tilework is flawless. It was a fantastic experience from start to finish.',
      attribution: 'David and Emily R., Port Moody',
    },
  },
  {
    slug: 'basement-home-theatre',
    title: 'Basement Home Theatre',
    href: '/portfolio/basement-home-theatre',
    category: 'Basements',
    location: 'Vancouver, BC',
    locationSlug: 'vancouver',
    serviceSlug: 'basement-finishing',
    serviceHref: '/services/basement-finishing',
    imageSrc: '/images/portfolio-basement-1.webp',
    heroImage: '/images/case-hero-basement-1.webp',
    afterImage: '/images/case-basement-1-after.webp',
    challenge:
      'The homeowners had a large, unfinished basement that was cold, unwelcoming, and only used for storage. They dreamed of a dedicated space for family movie nights but didn\'t know how to handle the concrete floors, exposed pipes, and lack of sound insulation.',
    solution:
      'We designed and built a fully insulated and soundproofed home theatre. This included building a raised platform for tiered seating, installing custom cabinetry for media components, and integrating a full surround sound system and ambient lighting.',
    scope: 'Unfinished Vancouver basement converted into an insulated, sound-managed home theatre.',
    materials: 'Insulation and soundproofing, raised seating platform, custom media cabinetry, ambient lighting.',
    headline: 'Case Study: Basement Home Theatre in Vancouver, BC',
    description:
      'Vancouver basement finishing project that created an insulated home theatre with tiered seating and custom cabinetry.',
    quote: {
      text: 'The team at Pomo Build are true professionals. They took our cold, empty basement and created a home theatre that has become our family\'s favourite room. The soundproofing is amazing!',
      attribution: 'The Miller Family, Vancouver',
    },
  },
  {
    slug: 'cedar-deck-patio',
    title: 'Cedar Deck & Patio',
    href: '/portfolio/cedar-deck-patio',
    category: 'Exteriors',
    location: 'Port Moody, BC',
    locationSlug: 'port-moody',
    serviceSlug: 'decks-exteriors',
    serviceHref: '/services/decks-exteriors',
    imageSrc: '/images/portfolio-deck-1.webp',
    heroImage: '/images/case-hero-deck-1.webp',
    afterImage: '/images/case-deck-1-after.webp',
    challenge:
      'The homeowners had a beautiful, wooded backyard, but a steep slope made it completely unusable for recreation or entertaining. They wanted to create a functional outdoor living space for summer barbecues and family gatherings.',
    solution:
      'We designed and built a multi-level cedar deck that followed the contours of the landscape. The project included wide stairs, modern black aluminum railings for safety and style, and integrated planter boxes to blend seamlessly with the natural surroundings.',
    scope: 'Multi-level cedar deck on a sloped Port Moody backyard, including stairs and railings.',
    materials: 'Cedar decking, aluminum railings, integrated planter boxes.',
    headline: 'Case Study: Custom Cedar Deck in Port Moody, BC',
    description:
      'Port Moody cedar deck built on a sloped lot with wide stairs, aluminum railings, and integrated planters.',
    quote: {
      text: 'Pomo Build turned our unusable sloped backyard into our family\'s favourite summer spot. The quality of the deck is outstanding, and they completed the project ahead of schedule. We couldn\'t be happier with our new outdoor space.',
      attribution: 'The Garcia Family, Port Moody',
    },
  },
  {
    slug: 'commercial-office-fit-out',
    title: 'Commercial Office Fit-out',
    href: '/portfolio/commercial-office-fit-out',
    category: 'Commercial',
    location: 'Surrey, BC',
    locationSlug: 'surrey',
    serviceSlug: 'commercial-improvements',
    serviceHref: '/services/commercial-improvements',
    imageSrc: '/images/portfolio-exterior-1.webp',
    heroImage: '/images/case-hero-commercial-1.webp',
    afterImage: '/images/case-commercial-1-after.webp',
    challenge:
      'A growing tech company needed to move into a larger, empty commercial unit. The challenge was to transform the bare-bones space into a functional, modern, and inspiring work environment that reflected their brand—all within a strict 8-week timeline.',
    solution:
      'We provided a full-service commercial fit-out. This included framing new offices and meeting rooms, installing electrical and data lines, and adding a modern kitchenette. We used glass walls to maintain an open feel and finished with durable, stylish materials like polished concrete floors.',
    scope: 'Eight-week Surrey office tenant improvement, including rooms, electrical, and kitchenette.',
    materials: 'Glass office walls, polished concrete floors, commercial kitchenette finishes.',
    headline: 'Case Study: Commercial Office Fit-out in Surrey, BC',
    description:
      'Surrey commercial fit-out that turned an empty unit into offices, meeting rooms, and a kitchenette on an eight-week schedule.',
    quote: {
      text: 'Pomo Build delivered our new office space on a tight deadline without compromising on quality. Their project management was excellent, and the final result exceeded our expectations. We highly recommend them for any commercial projects.',
      attribution: 'J. Evans, CEO of Tech Innovate',
    },
  },
  {
    slug: 'custom-shelving-repairs',
    title: 'Custom Shelving & Repairs',
    href: '/portfolio/custom-shelving-repairs',
    category: 'Handyman',
    location: 'New Westminster, BC',
    locationSlug: 'new-westminster',
    serviceSlug: 'handyman-services',
    serviceHref: '/services/handyman-services',
    imageSrc: '/images/portfolio-handyman-1.webp',
    heroImage: '/images/case-hero-handyman-1.webp',
    afterImage: '/images/case-handyman-1-after.webp',
    challenge:
      'The client had an awkward, empty nook next to their fireplace that they didn\'t know how to use. They needed a storage solution that was both functional for books and decor, and that aesthetically matched the character of their older home.',
    solution:
      'We designed, built, and installed a set of custom, floor-to-ceiling bookshelves. We used high-quality materials and added detailed trim work to perfectly match the home\'s existing crown molding, creating a seamless, built-in look that maximized storage and enhanced the room\'s architecture.',
    scope: 'Custom built-in shelving and trim matching in a New Westminster living room nook.',
    materials: 'Custom millwork, painted trim matched to existing crown molding.',
    headline: 'Case Study: Custom Built-in Shelving in New Westminster, BC',
    description:
      'New Westminster custom shelving project that turned an unused fireplace nook into built-in storage.',
    quote: {
      text: 'The craftsmanship is absolutely beautiful. Pomo Build took an awkward, unused nook in our living room and created a stunning and functional set of built-in shelves. It\'s the highlight of the room now.',
      attribution: 'Megan T., New Westminster',
    },
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find((project) => project.slug === slug);
}

export function getProjectsByService(serviceSlug: ServiceSlug): PortfolioProject[] {
  return PORTFOLIO_PROJECTS.filter((project) => project.serviceSlug === serviceSlug);
}

export function getProjectsByLocation(locationSlug: string): PortfolioProject[] {
  return PORTFOLIO_PROJECTS.filter((project) => project.locationSlug === locationSlug);
}

export function getRelatedProjects(slug: string): PortfolioProject[] {
  const current = getProjectBySlug(slug);
  if (!current) {
    return [];
  }
  return PORTFOLIO_PROJECTS.filter(
    (project) =>
      project.slug !== slug &&
      (project.serviceSlug === current.serviceSlug || project.locationSlug === current.locationSlug)
  ).slice(0, 2);
}
