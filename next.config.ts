import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        deviceSizes: [640, 1024, 1280, 1550],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.cdninstagram.com",
            },
        ],
    },
};

export default nextConfig;
