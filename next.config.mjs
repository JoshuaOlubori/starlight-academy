/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000', // localhost
        'https://reimagined-yodel-46rp7jvrj4pcjx4x-3000.app.github.dev/',
        'reimagined-yodel-46rp7jvrj4pcjx4x.github.dev', // Codespaces URL
        // Add other URLs if needed
      ],
    },
  },
};

export default nextConfig;
