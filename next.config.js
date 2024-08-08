/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'msavatar1.nexon.net',
                port: '',
                pathname: '/Character/**',
            },
        ],
    },
};