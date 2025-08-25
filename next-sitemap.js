/** @type {import('next-sitemap').IConfig} */
const { client } = require('./sanity/client'); // Adjust the path if needed

async function getBlogPaths() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const posts = await client.fetch(query);
  return posts.map(post => `/blog/${post.slug}`);
}

module.exports = {
  siteUrl: 'https://www.pomobuild.ca',
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
