import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
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
import { PRIORITY_LOCATIONS, SECONDARY_LOCATIONS } from './locations';

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

export function buildBusinessSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': BUSINESS_ID,
    name: SITE_NAME,
    url: SITE_URL,
    telephone: BUSINESS_PHONE_E164,
    email: BUSINESS_EMAIL,
    image: absoluteUrl(LOGO_PATH),
    sameAs: [GOOGLE_MAPS_URL],
    openingHours: BUSINESS_HOURS,
    address: {
      '@type': 'PostalAddress',
      ...BUSINESS_ADDRESS,
    },
    areaServed: [
      ...PRIORITY_LOCATIONS.map((location) => ({
        '@type': 'City',
        name: location.name,
      })),
      ...SECONDARY_LOCATIONS.map((location) => ({
        '@type': 'City',
        name: location.name,
      })),
    ],
    description:
      'Pomo Build is a Port Moody-based contractor offering renovations, construction, and handyman services across the Tri-Cities and Metro Vancouver.',
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
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
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
    areaServed: PRIORITY_LOCATIONS.map((location) => ({
      '@type': 'City',
      name: location.name,
    })),
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
