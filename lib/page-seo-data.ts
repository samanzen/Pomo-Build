export type PageSeoRecord = {
  title: string;
  description: string;
  path: string;
  image?: string;
  index?: boolean;
  absoluteTitle?: boolean;
};

export const PAGE_SEO = {
  home: {
    title: 'Pomo Build | Port Moody Renovations & Handyman Services',
    description:
      'Port Moody-based contractor for kitchen, bath, and full-home renovations across the Tri-Cities. Request a free quote.',
    path: '/',
    image: '/images/homepage-hero.webp',
    absoluteTitle: true,
  },
  about: {
    title: 'About Us',
    description:
      'Meet Saman Zen and the Port Moody team behind Pomo Build. Quality renovations and honest communication in the Tri-Cities.',
    path: '/about',
    image: '/images/about-owner-saman-zen.webp',
  },
  blog: {
    title: 'Renovation Tips & Project Insights',
    description:
      'Practical renovation advice and project notes from Pomo Build for homeowners in Port Moody and the Tri-Cities.',
    path: '/blog',
    image: '/images/homepage-hero.webp',
  },
  contact: {
    title: 'Contact Us',
    description:
      'Request a renovation or handyman quote in Port Moody and the Tri-Cities. Call (604) 500-2003 or email info@pomobuild.ca.',
    path: '/contact',
    image: '/images/homepage-hero.webp',
  },
  portfolio: {
    title: 'Renovation Project Portfolio',
    description:
      'See kitchens, bathrooms, decks, basements, and commercial work completed by Pomo Build across Metro Vancouver.',
    path: '/portfolio',
    image: '/images/portfolio-kitchen-1.webp',
  },
  services: {
    title: 'Renovation & Handyman Services',
    description:
      'Major renovations, kitchen and bath remodeling, basement finishing, decks, commercial fit-outs, and handyman work.',
    path: '/services',
    image: '/images/renovation-hero.webp',
  },
  'service-area': {
    title: 'Tri-Cities & Metro Vancouver Service Area',
    description:
      'Primary service in Port Moody, Coquitlam, Port Coquitlam, Anmore, and Belcarra, plus selected Metro Vancouver communities.',
    path: '/service-area',
    image: '/images/location-hero-vancouver.webp',
  },
  'tri-cities-renovations': {
    title: 'Tri-Cities Renovation Contractors',
    description:
      'Kitchen, bathroom, and full-home renovations in Coquitlam, Port Moody, Port Coquitlam, Anmore, and Belcarra.',
    path: '/tri-cities-renovations',
    image: '/images/renovation-hero.webp',
  },
  'services/major-renovations': {
    title: 'Major Home Renovations',
    description:
      'Whole-home and large-scale renovations in the Tri-Cities. Planning, permitting, and project management from Port Moody.',
    path: '/services/major-renovations',
    image: '/images/renovation-hero.webp',
  },
  'services/kitchen-bath': {
    title: 'Kitchen & Bathroom Remodeling',
    description:
      'Kitchen and bathroom remodels in Port Moody and the Tri-Cities, including cabinets, tile, fixtures, and layout updates.',
    path: '/services/kitchen-bath',
    image: '/images/service-bath.webp',
  },
  'services/basement-finishing': {
    title: 'Basement Finishing & Suites',
    description:
      'Basement finishing and secondary-suite construction for Tri-Cities homes. Confirm municipal permits before work begins.',
    path: '/services/basement-finishing',
    image: '/images/basement-hero.webp',
  },
  'services/decks-exteriors': {
    title: 'Decks & Exterior Living Spaces',
    description:
      'Cedar and composite decks, patios, and exterior upgrades built for Metro Vancouver weather, based in Port Moody.',
    path: '/services/decks-exteriors',
    image: '/images/deck-hero.webp',
  },
  'services/commercial-improvements': {
    title: 'Commercial Tenant Improvements',
    description:
      'Office, retail, and tenant-improvement renovations across Metro Vancouver with clear schedules and permitting support.',
    path: '/services/commercial-improvements',
    image: '/images/commercial-hero.webp',
  },
  'services/handyman-services': {
    title: 'Professional Handyman Services',
    description:
      'Insured handyman repairs, installations, painting, and small improvements for homes in Port Moody and nearby cities.',
    path: '/services/handyman-services',
    image: '/images/handyman-hero.webp',
  },
  'portfolio/modern-kitchen-remodel': {
    title: 'Modern Kitchen Remodel in Burnaby',
    description:
      'Burnaby kitchen case study: open-concept layout, custom shaker cabinets, and a quartz waterfall island.',
    path: '/portfolio/modern-kitchen-remodel',
    image: '/images/case-hero-kitchen-1.webp',
  },
  'portfolio/luxury-ensuite-bathroom': {
    title: 'Luxury Ensuite in Coquitlam',
    description:
      'Coquitlam ensuite case study with a frameless glass shower, marble tile, and a floating double vanity.',
    path: '/portfolio/luxury-ensuite-bathroom',
    image: '/images/case-hero-bath-1.webp',
  },
  'portfolio/basement-home-theatre': {
    title: 'Basement Home Theatre in Vancouver',
    description:
      'Vancouver basement finishing case study: insulated home theatre with tiered seating and custom cabinetry.',
    path: '/portfolio/basement-home-theatre',
    image: '/images/case-hero-basement-1.webp',
  },
  'portfolio/cedar-deck-patio': {
    title: 'Cedar Deck in Port Moody',
    description:
      'Port Moody cedar deck case study on a sloped lot, with wide stairs, aluminum railings, and planters.',
    path: '/portfolio/cedar-deck-patio',
    image: '/images/case-hero-deck-1.webp',
  },
  'portfolio/commercial-office-fit-out': {
    title: 'Surrey Office Fit-Out',
    description:
      'Surrey commercial fit-out case study completed in eight weeks, including offices, glass rooms, and a kitchenette.',
    path: '/portfolio/commercial-office-fit-out',
    image: '/images/case-hero-commercial-1.webp',
  },
  'portfolio/custom-shelving-repairs': {
    title: 'Custom Shelving in New Westminster',
    description:
      'New Westminster built-in shelving case study that turned an unused fireplace nook into matching storage.',
    path: '/portfolio/custom-shelving-repairs',
    image: '/images/case-hero-handyman-1.webp',
  },
  'service-area/port-moody': {
    title: 'Port Moody Renovation Contractor',
    description:
      'Local Port Moody renovations for Suter Brook, Klahanie, and Moody Centre. Based on Clarke Street.',
    path: '/service-area/port-moody',
    image: '/images/location-hero-port-moody.webp',
  },
  'service-area/coquitlam': {
    title: 'Coquitlam Renovation Contractor',
    description:
      'Kitchen, bath, and basement renovations in Coquitlam, from Burke Mountain to Austin Heights and Maillardville.',
    path: '/service-area/coquitlam',
    image: '/images/location-hero-coquitlam.webp',
  },
  'service-area/port-coquitlam': {
    title: 'Port Coquitlam Renovation Contractor',
    description:
      'Kitchen remodels, decks, and handyman work for Port Coquitlam homes in Mary Hill, Citadel, and downtown PoCo.',
    path: '/service-area/port-coquitlam',
    image: '/images/location-hero-port-coquitlam.webp',
  },
  'service-area/anmore': {
    title: 'Anmore Custom Home Renovations',
    description:
      'Custom and large-lot renovations in Anmore. Based in Port Moody; serving Anmore homes with careful site planning.',
    path: '/service-area/anmore',
    image: '/images/location-hero-anmore.webp',
  },
  'service-area/belcarra': {
    title: 'Belcarra Waterfront Renovations',
    description:
      'Waterfront and hillside renovations in Belcarra. Based in Port Moody; serving Belcarra with discreet project management.',
    path: '/service-area/belcarra',
    image: '/images/location-hero-belcarra.webp',
  },
  'service-area/burnaby': {
    title: 'Burnaby Home Renovations',
    description:
      'Home, condo, deck, and basement-suite renovations in Burnaby, delivered from our Port Moody shop.',
    path: '/service-area/burnaby',
    image: '/images/location-hero-burnaby.webp',
  },
  'service-area/vancouver': {
    title: 'Vancouver Home Renovations',
    description:
      'Condo, character-home, and handyman renovations in Vancouver. Port Moody-based team serving selected city projects.',
    path: '/service-area/vancouver',
    image: '/images/location-hero-vancouver.webp',
  },
  'service-area/north-vancouver': {
    title: 'North Vancouver Renovations',
    description:
      'Whole-home renovations and weather-ready decks for North Shore homes. Based in Port Moody; serving North Vancouver.',
    path: '/service-area/north-vancouver',
    image: '/images/location-hero-north-vancouver.webp',
  },
  'service-area/west-vancouver': {
    title: 'West Vancouver Home Renovations',
    description:
      'Kitchen, bath, and architectural renovations for West Vancouver homes. Based in Port Moody; serving West Vancouver.',
    path: '/service-area/west-vancouver',
    image: '/images/location-hero-west-vancouver.webp',
  },
  'service-area/surrey': {
    title: 'Surrey Renovation Contractor',
    description:
      'Kitchen remodels, basement suites, and decks for Surrey homes. Port Moody-based contractor serving selected Surrey projects.',
    path: '/service-area/surrey',
    image: '/images/location-hero-surrey.webp',
  },
  'service-area/richmond': {
    title: 'Richmond Renovation Contractor',
    description:
      'Kitchen, whole-home, and media-room renovations in Richmond. Based in Port Moody; serving Richmond homeowners.',
    path: '/service-area/richmond',
    image: '/images/location-hero-richmond.webp',
  },
  'service-area/new-westminster': {
    title: 'New Westminster Renovations',
    description:
      'Heritage kitchens, exterior restoration, and condo upgrades in New Westminster from a Port Moody contractor.',
    path: '/service-area/new-westminster',
    image: '/images/location-hero-new-westminster.webp',
  },
  'service-area/maple-ridge': {
    title: 'Maple Ridge Renovation Contractor',
    description:
      'Kitchen, deck, and full-home remodels in Maple Ridge. Based in Port Moody; serving Maple Ridge family homes.',
    path: '/service-area/maple-ridge',
    image: '/images/location-hero-maple-ridge.webp',
  },
  'service-area/pitt-meadows': {
    title: 'Pitt Meadows Home Renovations',
    description:
      'Decks, kitchen remodels, and handyman repairs in Pitt Meadows. Port Moody-based team serving Pitt Meadows.',
    path: '/service-area/pitt-meadows',
    image: '/images/location-hero-pitt-meadows.webp',
  },
  'service-area/langley': {
    title: 'Langley Home Renovation Contractor',
    description:
      'Family kitchen remodels, decks, and basement suites in Langley. Based in Port Moody; serving Langley homes.',
    path: '/service-area/langley',
    image: '/images/location-hero-langley.webp',
  },
  'service-area/delta': {
    title: 'Delta Home Renovations',
    description:
      'Decks, kitchen and bath updates, and exterior renovations in Delta. Based in Port Moody; serving Delta homes.',
    path: '/service-area/delta',
    image: '/images/location-hero-delta.webp',
  },
  'service-area/white-rock': {
    title: 'White Rock Home Renovations',
    description:
      'Ocean-view decks, kitchen remodels, and condo renovations in White Rock from a Port Moody-based contractor.',
    path: '/service-area/white-rock',
    image: '/images/location-hero-white-rock.webp',
  },
  'service-area/tsawwassen': {
    title: 'Tsawwassen Home Renovations',
    description:
      'Sun decks, open kitchens, and coastal exterior upgrades in Tsawwassen. Based in Port Moody; serving Tsawwassen.',
    path: '/service-area/tsawwassen',
    image: '/images/location-hero-tsawwassen.webp',
  },
  'service-area/lions-bay': {
    title: 'Lions Bay Custom Home Renovations',
    description:
      'Hillside decks and architect-led renovations in Lions Bay. Based in Port Moody; serving Lions Bay properties.',
    path: '/service-area/lions-bay',
    image: '/images/location-hero-lions-bay.webp',
  },
  'service-area/ubc': {
    title: 'UBC & UEL Home Renovations',
    description:
      'Heritage, condo, and custom millwork renovations near UBC and the University Endowment Lands.',
    path: '/service-area/ubc',
    image: '/images/location-hero-ubc.webp',
  },
  'thank-you': {
    title: 'Thank You',
    description: 'We received your project request and will contact you shortly.',
    path: '/thank-you',
    index: false,
  },
} as const satisfies Record<string, PageSeoRecord>;

export type PageSeoKey = keyof typeof PAGE_SEO;

export const INDEXABLE_PAGE_SEO = (Object.values(PAGE_SEO) as PageSeoRecord[]).filter(
  (page) => page.index !== false
);
