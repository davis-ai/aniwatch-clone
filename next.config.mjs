/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.flawlessfiles.com',
            },
        ],
    },
};

export default nextConfig;
