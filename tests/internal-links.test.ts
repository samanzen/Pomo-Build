import assert from 'node:assert/strict';
import test from 'node:test';
import { HOMEPAGE_SERVICE_CARDS, SERVICES } from '../lib/services.ts';
import { CITY_SERVICE_CARDS, WHOLE_HOME_INTENT_PATTERN } from '../lib/city-service-cards.ts';
import { PORTFOLIO_PROJECTS } from '../lib/portfolio.ts';
import { SERVICE_AREA_LOCATIONS, PRIORITY_LOCATIONS } from '../lib/locations.ts';

test('homepage Major Renovations card points to major renovations', () => {
  const major = HOMEPAGE_SERVICE_CARDS.find((card) => card.title === 'Major Renovations');
  assert.ok(major);
  assert.equal(major.href, '/services/major-renovations');
});

test('every homepage service card maps to its intended service route', () => {
  for (const card of HOMEPAGE_SERVICE_CARDS) {
    const match = SERVICES.find((service) => service.title === card.title);
    assert.ok(match, `Missing service definition for ${card.title}`);
    assert.equal(card.href, match.href);
  }
});

test('city service cards do not send whole-home intent to the wrong service', () => {
  for (const [slug, cards] of Object.entries(CITY_SERVICE_CARDS)) {
    for (const card of cards) {
      if (WHOLE_HOME_INTENT_PATTERN.test(card.title)) {
        assert.equal(
          card.href,
          '/services/major-renovations',
          `${slug}: "${card.title}" should map to major renovations`
        );
      }
      assert.match(card.href, /^\/services\//);
    }
  }
});

test('Anmore and Belcarra custom-home cards map to major renovations', () => {
  const anmore = CITY_SERVICE_CARDS.anmore.find((card) => card.title === 'Custom Home Renovations');
  const belcarra = CITY_SERVICE_CARDS.belcarra.find((card) => card.title === 'Custom Home Remodels');
  assert.equal(anmore?.href, '/services/major-renovations');
  assert.equal(belcarra?.href, '/services/major-renovations');
});

test('every city page has a service-card mapping', () => {
  for (const location of SERVICE_AREA_LOCATIONS) {
    assert.ok(CITY_SERVICE_CARDS[location.slug], `Missing cards for ${location.slug}`);
  }
});

test('priority locations include the five Tri-Cities communities', () => {
  assert.deepEqual(
    PRIORITY_LOCATIONS.map((location) => location.slug),
    ['port-moody', 'coquitlam', 'port-coquitlam', 'anmore', 'belcarra']
  );
});

test('portfolio projects have unique metadata fields and related services', () => {
  const titles = PORTFOLIO_PROJECTS.map((project) => project.title);
  assert.equal(new Set(titles).size, titles.length);
  for (const project of PORTFOLIO_PROJECTS) {
    assert.ok(project.serviceHref.startsWith('/services/'));
    assert.ok(project.heroImage.startsWith('/images/'));
  }
});
