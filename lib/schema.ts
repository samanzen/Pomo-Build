import {
  BUSINESS_ADDRESS,
  BUSINESS_HOURS,
  BUSINESS_ID,
  BUSINESS_PHONE_E164,
  GOOGLE_MAPS_URL,
  LOGO_PATH,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
  absoluteUrl,
} from './site';
import { SERVICE_AREA_LOCATIONS, type ServiceAreaLocation } from './locations';

export type JsonLdObject = Record<string, unknown>;

export function isRenderableJsonLd(value: unknown): value is JsonLdObject | JsonLdObject[] {
  if (value == null) {
    return false;
  }
  if (Array.isArray(value)) {
    return value.length > 0 && value.every((item) => isRenderableJsonLd(item));
  }
  if (typeof value !== 'object') {
    return false;
  }
  return Object.keys(value).length > 0;
}

function businessReference() {
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': BUSINESS_ID,
    name: SITE_NAME,
    url: SITE_URL,
  };
}

function cityAreaServed(locations: ServiceAreaLocation[]) {
  return locations.map((location) => ({
    '@type': 'City',
    name: location.name,
  }));
}

const METRO_VANCOUVER_AREA = {
  '@type': 'AdministrativeArea',
  name: 'Metro Vancouver',
};

export function buildBusinessSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': BUSINESS_ID,
    name: SITE_NAME,
    url: SITE_URL,
    telephone: BUSINESS_PHONE_E164,
    image: absoluteUrl(LOGO_PATH),
    sameAs: [GOOGLE_MAPS_URL],
    openingHours: BUSINESS_HOURS,
    address: {
      '@type': 'PostalAddress',
      ...BUSINESS_ADDRESS,
    },
    areaServed: [METRO_VANCOUVER_AREA, ...cityAreaServed(SERVICE_AREA_LOCATIONS)],
    description:
      'Pomo Build is a Port Moody-based contractor offering renovations, construction, and handyman services across Metro Vancouver.',
  };
}

export function buildWebsiteSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: {
      '@id': BUSINESS_ID,
    },
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
): JsonLdObject | undefined {
  if (!items.length) {
    return undefined;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildServiceSchema({
  name,
  description,
  path,
  serviceType,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed?: ServiceAreaLocation[];
}): JsonLdObject | undefined {
  if (!name || !description || !path) {
    return undefined;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType,
    description,
    url: absoluteUrl(path),
    provider: businessReference(),
    areaServed: [
      METRO_VANCOUVER_AREA,
      ...cityAreaServed(areaServed ?? SERVICE_AREA_LOCATIONS),
    ],
  };
}

export function buildFaqSchema(
  faqs: Array<{ question: string; answer: string }>
): JsonLdObject | undefined {
  const visibleFaqs = faqs.filter((faq) => faq.question.trim() && faq.answer.trim());
  if (!visibleFaqs.length) {
    return undefined;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: visibleFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildCaseStudySchema({
  headline,
  description,
  path,
  image,
}: {
  headline: string;
  description: string;
  path: string;
  image: string;
}): JsonLdObject | undefined {
  if (!headline || !description || !path || !image) {
    return undefined;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    mainEntityOfPage: absoluteUrl(path),
    image: [absoluteUrl(image)],
    author: businessReference(),
    publisher: {
      '@type': 'Organization',
      '@id': BUSINESS_ID,
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(LOGO_PATH),
      },
    },
  };
}
