#!/usr/bin/env node
/**
 * Crawl a running Next.js server and fail on SEO regressions from the
 * 2026-09-15 Pomo Build audits.
 */
import assert from 'node:assert/strict';

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

function decode(html) {
  return html
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function extract(html, pattern) {
  return [...html.matchAll(pattern)].map((match) => decode(match[1].trim()));
}

async function fetchPage(path) {
  const url = new URL(path, BASE);
  const response = await fetch(url, { redirect: 'manual' });
  const html = await response.text();
  return { path, url: url.toString(), status: response.status, html };
}

const pages = [];
for (const path of ROUTES) {
  pages.push(await fetchPage(path));
}

const titles = new Map();
const descriptions = new Map();
const errors = [];

for (const page of pages) {
  if (page.status !== 200) {
    errors.push(`${page.path} returned ${page.status}`);
    continue;
  }

  const title = extract(page.html, /<title>([^<]*)<\/title>/i)[0];
  const description = extract(
    page.html,
    /<meta\s+name="description"\s+content="([^"]*)"/i
  )[0];
  const canonicals = extract(
    page.html,
    /<link\s+rel="canonical"\s+href="([^"]*)"/i
  );
  const jsonBlocks = extract(
    page.html,
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi
  );

  if (!title) errors.push(`${page.path} is missing a title`);
  if (!description) errors.push(`${page.path} is missing a meta description`);
  if (canonicals.length !== 1) {
    errors.push(`${page.path} has ${canonicals.length} canonicals`);
  } else if (!canonicals[0].startsWith('https://pomobuild.ca')) {
    errors.push(`${page.path} canonical is not absolute: ${canonicals[0]}`);
  }
  if (title?.includes('Pomo Build | Pomo Build')) {
    errors.push(`${page.path} has a duplicated brand suffix`);
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
}

const brokenBlog = await fetchPage('/blog/5-signs-its-time-to-renovate-your-kitchen');
if (brokenBlog.status !== 404) {
  errors.push(`Unpublished kitchen article returned ${brokenBlog.status} instead of 404`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`SEO crawl passed for ${pages.length} routes against ${BASE}`);
assert.ok(pages.length >= 40);
