/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: ["de"],
    defaultLocale: "de",
  },
};

module.exports = nextConfig;
