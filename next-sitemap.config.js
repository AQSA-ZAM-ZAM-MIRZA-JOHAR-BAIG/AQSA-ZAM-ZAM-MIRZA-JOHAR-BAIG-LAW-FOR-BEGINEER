/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://law-for-beginners.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: 'public',
}
