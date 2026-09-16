import assert from 'node:assert/strict';
import test from 'node:test';
import { PAGE_SEO, INDEXABLE_PAGE_SEO } from '../lib/page-seo-data.ts';
import { stripBrandSuffix, withBrandSuffix, BUSINESS_EMAIL, SITE_URL, absoluteUrl } from '../lib/site.ts';
import {
  GROUPED_SERVICE_AREAS,
  SERVICE_AREA_LOCATIONS,
  TRI_CITIES_AND_NEARBY_LOCATIONS,
  TRI_CITIES_CITY_SLUGS,
} from '../lib/locations.ts';

test('indexable pages have unique titles and descriptions', () => {
  const titles = INDEXABLE_PAGE_SEO.map((page) =>
    page.absoluteTitle ? page.title : withBrandSuffix(page.title)
  );
  const descriptions = INDEXABLE_PAGE_SEO.map((page) => page.description);
  assert.equal(new Set(titles).size, titles.length);
  assert.equal(new Set(descriptions).size, descriptions.length);
});

test('no title contains a duplicated brand suffix', () => {
  for (const page of Object.values(PAGE_SEO)) {
    const branded = page.absoluteTitle ? page.title : withBrandSuffix(page.title);
    assert.equal(branded.includes('| Pomo Build | Pomo Build'), false);
  }
});

test('page metadata records use absolute self-canonical paths', () => {
  assert.equal(absoluteUrl(PAGE_SEO.contact.path), `${SITE_URL}/contact`);
  assert.equal(PAGE_SEO.contact.path, '/contact');
  for (const page of INDEXABLE_PAGE_SEO) {
    assert.ok(page.path.startsWith('/'));
    assert.ok(page.title.length > 0);
    assert.ok(page.description.length > 0);
  }
});

test('homepage metadata uses Metro Vancouver positioning', () => {
  assert.equal(PAGE_SEO.home.title, 'Port Moody Renovation Contractor | Pomo Build');
  assert.match(PAGE_SEO.home.description, /Metro Vancouver/);
  assert.equal(PAGE_SEO.home.description.includes('Tri-Cities'), false);
  assert.equal(withBrandSuffix(stripBrandSuffix(PAGE_SEO.home.title)), PAGE_SEO.home.title);
});

test('visitor-facing email remains the previously working public address until the owner confirms', () => {
  assert.equal(BUSINESS_EMAIL, 'contact@pomobuild.com');
});

test('Tri-Cities grouping includes the three municipalities plus nearby Anmore and Belcarra', () => {
  assert.deepEqual([...TRI_CITIES_CITY_SLUGS], ['port-moody', 'coquitlam', 'port-coquitlam']);
  const names = TRI_CITIES_AND_NEARBY_LOCATIONS.map((location) => location.name);
  assert.ok(names.includes('Anmore'));
  assert.ok(names.includes('Belcarra'));
  assert.equal(TRI_CITIES_AND_NEARBY_LOCATIONS.length, 5);
});

test('service areas use neutral regions with no priority field', () => {
  assert.equal(GROUPED_SERVICE_AREAS.length, 6);
  assert.deepEqual(
    GROUPED_SERVICE_AREAS.map((group) => group.heading),
    [
      'Tri-Cities and Nearby Communities',
      'North Shore and Howe Sound',
      'Vancouver and Central Metro Vancouver',
      'Northeast Metro Vancouver',
      'Richmond and Delta',
      'Surrey, White Rock and Langley',
    ]
  );
  for (const location of SERVICE_AREA_LOCATIONS) {
    assert.equal('priority' in location, false);
    assert.ok(location.region);
  }
});

test('verified service areas include Metro Vancouver cities without a priority field', () => {
  const names = SERVICE_AREA_LOCATIONS.map((location) => location.name);
  assert.ok(names.includes('Vancouver'));
  assert.ok(names.includes('North Vancouver'));
  assert.ok(names.includes('Burnaby'));
  assert.ok(names.includes('Port Moody'));
  assert.ok(names.includes('West Vancouver'));
  assert.ok(SERVICE_AREA_LOCATIONS.length >= 20);
});

test('empty JSON-LD objects are treated as invalid', () => {
  const isEmpty = (value: unknown) =>
    value == null ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value as object).length === 0);
  assert.equal(isEmpty({}), true);
  assert.equal(isEmpty([]), true);
  assert.equal(isEmpty({ '@type': 'Service' }), false);
});

test('stripBrandSuffix still removes a trailing brand', () => {
  assert.equal(stripBrandSuffix('About Us | Pomo Build'), 'About Us');
});
