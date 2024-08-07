module.exports = {
  // REQUIRED: add your own domain name,
  siteUrl: process.env.NEXTAUTH_URL || "https://shipforever",
  generateRobotsTxt: true,
  // use this to exclude routes from the sitemap (i.e. a user dashboard). By default, NextJS app router metadata files are excluded (https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
  exclude: ["/twitter-image.*", "/opengraph-image.*", "/icon.*"],
};