import assert from 'node:assert/strict';
import test from 'node:test';
import { PAGE_SEO, INDEXABLE_PAGE_SEO } from '../lib/page-seo-data.ts';
import { stripBrandSuffix, withBrandSuffix, BUSINESS_EMAIL, SITE_URL, absoluteUrl } from '../lib/site.ts';
import { PRIORITY_LOCATIONS } from '../lib/locations.ts';

test('indexable pages have unique titles and descriptions', () => {
  const titles = INDEXABLE_PAGE_SEO.map((page) =>
    page.absoluteTitle ? stripBrandSuffix(page.title) : withBrandSuffix(page.title)
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

test('confirmed public email is the .ca address', () => {
  assert.equal(BUSINESS_EMAIL, 'info@pomobuild.ca');
});

test('priority locations include Anmore and Belcarra', () => {
  const names = PRIORITY_LOCATIONS.map((location) => location.name);
  assert.ok(names.includes('Anmore'));
  assert.ok(names.includes('Belcarra'));
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
