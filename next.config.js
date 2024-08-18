/** @type {import('next').NextConfig} */
const {PrismaPlugin} = require("@prisma/nextjs-monorepo-workaround-plugin");

module.exports = {
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.plugins = [...config.plugins, new PrismaPlugin()]
        }

        return config
    },
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