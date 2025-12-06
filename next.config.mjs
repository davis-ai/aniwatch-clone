/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.flawlessfiles.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.myanimelist.net',
            },
        ],
    },
};

export default nextConfig;
