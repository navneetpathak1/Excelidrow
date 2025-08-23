/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // If you need to set Turbopack root explicitly:
  turbopack: {
    root: new URL('.', import.meta.url).pathname,
  },
};

export default nextConfig;
