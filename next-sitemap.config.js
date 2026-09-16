/** @type {import('next-sitemap').IConfig} */
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'zlvpcgia',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});

async function getBlogPaths() {
  const query = `*[_type == "post" && defined(slug.current) && defined(publishedAt)]{ "slug": slug.current }`;
  const posts = await client.fetch(query);
  return posts.map((post) => `/blog/${post.slug}`);
}

module.exports = {
  siteUrl: 'https://pomobuild.ca',
  outDir: './public',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: true,
  autoLastmod: false,
  exclude: ['/admin', '/studio', '/studio/*', '/thank-you', '/blog/*'],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : path === '/tri-cities-renovations' ? 0.9 : config.priority,
    };
  },
  additionalPaths: async (config) => {
    const blogPaths = await getBlogPaths();
    return Promise.all(
      blogPaths.map((path) =>
        config.transform(config, path)
      )
    );
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio', '/thank-you'],
      },
    ],
    additionalSitemaps: [],
  },
};
