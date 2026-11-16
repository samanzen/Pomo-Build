/** @type {import('next-sitemap').IConfig} */
const { createClient } = require('@sanity/client');

const SITE_URL = 'https://pomobuild.ca';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'zlvpcgia',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-08-12',
});

const HIGH_PRIORITY_PATHS = new Set([
  '/',
  '/services/kitchen-bath',
  '/tri-cities-renovations',
  '/service-area/port-moody',
  '/service-area/coquitlam',
  '/service-area/port-coquitlam',
  '/service-area/anmore',
  '/service-area/belcarra',
  '/contact',
]);

async function getPublishedBlogPaths() {
  const query = `*[_type == "post" && defined(slug.current) && defined(publishedAt) && !(_id in path("drafts.**"))]{
    "slug": slug.current,
    publishedAt,
    _updatedAt
  }`;
  try {
    const posts = await client.fetch(query);
    return (posts || [])
      .filter((post) => post?.slug)
      .map((post) => ({
        loc: `/blog/${post.slug}`,
        lastmod: post._updatedAt || post.publishedAt,
      }));
  } catch {
    return [];
  }
}

module.exports = {
  siteUrl: SITE_URL,
  outDir: './public',
  generateRobotsTxt: true,
  autoLastmod: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: true,
  exclude: [
    '/admin',
    '/admin/*',
    '/studio',
    '/studio/*',
    '/thank-you',
    '/guides',
    '/guides/*',
    '/blog',
  ],
  transform: async (config, path) => {
    if (path === '/blog') {
      return null;
    }
    let priority = config.priority;
    if (path === '/') priority = 1.0;
    else if (HIGH_PRIORITY_PATHS.has(path)) priority = 0.9;
    else if (path.startsWith('/services')) priority = 0.8;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
    };
  },
  additionalPaths: async () => {
    const blogPaths = await getPublishedBlogPaths();
    return blogPaths.map((path) => ({
      loc: path.loc,
      lastmod: path.lastmod,
      changefreq: 'monthly',
      priority: 0.6,
    }));
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio', '/thank-you', '/admin', '/guides'],
      },
    ],
    transformRobotsTxt: async (_, robotsTxt) =>
      robotsTxt
        .split('\n')
        .filter((line) => !line.startsWith('Host:') && line !== '# Host' && line !== '# *')
        .join('\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim() + '\n',
  },
};
