import type { NextConfig } from "next";

const sharedHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  async headers() {
    return [
      // Strict CSP for the main site (everything except /studio)
      {
        source: "/((?!studio).*)",
        headers: [
          ...sharedHeaders,
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self'",
              "img-src 'self' data: blob: https://img.youtube.com https://cdn.sanity.io https://images.unsplash.com",
              "frame-src https://www.youtube.com https://drive.google.com",
              "frame-ancestors 'none'",
              "connect-src 'self' https://*.sanity.io https://*.api.sanity.io",
              "media-src 'self'",
            ].join("; "),
          },
        ],
      },
      // Relaxed CSP for Sanity Studio (requires unsafe-eval + more connect sources)
      {
        source: "/studio/(.*)",
        headers: [
          ...sharedHeaders,
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://cdn.sanity.io https://images.unsplash.com",
              "frame-src 'self'",
              "connect-src 'self' https://*.sanity.io https://*.api.sanity.io wss://*.sanity.io",
              "media-src 'self' https://*.sanity.io",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
