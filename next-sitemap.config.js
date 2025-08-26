/** @type {import('next-sitemap').IConfig} */
const { createClient } = require('@sanity/client');

// Create a Sanity client
const client = createClient({
  projectId: 'zlvpcgia',       // Replace with your actual project ID
  dataset: 'production',       // Your dataset
  useCdn: true,                // `false` if you want fresh data
  apiVersion: '2023-01-01',    // Use the current date or API version
});

// Fetch all blog slugs from Sanity
async function getBlogPaths() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const posts = await client.fetch(query);
  return posts.map(post => `/blog/${post.slug}`);
}

module.exports = {
  siteUrl: 'https://www.pomobuild.ca',
  outDir: './public',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: true,
  exclude: ['/admin', '/studio'],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  additionalPaths: async (config) => {
    const blogPaths = await getBlogPaths();
    return blogPaths.map(path => ({ loc: path }));
  },
};
