/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
    // NextJS <Image> component needs to whitelist domains for src={}
    {
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'pbs.twimg.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'logos-world.net',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'img.daisyui.com',
      port: '',
      pathname: '/**',
    },
  ],
},
};
export default nextConfig;
