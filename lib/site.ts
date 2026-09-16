export const SITE_URL = 'https://pomobuild.ca';
export const SITE_NAME = 'Pomo Build';
export const BRAND_SUFFIX = 'Pomo Build';

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Previously working public email from the live website.
 * Official address is unconfirmed: contact@pomobuild.com vs info@pomobuild.ca.
 * Do not publish this value in structured data until the owner confirms one address.
 */
export const BUSINESS_EMAIL = 'contact@pomobuild.com';
export const BUSINESS_PHONE_DISPLAY = '(604) 500-2003';
export const BUSINESS_PHONE_E164 = '+1-604-500-2003';
export const BUSINESS_PHONE_TEL = 'tel:+16045002003';

export const BUSINESS_ADDRESS = {
  streetAddress: '1924 Clarke St',
  addressLocality: 'Port Moody',
  addressRegion: 'BC',
  postalCode: 'V3H 1X9',
  addressCountry: 'CA',
} as const;

export const BUSINESS_ADDRESS_LINE =
  '1924 Clarke St, Port Moody, BC V3H 1X9';

export const BUSINESS_HOURS = 'Mo-Sa 08:00-18:00';
export const BUSINESS_HOURS_DISPLAY = 'Mon – Sat: 8am – 6pm';
export const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/kRkRN6CmWb7mMX7s6';
export const GOOGLE_MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d333432.4638791345!2d-122.86884595000001!3d49.23960545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43f55dce88b1a187%3A0xaaa51629ca4acee6!2sPomo%20Build!5e0!3m2!1sen!2sca!4v1754508326972!5m2!1sen!2sca';

export const DEFAULT_OG_IMAGE = '/images/homepage-hero.webp';
export const LOGO_PATH = '/images/pomo-build-logo-white.webp';

export function absoluteUrl(path = '/'): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  if (!path || path === '/') {
    return SITE_URL;
  }
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function stripBrandSuffix(title: string): string {
  return title
    .replace(/\s*\|\s*Pomo Build(\s*\|\s*Pomo Build)*\s*$/gi, '')
    .trim();
}

export function withBrandSuffix(title: string): string {
  const cleaned = stripBrandSuffix(title);
  if (!cleaned) {
    return SITE_NAME;
  }
  if (cleaned === SITE_NAME || cleaned.startsWith(`${SITE_NAME} |`)) {
    return cleaned;
  }
  return `${cleaned} | ${BRAND_SUFFIX}`;
}
