/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        BASE_URL: process.env.BASE_URL,
    },
    pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};

module.exports = nextConfig;
