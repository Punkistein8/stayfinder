/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            }
        ]
    },
    async headers() {
        return [
            {
                source: "/_next/:path*",
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "https://tudominio.com/api/servers",
                    },
                ],
            },
        ];
    },
}

module.exports = nextConfig
