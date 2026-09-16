import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const FROZEN_SITEMAP_URLS = [
  'https://pomobuild.ca/portfolio/basement-home-theatre',
  'https://pomobuild.ca/contact',
  'https://pomobuild.ca/portfolio/commercial-office-fit-out',
  'https://pomobuild.ca/portfolio/cedar-deck-patio',
  'https://pomobuild.ca/portfolio/custom-shelving-repairs',
  'https://pomobuild.ca/portfolio/luxury-ensuite-bathroom',
  'https://pomobuild.ca/portfolio/modern-kitchen-remodel',
  'https://pomobuild.ca/services/basement-finishing',
  'https://pomobuild.ca/services/commercial-improvements',
  'https://pomobuild.ca/services/decks-exteriors',
  'https://pomobuild.ca/services/handyman-services',
  'https://pomobuild.ca/services/kitchen-bath',
  'https://pomobuild.ca/about',
  'https://pomobuild.ca/blog',
  'https://pomobuild.ca',
  'https://pomobuild.ca/portfolio',
  'https://pomobuild.ca/service-area/anmore',
  'https://pomobuild.ca/service-area/burnaby',
  'https://pomobuild.ca/service-area/coquitlam',
  'https://pomobuild.ca/service-area/delta',
  'https://pomobuild.ca/service-area/langley',
  'https://pomobuild.ca/service-area/new-westminster',
  'https://pomobuild.ca/service-area/maple-ridge',
  'https://pomobuild.ca/service-area/belcarra',
  'https://pomobuild.ca/service-area/north-vancouver',
  'https://pomobuild.ca/service-area',
  'https://pomobuild.ca/service-area/pitt-meadows',
  'https://pomobuild.ca/service-area/port-coquitlam',
  'https://pomobuild.ca/service-area/port-moody',
  'https://pomobuild.ca/service-area/tsawwassen',
  'https://pomobuild.ca/service-area/richmond',
  'https://pomobuild.ca/service-area/ubc',
  'https://pomobuild.ca/service-area/vancouver',
  'https://pomobuild.ca/service-area/west-vancouver',
  'https://pomobuild.ca/service-area/white-rock',
  'https://pomobuild.ca/services',
  'https://pomobuild.ca/services/major-renovations',
  'https://pomobuild.ca/service-area/lions-bay',
  'https://pomobuild.ca/service-area/surrey',
];

test('committed sitemap URL inventory matches origin/main and excludes tri-cities-renovations', () => {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap-0.xml');
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

  assert.equal(urls.length, 39);
  assert.deepEqual(urls, FROZEN_SITEMAP_URLS);
  assert.equal(urls.includes('https://pomobuild.ca/tri-cities-renovations'), false);
});
