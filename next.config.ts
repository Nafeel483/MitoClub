/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // you're exporting statically
  images: {
    unoptimized: true, // disable built-in optimization for static export
  },
};

export default nextConfig;
