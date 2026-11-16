import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

test('committed sitemap index still points at sitemap-0.xml on the canonical domain', () => {
  const indexPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  const xml = fs.readFileSync(indexPath, 'utf8');
  assert.match(xml, /<loc>https:\/\/pomobuild.ca\/sitemap-0.xml<\/loc>/);
});

test('child sitemap lists published canonical pages and excludes drafts, studio, thank-you, and guides', () => {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap-0.xml');
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

  assert.ok(urls.includes('https://pomobuild.ca'));
  assert.ok(urls.includes('https://pomobuild.ca/services/kitchen-bath'));
  assert.ok(urls.includes('https://pomobuild.ca/tri-cities-renovations'));
  assert.ok(urls.includes('https://pomobuild.ca/service-area/port-moody'));
  assert.equal(urls.includes('https://pomobuild.ca/thank-you'), false);
  assert.equal(urls.includes('https://pomobuild.ca/studio'), false);
  assert.equal(urls.some((url) => url.includes('/guides')), false);
  assert.equal(urls.some((url) => url.includes('/blog/')), false);
  assert.equal(new Set(urls).size, urls.length);
});
