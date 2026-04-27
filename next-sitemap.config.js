/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://aqsa-zam-zam-mirza-johar-baig-law-f.vercel.app/',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: 'public',
}
