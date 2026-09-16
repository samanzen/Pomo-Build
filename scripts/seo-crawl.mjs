#!/usr/bin/env node
/**
 * Crawl a running Next.js server and fail on SEO regressions from the
 * 2026-09-15 Pomo Build audits, plus geographic-strategy corrections.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const BASE = process.env.SEO_CRAWL_BASE || 'http://127.0.0.1:3000';

const ROUTES = [
  '/',
  '/about',
  '/blog',
  '/contact',
  '/portfolio',
  '/services',
  '/service-area',
  '/tri-cities-renovations',
  '/services/major-renovations',
  '/services/kitchen-bath',
  '/services/basement-finishing',
  '/services/decks-exteriors',
  '/services/commercial-improvements',
  '/services/handyman-services',
  '/portfolio/modern-kitchen-remodel',
  '/portfolio/luxury-ensuite-bathroom',
  '/portfolio/basement-home-theatre',
  '/portfolio/cedar-deck-patio',
  '/portfolio/commercial-office-fit-out',
  '/portfolio/custom-shelving-repairs',
  '/service-area/port-moody',
  '/service-area/coquitlam',
  '/service-area/port-coquitlam',
  '/service-area/anmore',
  '/service-area/belcarra',
  '/service-area/burnaby',
  '/service-area/vancouver',
  '/service-area/north-vancouver',
  '/service-area/west-vancouver',
  '/service-area/surrey',
  '/service-area/richmond',
  '/service-area/new-westminster',
  '/service-area/maple-ridge',
  '/service-area/pitt-meadows',
  '/service-area/langley',
  '/service-area/delta',
  '/service-area/white-rock',
  '/service-area/tsawwassen',
  '/service-area/lions-bay',
  '/service-area/ubc',
];

const FORBIDDEN_PHRASES = [
  'primary market',
  'primary service area',
  'priority communities',
  'five priority',
  'secondary locations',
  'secondary to our',
  'selected projects',
  'additional metro vancouver coverage',
  'regional estimate path',
  'communities we prioritize',
  'serving these locations first',
  'serving port moody, coquitlam, port coquitlam, anmore, and belcarra first',
];

const GENERAL_SERVICE_PATHS = [
  '/services/major-renovations',
  '/services/kitchen-bath',
  '/services/basement-finishing',
  '/services/decks-exteriors',
  '/services/commercial-improvements',
  '/services/handyman-services',
];

function decode(html) {
  return html
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function extract(html, pattern) {
  return [...html.matchAll(pattern)].map((match) => decode(match[1].trim()));
}

function stripTags(value) {
  return decode(value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}

function metaContent(html, key, attr = 'name') {
  const patterns = [
    new RegExp(`<meta[^>]*${attr}="${key}"[^>]*content="([^"]*)"`, 'i'),
    new RegExp(`<meta[^>]*content="([^"]*)"[^>]*${attr}="${key}"`, 'i'),
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) return decode(match[1].trim());
  }
  return undefined;
}

async function fetchPage(pathName) {
  const url = new URL(pathName, BASE);
  const response = await fetch(url, { redirect: 'manual' });
  const html = await response.text();
  return { path: pathName, url: url.toString(), status: response.status, html };
}

const pages = [];
for (const route of ROUTES) {
  pages.push(await fetchPage(route));
}

const titles = new Map();
const descriptions = new Map();
const errors = [];
const internalHrefs = new Set();

for (const page of pages) {
  if (page.status !== 200) {
    errors.push(`${page.path} returned ${page.status}`);
    continue;
  }

  const title = extract(page.html, /<title>([^<]*)<\/title>/gi)[0];
  const description = metaContent(page.html, 'description');
  const canonicals = extract(page.html, /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/gi);
  if (!canonicals.length) {
    canonicals.push(...extract(page.html, /<link[^>]*href="([^"]*)"[^>]*rel="canonical"/gi));
  }
  const ogTitle = metaContent(page.html, 'og:title', 'property');
  const ogDescription = metaContent(page.html, 'og:description', 'property');
  const twitterTitle = metaContent(page.html, 'twitter:title');
  const twitterDescription = metaContent(page.html, 'twitter:description');
  const h1s = extract(page.html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi).map(stripTags);
  const jsonBlocks = extract(
    page.html,
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi
  );

  if (!title) errors.push(`${page.path} is missing a title`);
  if (!description) errors.push(`${page.path} is missing a meta description`);
  if (canonicals.length !== 1) {
    errors.push(`${page.path} has ${canonicals.length} canonicals`);
  } else if (canonicals[0] !== `https://pomobuild.ca${page.path === '/' ? '' : page.path}`) {
    errors.push(`${page.path} canonical is not the absolute self URL: ${canonicals[0]}`);
  }
  if (title?.includes('Pomo Build | Pomo Build')) {
    errors.push(`${page.path} has a duplicated brand suffix`);
  }
  if (h1s.length !== 1) {
    errors.push(`${page.path} has ${h1s.length} H1s`);
  }
  if (title && ogTitle && ogTitle !== title) {
    errors.push(`${page.path} og:title does not match document title`);
  }
  if (description && ogDescription && ogDescription !== description) {
    errors.push(`${page.path} og:description does not match meta description`);
  }
  if (title && twitterTitle && twitterTitle !== title) {
    errors.push(`${page.path} twitter:title does not match document title`);
  }
  if (description && twitterDescription && twitterDescription !== description) {
    errors.push(`${page.path} twitter:description does not match meta description`);
  }

  if (title) {
    if (titles.has(title)) errors.push(`Duplicate title "${title}" on ${page.path} and ${titles.get(title)}`);
    else titles.set(title, page.path);
  }
  if (description) {
    if (descriptions.has(description)) {
      errors.push(`Duplicate description on ${page.path} and ${descriptions.get(description)}`);
    } else {
      descriptions.set(description, page.path);
    }
  }

  const lowerHtml = page.html.toLowerCase();
  for (const phrase of FORBIDDEN_PHRASES) {
    if (lowerHtml.includes(phrase)) {
      errors.push(`${page.path} contains forbidden geographic hierarchy language: "${phrase}"`);
    }
  }

  for (const [index, block] of jsonBlocks.entries()) {
    let parsed;
    try {
      parsed = JSON.parse(block);
    } catch {
      errors.push(`${page.path} JSON-LD[${index}] is not valid JSON`);
      continue;
    }
    if (
      parsed == null ||
      (Array.isArray(parsed) && parsed.length === 0) ||
      (typeof parsed === 'object' && !Array.isArray(parsed) && Object.keys(parsed).length === 0)
    ) {
      errors.push(`${page.path} JSON-LD[${index}] is empty`);
      continue;
    }

    const nodes = Array.isArray(parsed) ? parsed : [parsed];
    for (const node of nodes) {
      const type = node['@type'];
      if (type === 'Review' || type === 'AggregateRating') {
        errors.push(`${page.path} still emits ${type} schema`);
      }
      if (
        (type === 'HomeAndConstructionBusiness' || type === 'GeneralContractor') &&
        Object.prototype.hasOwnProperty.call(node, 'email')
      ) {
        errors.push(`${page.path} publishes an unconfirmed schema email`);
      }
      if (type === 'Service' && GENERAL_SERVICE_PATHS.includes(page.path)) {
        const served = Array.isArray(node.areaServed) ? node.areaServed : [];
        const names = served.map((item) => (typeof item === 'string' ? item : item?.name)).filter(Boolean);
        if (names.length && names.length < 8) {
          errors.push(`${page.path} service schema areaServed is too narrow: ${names.join(', ')}`);
        }
        if (names.some((name) => /priority|secondary/i.test(String(name)))) {
          errors.push(`${page.path} service schema exposes a market hierarchy`);
        }
      }
    }
  }

  const hrefs = extract(page.html, /href="([^"]+)"/g).filter(
    (href) => href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/studio')
  );
  for (const href of hrefs) {
    const destination = href.split('#')[0];
    if (!destination || destination === '/') continue;
    if (destination.startsWith('/blog/')) {
      errors.push(`${page.path} links to unpublished blog path ${destination}`);
    }
    internalHrefs.add(destination);
  }
}

const home = pages.find((page) => page.path === '/');
if (home) {
  if (!home.html.includes('href="/services/major-renovations"')) {
    errors.push('Homepage is missing the Major Renovations route');
  }
  if (home.html.includes('5 Signs') || home.html.includes('From Our Blog')) {
    errors.push('Homepage still promotes unpublished blog cards');
  }
  if (!home.html.includes('Port Moody Renovation Contractor Serving Metro Vancouver')) {
    errors.push('Homepage H1 is not the Metro Vancouver positioning');
  }
}

const serviceArea = pages.find((page) => page.path === '/service-area');
if (serviceArea) {
  for (const heading of [
    'Tri-Cities and Nearby Communities',
    'North Shore and Howe Sound',
    'Vancouver and Central Metro Vancouver',
    'Northeast Metro Vancouver',
    'Richmond and Delta',
    'Surrey, White Rock and Langley',
  ]) {
    if (!serviceArea.html.includes(heading)) {
      errors.push(`Service-area hub is missing heading: ${heading}`);
    }
  }
  const cityHrefs = [
    '/service-area/port-moody',
    '/service-area/coquitlam',
    '/service-area/vancouver',
    '/service-area/north-vancouver',
    '/service-area/surrey',
  ];
  for (const href of cityHrefs) {
    if (!serviceArea.html.includes(`href="${href}"`)) {
      errors.push(`Service-area hub is missing card link ${href}`);
    }
  }
}

const triCities = pages.find((page) => page.path === '/tri-cities-renovations');
if (triCities && triCities.status !== 200) {
  errors.push('/tri-cities-renovations is not accessible');
}

const brokenBlog = await fetchPage('/blog/5-signs-its-time-to-renovate-your-kitchen');
if (brokenBlog.status !== 404) {
  errors.push(`Unpublished kitchen article returned ${brokenBlog.status} instead of 404`);
}

for (const href of [...internalHrefs].sort()) {
  if (ROUTES.includes(href) || href.startsWith('/blog/')) continue;
  if (href.startsWith('/images/') || href.startsWith('/favicon') || href.endsWith('.xml') || href.endsWith('.txt')) {
    continue;
  }
  const linked = await fetchPage(href);
  if (linked.status >= 400) {
    errors.push(`Internal link ${href} returned ${linked.status}`);
  }
}

const sitemapXml = fs.readFileSync(path.join(process.cwd(), 'public', 'sitemap-0.xml'), 'utf8');
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (sitemapUrls.length !== 39) {
  errors.push(`Committed sitemap has ${sitemapUrls.length} URLs, expected 39`);
}
if (sitemapUrls.includes('https://pomobuild.ca/tri-cities-renovations')) {
  errors.push('Committed sitemap includes /tri-cities-renovations');
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`SEO crawl passed for ${pages.length} routes against ${BASE}`);
assert.ok(pages.length >= 40);
